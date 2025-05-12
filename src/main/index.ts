import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'

import fs from 'fs'
import { dbPath, dbUrl, latestMigration, Migration } from './constants'
import log from 'electron-log'
import { prisma, runPrismaCommand } from './prisma'

// Load environment variables from .env file
dotenv.config()

// Use the environment variable for JWT_SECRET
const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_key_for_development'

// Helper function to generate JWT token
function generateToken(userId: number): string {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' })
}

// Function to verify JWT token and extract userId
function verifyToken(token: string): { userId: number } | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: number }
    return decoded
  } catch (error) {
    console.error('Token verification error:', error)
    return null
  }
}

// Function to verify user password
async function verifyPassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
  return await bcrypt.compare(plainPassword, hashedPassword)
}

// For development, hash a password
async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}

// Helper function to get authenticated user ID from request
async function getAuthenticatedUserId(event: Electron.IpcMainInvokeEvent): Promise<number | null> {
  try {
    // Get the token from localStorage using the webContents
    const webContents = event.sender
    const token = await webContents.executeJavaScript('localStorage.getItem("token")')

    if (!token) {
      return null
    }

    const decoded = verifyToken(token)
    return decoded?.userId || null
  } catch (error) {
    console.error('Error getting authenticated user:', error)
    return null
  }
}

// Helper function to check if user is an admin
async function isUserAdmin(event: Electron.IpcMainInvokeEvent): Promise<boolean> {
  try {
    const userId = await getAuthenticatedUserId(event)
    if (!userId) return false

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { isAdmin: true }
    })

    return !!user?.isAdmin
  } catch (error) {
    console.error('Error checking admin status:', error)
    return false
  }
}

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1800,
    height: 1000,
    show: false,
    autoHideMenuBar: true,
    title: 'Open Plant Space', // Set application title in the window
    icon: icon, // Use icon for all platforms, not just Linux
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

async function runPrismaMigrations() {
  let needsMigration: boolean
  const dbExists = fs.existsSync(dbPath)
  if (!dbExists) {
    needsMigration = true
    // prisma for whatever reason has trouble if the database file does not exist yet.
    // So just touch it here
    fs.closeSync(fs.openSync(dbPath, 'w'))
  } else {
    try {
      const latest: Migration[] =
        await prisma.$queryRaw`select * from _prisma_migrations order by finished_at`
      needsMigration = latest[latest.length - 1]?.migration_name !== latestMigration
    } catch (e) {
      log.error(e)
      needsMigration = true
    }
  }

  if (needsMigration) {
    try {
      const schemaPath = join(
        app.getAppPath().replace('app.asar', 'app.asar.unpacked'),
        'prisma',
        'schema.prisma'
      )
      log.info(`Needs a migration. Running prisma migrate with schema path ${schemaPath}`)

      // first create or migrate the database! If you were deploying prisma to a cloud service, this migrate deploy
      // command you would run as part of your CI/CD deployment. Since this is an electron app, it just needs
      // to run every time the production app is started. That way if the user updates the app and the schema has
      // changed, it will transparently migrate their DB.
      await runPrismaCommand({
        command: ['migrate', 'deploy', '--schema', schemaPath],
        dbUrl
      })
      log.info('Migration done.')
    } catch (e) {
      log.error(e)
      process.exit(1)
    }
  } else {
    log.info('Does not need migration')
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(async () => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Run prisma migrations for the database/production
  await runPrismaMigrations()

  // Check if we have any user with admin access
  // If not, create a default admin user
  let adminUser = await prisma.user.findFirst({
    where: { isAdmin: true }
  })

  if (!adminUser) {
    console.log('Creating default admin user')
    // Hash the password before storing
    const hashedPassword = await hashPassword('admin')
    adminUser = await prisma.user.create({
      data: {
        email: 'admin',
        password: hashedPassword,
        firstName: 'Admin',
        lastName: 'User',
        isAdmin: true
      }
    })
  }

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // Authentication API
  ipcMain.handle('auth:login', async (event, credentials) => {
    const { email, password } = credentials

    try {
      // Find user by email
      const user = await prisma.user.findUnique({
        where: { email }
      })

      if (!user) {
        return { success: false, message: 'Invalid email or password' }
      }

      // Verify the password using bcrypt
      const isPasswordValid = await verifyPassword(password, user.password)

      if (!isPasswordValid) {
        return { success: false, message: 'Invalid email or password' }
      }

      // Generate JWT token
      const token = generateToken(user.id)

      // Return user data and token (excluding password)
      const { password: _, ...userWithoutPassword } = user

      return {
        success: true,
        user: userWithoutPassword,
        token
      }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, message: 'An error occurred during login' }
    }
  })

  ipcMain.handle('auth:register', async (event, userData) => {
    const { email, password, firstName, lastName } = userData

    try {
      // Check if user already exists
      const existingUser = await prisma.user.findUnique({
        where: { email }
      })

      if (existingUser) {
        return { success: false, message: 'Email already registered' }
      }

      // Hash the password before storing
      const hashedPassword = await hashPassword(password)

      // Create new user
      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          firstName,
          lastName
        }
      })

      // Generate JWT token
      const token = generateToken(newUser.id)

      // Return user data without password
      const { password: _, ...userWithoutPassword } = newUser

      return {
        success: true,
        user: userWithoutPassword,
        token
      }
    } catch (error) {
      console.error('Registration error:', error)
      return { success: false, message: 'An error occurred during registration' }
    }
  })

  ipcMain.handle('auth:logout', () => {
    // In a real app with sessions, you might invalidate the token on the server
    // For our simple app, the client will handle clearing the token
    return { success: true }
  })

  // Plants API
  ipcMain.handle('plants:list', async (event) => {
    const userId = await getAuthenticatedUserId(event)
    if (!userId) return { success: false, message: 'Authentication required' }

    // Check if user is admin
    const isAdmin = await isUserAdmin(event)

    // If admin, return all plants
    if (isAdmin) {
      const plants = await prisma.plant.findMany()
      return JSON.parse(JSON.stringify(plants))
    }

    // For regular users, only return plants they have access to
    const plants = await prisma.plant.findMany({
      where: {
        users: {
          some: {
            userId
          }
        }
      }
    })
    return JSON.parse(JSON.stringify(plants))
  })

  ipcMain.handle('plants:get', async (event, id) => {
    const userId = await getAuthenticatedUserId(event)
    if (!userId) return { success: false, message: 'Authentication required' }

    const plantId = Number(id)
    const isAdmin = await isUserAdmin(event)

    // Find the plant with its dimensions
    const plant = await prisma.plant.findUnique({
      where: { id: plantId },
      include: {
        users: {
          where: { userId },
          select: { role: true }
        }
      }
    })

    if (!plant) {
      return { success: false, message: 'Plant not found' }
    }

    // Admins can access any plant
    if (isAdmin) {
      return JSON.parse(JSON.stringify(plant))
    }

    // Check if user has access to this plant
    if (plant.users.length === 0) {
      return { success: false, message: 'You do not have access to this plant' }
    }

    // Return serialized data
    return JSON.parse(JSON.stringify(plant))
  })

  ipcMain.handle('plants:create', async (event, data) => {
    const userId = await getAuthenticatedUserId(event)
    if (!userId) return { success: false, message: 'Authentication required' }

    // Parse the data to ensure it's a plain object
    const plantData = JSON.parse(JSON.stringify(data))

    // Create new plant
    const createdPlant = await prisma.plant.create({
      data: {
        name: plantData.name,
        description: plantData.description,
        width: plantData.width,
        length: plantData.length,
        height: plantData.height
      }
    })

    // Assign plant to user
    await prisma.userPlant.create({
      data: {
        userId,
        plantId: createdPlant.id,
        role: 'owner'
      }
    })

    return JSON.parse(JSON.stringify(createdPlant))
  })

  // Add plants:update endpoint
  ipcMain.handle('plants:update', async (event, id, data) => {
    const userId = await getAuthenticatedUserId(event)
    if (!userId) return { success: false, message: 'Authentication required' }

    const plantId = Number(id)
    const isAdmin = await isUserAdmin(event)

    // Parse the data to ensure it's a plain object
    const plantData = JSON.parse(JSON.stringify(data))

    // Check if the plant exists
    const plant = await prisma.plant.findUnique({
      where: { id: plantId },
      include: {
        users: {
          where: { userId },
          select: { role: true }
        }
      }
    })

    if (!plant) {
      return { success: false, message: 'Plant not found' }
    }

    // Admin can update any plant
    if (!isAdmin) {
      // Check if regular user has access to this plant
      if (plant.users.length === 0) {
        return { success: false, message: 'You do not have access to this plant' }
      }
    }

    // Update the plant
    const updatedPlant = await prisma.plant.update({
      where: { id: plantId },
      data: {
        name: plantData.name,
        description: plantData.description,
        width: plantData.width,
        length: plantData.length,
        height: plantData.height
      }
    })

    // Return serialized data
    return JSON.parse(JSON.stringify(updatedPlant))
  })

  // Add plants:delete endpoint
  ipcMain.handle('plants:delete', async (event, id) => {
    const userId = await getAuthenticatedUserId(event)
    if (!userId) return { success: false, message: 'Authentication required' }

    const plantId = Number(id)
    const isAdmin = await isUserAdmin(event)

    // Check if the plant exists
    const plant = await prisma.plant.findUnique({
      where: { id: plantId },
      include: {
        users: {
          where: { userId },
          select: { role: true }
        },
        machines: true
      }
    })

    if (!plant) {
      return { success: false, message: 'Plant not found' }
    }

    // Admin can delete any plant, but regular users need access
    if (!isAdmin && plant.users.length === 0) {
      return { success: false, message: 'You do not have access to this plant' }
    }

    // Check if this plant has any machines
    if (plant.machines && plant.machines.length > 0) {
      return {
        success: false,
        message:
          'Cannot delete a plant that has machines. Please remove or reassign all machines first.'
      }
    }

    // Delete all user-plant relationships
    await prisma.userPlant.deleteMany({
      where: { plantId }
    })

    // Delete the plant
    const result = await prisma.plant.delete({
      where: { id: plantId }
    })

    return JSON.parse(JSON.stringify(result))
  })

  // Machine Types API
  ipcMain.handle('machine-types:list', async (event) => {
    const userId = await getAuthenticatedUserId(event)
    if (!userId) return { success: false, message: 'Authentication required' }

    const machineTypes = await prisma.machineType.findMany({
      include: {
        _count: {
          select: {
            machines: true
          }
        }
      }
    })
    // Return serialized data to ensure it can be cloned
    return JSON.parse(JSON.stringify(machineTypes))
  })

  ipcMain.handle('machine-types:create', async (event, data) => {
    const userId = await getAuthenticatedUserId(event)
    if (!userId) return { success: false, message: 'Authentication required' }

    // Parse the data to ensure it's a plain object
    const machineTypeData = JSON.parse(JSON.stringify(data))
    console.log('Creating machine type', machineTypeData)

    const createdType = await prisma.machineType.create({
      data: {
        name: machineTypeData.name,
        description: machineTypeData.description
      }
    })

    // Return serialized data
    return JSON.parse(JSON.stringify(createdType))
  })

  ipcMain.handle('machine-types:delete', async (event, id) => {
    const userId = await getAuthenticatedUserId(event)
    if (!userId) return { success: false, message: 'Authentication required' }

    const typeId = Number(id)

    // Check if this type is in use by any machines
    const machinesCount = await prisma.machine.count({
      where: { typeId }
    })

    if (machinesCount > 0) {
      return {
        success: false,
        message: 'Cannot delete machine type that is still in use by machines'
      }
    }

    const machineType = await prisma.machineType.findUnique({
      where: { id: typeId }
    })

    if (!machineType) {
      return { success: false, message: 'Machine type not found' }
    }

    const result = await prisma.machineType.delete({
      where: { id: typeId }
    })
    return JSON.parse(JSON.stringify(result))
  })

  // Machines API
  ipcMain.handle('machines:list', async (event) => {
    const userId = await getAuthenticatedUserId(event)
    if (!userId) return { success: false, message: 'Authentication required' }

    const isAdmin = await isUserAdmin(event)

    // Admins can see all machines
    if (isAdmin) {
      const machines = await prisma.machine.findMany({
        include: {
          type: true,
          plant: {
            select: {
              id: true,
              name: true
            }
          }
        }
      })
      return JSON.parse(JSON.stringify(machines))
    }

    // For regular users, get only machines they have access to
    // Get all plants the user has access to
    const userPlants = await prisma.userPlant.findMany({
      where: { userId },
      select: { plantId: true }
    })

    const plantIds = userPlants.map((up) => up.plantId)

    // Get user's own machines and machines assigned to plants they have access to
    const machines = await prisma.machine.findMany({
      where: {
        OR: [{ ownerId: userId }, { plantId: { in: plantIds } }]
      },
      include: {
        type: true,
        plant: {
          select: {
            id: true,
            name: true
          }
        }
      }
    })

    return JSON.parse(JSON.stringify(machines))
  })

  ipcMain.handle('machines:get', async (event, id) => {
    const userId = await getAuthenticatedUserId(event)
    if (!userId) return { success: false, message: 'Authentication required' }

    const isAdmin = await isUserAdmin(event)
    const machineId = Number(id)

    const machine = await prisma.machine.findUnique({
      where: { id: machineId },
      include: {
        type: true,
        plant: {
          select: {
            id: true,
            name: true
          }
        }
      }
    })

    if (!machine) {
      return { success: false, message: 'Machine not found' }
    }

    // Admins can access any machine
    if (isAdmin) {
      return JSON.parse(JSON.stringify(machine))
    }

    // For regular users, verify access to this machine
    if (machine.ownerId === userId) {
      // User is the owner, access granted
      return JSON.parse(JSON.stringify(machine))
    } else if (machine.plantId) {
      // Check if user has access to the plant
      const userPlant = await prisma.userPlant.findUnique({
        where: {
          userId_plantId: {
            userId,
            plantId: machine.plantId
          }
        }
      })
      if (userPlant) {
        return JSON.parse(JSON.stringify(machine))
      }
    }

    // User doesn't have access
    return { success: false, message: 'Access denied' }
  })

  ipcMain.handle('machines:create', async (event, data) => {
    const userId = await getAuthenticatedUserId(event)
    if (!userId) return { success: false, message: 'Authentication required' }

    // Parse incoming data to ensure it's a plain object
    const machineData = JSON.parse(JSON.stringify(data))
    const isAdmin = await isUserAdmin(event)

    // If assigning to a plant, ensure user has access to the plant (admins can assign to any plant)
    if (machineData.plantId && !isAdmin) {
      const userPlant = await prisma.userPlant.findUnique({
        where: {
          userId_plantId: {
            userId,
            plantId: machineData.plantId
          }
        }
      })

      if (!userPlant) {
        return { success: false, message: 'User does not have access to this plant' }
      }
    }

    const createdMachine = await prisma.machine.create({
      data: {
        name: machineData.name,
        serialNumber: machineData.serialNumber,
        typeId: machineData.typeId,
        length: machineData.length,
        width: machineData.width,
        height: machineData.height,
        ownerId: userId,
        plantId: machineData.plantId,
        x: machineData.x,
        y: machineData.y,
        z: machineData.z,
        rotation: machineData.rotation || 0, // Add rotation support
        color: machineData.color || '#6D28D9' // Default color is purple if not provided
      }
    })

    return JSON.parse(JSON.stringify(createdMachine))
  })

  ipcMain.handle('machines:update', async (event, id, data) => {
    const userId = await getAuthenticatedUserId(event)
    if (!userId) return { success: false, message: 'Authentication required' }

    // Parse incoming data to ensure it's a plain object
    const machineData = JSON.parse(JSON.stringify(data))
    const machineId = Number(id)
    const isAdmin = await isUserAdmin(event)

    // Check if machine exists
    const machine = await prisma.machine.findUnique({
      where: { id: machineId },
      include: {
        plant: {
          include: {
            users: {
              where: { userId }
            }
          }
        }
      }
    })

    if (!machine) {
      return { success: false, message: 'Machine not found' }
    }

    // Admin can update any machine
    if (!isAdmin) {
      // Regular users must be the owner or have access to the plant the machine is assigned to
      if (machine.ownerId !== userId && (!machine.plant || machine.plant.users.length === 0)) {
        return { success: false, message: 'You do not have permission to edit this machine' }
      }

      // If assigning to a new plant, check if user has access to that plant
      if (machineData.plantId && machineData.plantId !== machine.plantId) {
        const userPlant = await prisma.userPlant.findUnique({
          where: {
            userId_plantId: {
              userId,
              plantId: machineData.plantId
            }
          }
        })

        if (!userPlant) {
          return { success: false, message: 'User does not have access to this plant' }
        }
      }
    }

    const updatedMachine = await prisma.machine.update({
      where: { id: machineId },
      data: {
        name: machineData.name,
        serialNumber: machineData.serialNumber,
        typeId: machineData.typeId,
        length: machineData.length,
        width: machineData.width,
        height: machineData.height,
        plantId: machineData.plantId,
        x: machineData.x,
        y: machineData.y,
        z: machineData.z,
        rotation: machineData.rotation, // Add rotation support
        color: machineData.color // Add color support
      }
    })

    return JSON.parse(JSON.stringify(updatedMachine))
  })

  ipcMain.handle('machines:delete', async (event, id) => {
    const userId = await getAuthenticatedUserId(event)
    if (!userId) return { success: false, message: 'Authentication required' }

    const machineId = Number(id)
    const isAdmin = await isUserAdmin(event)

    // Check if the machine exists
    const machine = await prisma.machine.findUnique({
      where: { id: machineId }
    })

    if (!machine) {
      return { success: false, message: 'Machine not found' }
    }

    // Admins can delete any machine
    if (!isAdmin && machine.ownerId !== userId) {
      return { success: false, message: 'Only the owner can delete this machine' }
    }

    const result = await prisma.machine.delete({
      where: { id: machineId }
    })

    return JSON.parse(JSON.stringify(result))
  })

  // Admin API - User management
  ipcMain.handle('admin:create-user', async (event, userData) => {
    const userId = await getAuthenticatedUserId(event)
    if (!userId) return { success: false, message: 'Authentication required' }

    // Check if the requester is an admin
    const isAdmin = await isUserAdmin(event)
    if (!isAdmin) {
      return { success: false, message: 'Admin privileges required' }
    }

    const { email, password, firstName, lastName, isAdmin: makeAdmin = false } = userData

    try {
      // Check if user already exists
      const existingUser = await prisma.user.findUnique({
        where: { email }
      })

      if (existingUser) {
        return { success: false, message: 'Email already registered' }
      }

      // Hash the password before storing
      const hashedPassword = await hashPassword(password)

      // Create new user
      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          firstName,
          lastName,
          isAdmin: makeAdmin // Allow creating admin users
        }
      })

      // Return user data without password
      const { password: _, ...userWithoutPassword } = newUser

      return {
        success: true,
        user: userWithoutPassword
      }
    } catch (error) {
      console.error('User creation error:', error)
      return { success: false, message: 'An error occurred during user creation' }
    }
  })

  // Admin API - List users
  ipcMain.handle('admin:list-users', async (event) => {
    const userId = await getAuthenticatedUserId(event)
    if (!userId) return { success: false, message: 'Authentication required' }

    // Check if the requester is an admin
    const isAdmin = await isUserAdmin(event)
    if (!isAdmin) {
      return { success: false, message: 'Admin privileges required' }
    }

    try {
      const users = await prisma.user.findMany({
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          isAdmin: true,
          createdAt: true
        }
      })

      return JSON.parse(JSON.stringify(users))
    } catch (error) {
      console.error('Error listing users:', error)
      return { success: false, message: 'An error occurred while fetching users' }
    }
  })

  // Admin API - Delete user
  ipcMain.handle('admin:delete-user', async (event, userId) => {
    const adminId = await getAuthenticatedUserId(event)
    if (!adminId) return { success: false, message: 'Authentication required' }

    // Check if the requester is an admin
    const isAdmin = await isUserAdmin(event)
    if (!isAdmin) {
      return { success: false, message: 'Admin privileges required' }
    }

    // Parse userId to number
    const userIdToDelete = Number(userId)

    // Don't allow admins to delete themselves
    if (adminId === userIdToDelete) {
      return { success: false, message: 'You cannot delete your own account' }
    }

    try {
      // Check if user exists
      const userToDelete = await prisma.user.findUnique({
        where: { id: userIdToDelete }
      })

      if (!userToDelete) {
        return { success: false, message: 'User not found' }
      }

      // Delete the user
      await prisma.user.delete({
        where: { id: userIdToDelete }
      })

      return { success: true, message: 'User deleted successfully' }
    } catch (error) {
      console.error('Error deleting user:', error)
      return { success: false, message: 'An error occurred while deleting the user' }
    }
  })

  // External Factors API
  ipcMain.handle('external-factors:list', async (event) => {
    const userId = await getAuthenticatedUserId(event)
    if (!userId) return { success: false, message: 'Authentication required' }

    try {
      const factors = await prisma.externalFactor.findMany({
        include: {
          _count: {
            select: {
              producers: true,
              sensitives: true
            }
          }
        }
      })
      return JSON.parse(JSON.stringify(factors))
    } catch (error) {
      console.error('Error fetching external factors:', error)
      return { success: false, message: 'An error occurred while fetching external factors' }
    }
  })

  ipcMain.handle('external-factors:create', async (event, data) => {
    const userId = await getAuthenticatedUserId(event)
    if (!userId) return { success: false, message: 'Authentication required' }

    // Parse the data to ensure it's a plain object
    const factorData = JSON.parse(JSON.stringify(data))

    try {
      const createdFactor = await prisma.externalFactor.create({
        data: {
          name: factorData.name,
          description: factorData.description
        }
      })
      return JSON.parse(JSON.stringify(createdFactor))
    } catch (error) {
      console.error('Error creating external factor:', error)
      return { success: false, message: 'An error occurred while creating the external factor' }
    }
  })

  ipcMain.handle('external-factors:update', async (event, id, data) => {
    const userId = await getAuthenticatedUserId(event)
    if (!userId) return { success: false, message: 'Authentication required' }

    const factorId = Number(id)
    const factorData = JSON.parse(JSON.stringify(data))

    try {
      const updatedFactor = await prisma.externalFactor.update({
        where: { id: factorId },
        data: {
          name: factorData.name,
          description: factorData.description
        }
      })
      return JSON.parse(JSON.stringify(updatedFactor))
    } catch (error) {
      console.error('Error updating external factor:', error)
      return { success: false, message: 'An error occurred while updating the external factor' }
    }
  })

  ipcMain.handle('external-factors:delete', async (event, id) => {
    const userId = await getAuthenticatedUserId(event)
    if (!userId) return { success: false, message: 'Authentication required' }

    const factorId = Number(id)

    try {
      // Check if the factor is in use
      const machineFactorsCount = await prisma.machineExternalFactor.count({
        where: { factorId }
      })

      if (machineFactorsCount > 0) {
        return {
          success: false,
          message: 'Cannot delete an external factor that is being used by machines'
        }
      }

      const deletedFactor = await prisma.externalFactor.delete({
        where: { id: factorId }
      })
      return JSON.parse(JSON.stringify(deletedFactor))
    } catch (error) {
      console.error('Error deleting external factor:', error)
      return { success: false, message: 'An error occurred while deleting the external factor' }
    }
  })

  // Machine-Factor associations API
  ipcMain.handle('machine-factors:list', async (event, machineId) => {
    const userId = await getAuthenticatedUserId(event)
    if (!userId) return { success: false, message: 'Authentication required' }

    try {
      // Convert machineId to number but don't redefine the variable
      const machineIdNum = Number(machineId)
      const machineFactors = await prisma.machineExternalFactor.findMany({
        where: { machineId: machineIdNum },
        include: {
          producedFactor: true,
          sensitiveFactor: true
        }
      })
      return JSON.parse(JSON.stringify(machineFactors))
    } catch (error) {
      console.error('Error fetching machine factors:', error)
      return { success: false, message: 'An error occurred while fetching machine factors' }
    }
  })

  ipcMain.handle('machine-factors:associate', async (event, data) => {
    const userId = await getAuthenticatedUserId(event)
    if (!userId) return { success: false, message: 'Authentication required' }

    const associationData = JSON.parse(JSON.stringify(data))
    const { machineId, factorId, isProducer, isSensitive, intensity, notes } = associationData

    try {
      // Check if there's an existing association
      const existingAssociation = await prisma.machineExternalFactor.findUnique({
        where: {
          machineId_factorId: {
            machineId: Number(machineId),
            factorId: Number(factorId)
          }
        }
      })

      if (existingAssociation) {
        // Update existing association
        const updatedAssociation = await prisma.machineExternalFactor.update({
          where: {
            machineId_factorId: {
              machineId: Number(machineId),
              factorId: Number(factorId)
            }
          },
          data: {
            isProducer,
            isSensitive,
            intensity: intensity ? Number(intensity) : null,
            notes
          }
        })
        return JSON.parse(JSON.stringify(updatedAssociation))
      } else {
        // Create new association
        const newAssociation = await prisma.machineExternalFactor.create({
          data: {
            machineId: Number(machineId),
            factorId: Number(factorId),
            isProducer,
            isSensitive,
            intensity: intensity ? Number(intensity) : null,
            notes
          }
        })
        return JSON.parse(JSON.stringify(newAssociation))
      }
    } catch (error) {
      console.error('Error associating factor with machine:', error)
      return {
        success: false,
        message: 'An error occurred while associating the factor with the machine'
      }
    }
  })

  ipcMain.handle('machine-factors:remove', async (event, machineId, factorId) => {
    const userId = await getAuthenticatedUserId(event)
    if (!userId) return { success: false, message: 'Authentication required' }

    try {
      const deletedAssociation = await prisma.machineExternalFactor.delete({
        where: {
          machineId_factorId: {
            machineId: Number(machineId),
            factorId: Number(factorId)
          }
        }
      })
      return JSON.parse(JSON.stringify(deletedAssociation))
    } catch (error) {
      console.error('Error removing factor from machine:', error)
      return {
        success: false,
        message: 'An error occurred while removing the factor from the machine'
      }
    }
  })

  // Material Flows API
  ipcMain.handle('material-flows:list-for-plant', async (event, plantId) => {
    const userId = await getAuthenticatedUserId(event)
    if (!userId) return { success: false, message: 'Authentication required' }

    try {
      // Convert plantId to number
      const plantIdNum = Number(plantId)

      // Check if user has access to this plant
      const isAdmin = await isUserAdmin(event)
      if (!isAdmin) {
        const userPlant = await prisma.userPlant.findUnique({
          where: {
            userId_plantId: {
              userId,
              plantId: plantIdNum
            }
          }
        })

        if (!userPlant) {
          return { success: false, message: 'You do not have access to this plant' }
        }
      }

      // Get all material flows for this plant
      const materialFlows = await prisma.materialFlow.findMany({
        where: { plantId: plantIdNum },
        include: {
          fromMachine: {
            select: {
              id: true,
              name: true
            }
          },
          toMachine: {
            select: {
              id: true,
              name: true
            }
          }
        }
      })

      return JSON.parse(JSON.stringify(materialFlows))
    } catch (error) {
      console.error('Error fetching material flows:', error)
      return { success: false, message: 'An error occurred while fetching material flows' }
    }
  })

  ipcMain.handle('material-flows:save-batch', async (event, data) => {
    const userId = await getAuthenticatedUserId(event)
    if (!userId) return { success: false, message: 'Authentication required' }

    try {
      const { plantId, flows } = JSON.parse(JSON.stringify(data))
      const plantIdNum = Number(plantId)

      // Check if user has access to this plant
      const isAdmin = await isUserAdmin(event)
      if (!isAdmin) {
        const userPlant = await prisma.userPlant.findUnique({
          where: {
            userId_plantId: {
              userId,
              plantId: plantIdNum
            }
          }
        })

        if (!userPlant) {
          return { success: false, message: 'You do not have access to this plant' }
        }
      }

      // Process all flows in a transaction
      const result = await prisma.$transaction(async (prisma) => {
        // First, get all existing flows for this plant to identify what needs to be updated/deleted
        const existingFlows = await prisma.materialFlow.findMany({
          where: { plantId: plantIdNum }
        })

        // Process each flow from the request
        const processedFlows = await Promise.all(
          flows.map(async (flow) => {
            const { fromMachineId, toMachineId, flowAmount } = flow

            // Convert IDs to numbers
            const fromId = Number(fromMachineId)
            const toId = Number(toMachineId)

            // Skip if from and to are the same machine
            if (fromId === toId) {
              return null
            }

            // Find existing flow
            const existingFlow = existingFlows.find(
              (ef) => ef.fromMachineId === fromId && ef.toMachineId === toId
            )

            if (existingFlow) {
              // Update existing flow
              return prisma.materialFlow.update({
                where: { id: existingFlow.id },
                data: { flowAmount: Number(flowAmount) }
              })
            } else {
              // Create new flow
              return prisma.materialFlow.create({
                data: {
                  plantId: plantIdNum,
                  fromMachineId: fromId,
                  toMachineId: toId,
                  flowAmount: Number(flowAmount)
                }
              })
            }
          })
        )

        return processedFlows.filter((flow) => flow !== null)
      })

      return JSON.parse(JSON.stringify(result))
    } catch (error) {
      console.error('Error saving material flows:', error)
      return { success: false, message: 'An error occurred while saving material flows' }
    }
  })

  ipcMain.handle('material-flows:delete-flow', async (event, id) => {
    const userId = await getAuthenticatedUserId(event)
    if (!userId) return { success: false, message: 'Authentication required' }

    try {
      const flowId = Number(id)

      // Find the flow to check permissions
      const flow = await prisma.materialFlow.findUnique({
        where: { id: flowId },
        include: {
          plant: {
            include: {
              users: {
                where: { userId }
              }
            }
          }
        }
      })

      if (!flow) {
        return { success: false, message: 'Material flow not found' }
      }

      // Check permissions (Admin or has access to the plant)
      const isAdmin = await isUserAdmin(event)
      if (!isAdmin && (!flow.plant || flow.plant.users.length === 0)) {
        return { success: false, message: 'You do not have permission to delete this flow' }
      }

      // Delete the flow
      const result = await prisma.materialFlow.delete({
        where: { id: flowId }
      })

      return JSON.parse(JSON.stringify(result))
    } catch (error) {
      console.error('Error deleting material flow:', error)
      return { success: false, message: 'An error occurred while deleting the material flow' }
    }
  })

  // Dashboard Stats API
  ipcMain.handle('dashboard:stats', async (event) => {
    const userId = await getAuthenticatedUserId(event)
    if (!userId) return { success: false, message: 'Authentication required' }

    try {
      const isAdmin = await isUserAdmin(event)

      // Get counts based on user's access
      let plantsCount, machinesCount, machineTypesCount

      // Admin can see all data
      if (isAdmin) {
        plantsCount = await prisma.plant.count()
        machinesCount = await prisma.machine.count()
        machineTypesCount = await prisma.machineType.count()
      } else {
        // For regular users, get only plants they have access to
        const userPlants = await prisma.userPlant.findMany({
          where: { userId },
          select: { plantId: true }
        })

        const plantIds = userPlants.map((up) => up.plantId)

        plantsCount = plantIds.length

        // Count machines they own or in their plants
        machinesCount = await prisma.machine.count({
          where: {
            OR: [{ ownerId: userId }, { plantId: { in: plantIds } }]
          }
        })

        // Machine types are global, so count is the same for everyone
        machineTypesCount = await prisma.machineType.count()
      }

      return {
        plants: plantsCount,
        machines: machinesCount,
        machineTypes: machineTypesCount
      }
    } catch (error) {
      console.error('Error fetching dashboard stats:', error)
      return { success: false, message: 'An error occurred while fetching dashboard stats' }
    }
  })

  createWindow()

  // const user = await prisma.user.create({
  //   data: {
  //     firstName: 'Samuel',
  //     lastName: 'Cseto',
  //     email: 'samuelcseto@gmail.com',
  //     password: '123456'
  //   }
  // })

  // console.log(user)

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
