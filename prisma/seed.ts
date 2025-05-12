// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PrismaClient } = require('../src/generated/client')
import type { Plant, MachineType, Machine, ExternalFactor } from '../src/generated/client'
import * as bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

// Helper function to hash passwords
async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}

async function main() {
  // Clear existing data to allow re-running the seeder
  console.log('Čistenie existujúcich dát...')

  // Delete in correct order to respect foreign key constraints
  console.log('Deleting material flows...')
  await prisma.materialFlow.deleteMany({})

  console.log('Deleting machine external factors...')
  await prisma.machineExternalFactor.deleteMany({})

  console.log('Deleting machines...')
  await prisma.machine.deleteMany({})

  console.log('Deleting machine types and external factors...')
  await prisma.machineType.deleteMany({})
  await prisma.externalFactor.deleteMany({})

  console.log('Deleting user-plant relationships...')
  await prisma.userPlant.deleteMany({})

  console.log('Deleting plants...')
  await prisma.plant.deleteMany({})

  // Create admin user if it doesn't exist
  let adminUser = await prisma.user.findUnique({
    where: { email: 'admin' }
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

  // Create a test user if it doesn't exist
  let testUser = await prisma.user.findUnique({
    where: { email: 'test@example.com' }
  })

  if (!testUser) {
    console.log('Vytváram testovacieho používateľa...')
    // Hash test user password too
    const hashedPassword = await hashPassword('heslo123')
    testUser = await prisma.user.create({
      data: {
        firstName: 'Test',
        lastName: 'Používateľ',
        email: 'test@example.com',
        password: hashedPassword // Now properly hashed
      }
    })
  }

  // Create plants
  console.log('Vytváram závody...')
  const plants = [
    {
      name: 'Závod Bratislava',
      description: 'Hlavný výrobný závod v Bratislave',
      length: 5000, // cm
      width: 3000, // cm
      height: 400 // cm
    },
    {
      name: 'Závod Košice',
      description: 'Výrobný závod na východnom Slovensku',
      length: 4000, // cm
      width: 2500, // cm
      height: 350 // cm
    },
    {
      name: 'Centrála Žilina',
      description: 'Vývojové centrum a administratívna budova',
      length: 3000, // cm
      width: 2000, // cm
      height: 300 // cm
    }
  ]

  const createdPlants: Plant[] = []

  for (const plant of plants) {
    const createdPlant = await prisma.plant.create({
      data: plant
    })
    createdPlants.push(createdPlant)

    // Associate the test user with each plant
    await prisma.userPlant.create({
      data: {
        userId: testUser.id,
        plantId: createdPlant.id,
        role: 'Admin'
      }
    })
  }

  // Create machine types
  console.log('Vytváram typy strojov...')
  const machineTypes = [
    {
      name: 'CNC Fréza',
      description: 'Počítačom riadený frézovací stroj'
    },
    {
      name: 'Sústruh',
      description: 'Konvenčný sústruh pre kovové materiály'
    },
    {
      name: 'Laserová rezačka',
      description: 'Vysokovýkonný laserový rezací stroj'
    },
    {
      name: 'Zváračka',
      description: 'Profesionálna zváračka pre priemyselné použitie'
    },
    {
      name: 'Priemyselný robot',
      description: 'Automatizovaný robot pre výrobné linky'
    }
  ]

  const createdMachineTypes: MachineType[] = []

  for (const type of machineTypes) {
    const createdType = await prisma.machineType.create({
      data: type
    })
    createdMachineTypes.push(createdType)
  }

  // Create machines
  console.log('Vytváram stroje...')
  const machines = [
    {
      name: 'CNC Fréza HAAS VF-2',
      serialNumber: 'HAAS-VF2-10045',
      typeId: createdMachineTypes[0].id,
      length: 280, // cm
      width: 200, // cm
      height: 250, // cm
      ownerId: testUser.id,
      plantId: createdPlants[0].id,
      x: 100,
      y: 150,
      z: 0,
      color: '#90CAF9' // Light blue for CNC machines
    },
    {
      name: 'CNC Fréza DMG MORI',
      serialNumber: 'DMG-M2035-8834',
      typeId: createdMachineTypes[0].id,
      length: 300, // cm
      width: 220, // cm
      height: 240, // cm
      ownerId: testUser.id,
      plantId: createdPlants[0].id,
      x: 500,
      y: 150,
      z: 0,
      color: '#90CAF9' // Light blue for CNC machines
    },
    {
      name: 'Sústruh Mazak ST-40',
      serialNumber: 'MZK-ST40-7732',
      typeId: createdMachineTypes[1].id,
      length: 350, // cm
      width: 160, // cm
      height: 180, // cm
      ownerId: testUser.id,
      plantId: createdPlants[0].id,
      x: 900,
      y: 150,
      z: 0,
      color: '#81C784' // Green for lathes
    },
    {
      name: 'Laserová rezačka Trumpf',
      serialNumber: 'TRPF-L5030-3399',
      typeId: createdMachineTypes[2].id,
      length: 600, // cm
      width: 300, // cm
      height: 200, // cm
      ownerId: testUser.id,
      plantId: createdPlants[1].id,
      x: 200,
      y: 300,
      z: 0,
      color: '#FFB74D' // Orange for laser cutters
    },
    {
      name: 'Zváračka Fronius',
      serialNumber: 'FRN-TPS320i-4487',
      typeId: createdMachineTypes[3].id,
      length: 100, // cm
      width: 80, // cm
      height: 120, // cm
      ownerId: testUser.id,
      plantId: createdPlants[1].id,
      x: 600,
      y: 300,
      z: 0,
      color: '#BA68C8' // Purple for welders
    },
    {
      name: 'Priemyselný robot ABB',
      serialNumber: 'ABB-IRB6700-9933',
      typeId: createdMachineTypes[4].id,
      length: 180, // cm
      width: 180, // cm
      height: 220, // cm
      ownerId: testUser.id,
      plantId: createdPlants[2].id,
      x: 400,
      y: 200,
      z: 0,
      color: '#4FC3F7' // Light blue for industrial robots
    },
    {
      name: 'Priemyselný robot Kuka',
      serialNumber: 'KUKA-KR210-8821',
      typeId: createdMachineTypes[4].id,
      length: 200, // cm
      width: 200, // cm
      height: 240, // cm
      ownerId: testUser.id,
      plantId: createdPlants[2].id,
      x: 800,
      y: 200,
      z: 0,
      color: '#4FC3F7' // Light blue for industrial robots
    }
  ]

  const createdMachines: Machine[] = []
  for (const machine of machines) {
    const createdMachine = await prisma.machine.create({
      data: machine
    })
    createdMachines.push(createdMachine)
  }

  // Create external factors
  console.log('Vytváram externé faktory...')
  const externalFactors = [
    {
      name: 'Vibrácie',
      description: 'Mechanické kmitanie a chvenie'
    },
    {
      name: 'Hluk',
      description: 'Vysoký zvukový tlak a nežiadúce zvuky'
    },
    {
      name: 'Tepelné vyžarovanie',
      description: 'Nadmerná produkcia tepla'
    },
    {
      name: 'Elektromagnetické rušenie',
      description: 'EMI - elektromagnetická interferencia'
    },
    {
      name: 'Prašnosť',
      description: 'Produkcia pevných častíc a prachu'
    },
    {
      name: 'Výpary a chemikálie',
      description: 'Produkcia plynov a chemických látok'
    }
  ]

  const createdFactors: ExternalFactor[] = []
  for (const factor of externalFactors) {
    const createdFactor = await prisma.externalFactor.create({
      data: factor
    })
    createdFactors.push(createdFactor)
  }

  // Associate external factors with machines
  console.log('Priraďujem externé faktory k strojom...')
  const machineFactorAssociations = [
    // CNC Fréza HAAS VF-2 - produkuje vibrácie a hluk, citlivá na prašnosť
    {
      machineId: createdMachines[0].id,
      factorId: createdFactors[0].id, // Vibrácie
      isProducer: true,
      isSensitive: false,
      intensity: 7,
      notes: 'Vysokofrekvenčné vibrácie pri vysokorýchlostnom obrábaní'
    },
    {
      machineId: createdMachines[0].id,
      factorId: createdFactors[1].id, // Hluk
      isProducer: true,
      isSensitive: false,
      intensity: 6,
      notes: 'Hluk najmä pri obrábaní tvrdších materiálov'
    },
    {
      machineId: createdMachines[0].id,
      factorId: createdFactors[4].id, // Prašnosť
      isProducer: false,
      isSensitive: true,
      intensity: 8,
      notes: 'Citlivá elektronika a pohyblivé časti'
    },

    // CNC Fréza DMG MORI - podobná charakteristika ako HAAS
    {
      machineId: createdMachines[1].id,
      factorId: createdFactors[0].id, // Vibrácie
      isProducer: true,
      isSensitive: false,
      intensity: 6,
      notes: 'Nižšie vibrácie vďaka pevnejšej konštrukcii'
    },
    {
      machineId: createdMachines[1].id,
      factorId: createdFactors[1].id, // Hluk
      isProducer: true,
      isSensitive: false,
      intensity: 5,
      notes: 'Tichšia prevádzka'
    },

    // Sústruh Mazak - produkuje vibrácie, hluk a teplo
    {
      machineId: createdMachines[2].id,
      factorId: createdFactors[0].id, // Vibrácie
      isProducer: true,
      isSensitive: false,
      intensity: 8,
      notes: 'Výrazné vibrácie pri sústružení'
    },
    {
      machineId: createdMachines[2].id,
      factorId: createdFactors[1].id, // Hluk
      isProducer: true,
      isSensitive: false,
      intensity: 7,
      notes: 'Vyšší hluk pri plnej prevádzke'
    },
    {
      machineId: createdMachines[2].id,
      factorId: createdFactors[2].id, // Tepelné vyžarovanie
      isProducer: true,
      isSensitive: false,
      intensity: 6,
      notes: 'Zahrieva sa pri dlhšej prevádzke'
    },

    // Laserová rezačka - produkuje teplo, výpary a EMI, citlivá na vibrácie
    {
      machineId: createdMachines[3].id,
      factorId: createdFactors[2].id, // Tepelné vyžarovanie
      isProducer: true,
      isSensitive: false,
      intensity: 9,
      notes: 'Značná produkcia tepla pri rezaní'
    },
    {
      machineId: createdMachines[3].id,
      factorId: createdFactors[3].id, // Elektromagnetické rušenie
      isProducer: true,
      isSensitive: true,
      intensity: 7,
      notes: 'Produkuje aj je citlivá na EMI'
    },
    {
      machineId: createdMachines[3].id,
      factorId: createdFactors[5].id, // Výpary a chemikálie
      isProducer: true,
      isSensitive: false,
      intensity: 8,
      notes: 'Výpary pri rezaní plastov a kovov'
    },
    {
      machineId: createdMachines[3].id,
      factorId: createdFactors[0].id, // Vibrácie
      isProducer: false,
      isSensitive: true,
      intensity: 9,
      notes: 'Vyžaduje stabilné prostredie pre presnú prevádzku'
    },

    // Zváračka - produkuje teplo, EMI, výpary, citlivá na prašnosť
    {
      machineId: createdMachines[4].id,
      factorId: createdFactors[2].id, // Tepelné vyžarovanie
      isProducer: true,
      isSensitive: false,
      intensity: 10,
      notes: 'Extrémne vysoké teploty pri zváraní'
    },
    {
      machineId: createdMachines[4].id,
      factorId: createdFactors[3].id, // Elektromagnetické rušenie
      isProducer: true,
      isSensitive: false,
      intensity: 9,
      notes: 'Silné elektromagnetické pole'
    },
    {
      machineId: createdMachines[4].id,
      factorId: createdFactors[5].id, // Výpary a chemikálie
      isProducer: true,
      isSensitive: false,
      intensity: 7,
      notes: 'Zváracie výpary a dym'
    },
    {
      machineId: createdMachines[4].id,
      factorId: createdFactors[4].id, // Prašnosť
      isProducer: false,
      isSensitive: true,
      intensity: 6,
      notes: 'Prach môže ovplyvniť kvalitu zvaru'
    },

    // Priemyselný robot ABB - citlivý na vibrácie, EMI, produkuje menej hluku
    {
      machineId: createdMachines[5].id,
      factorId: createdFactors[0].id, // Vibrácie
      isProducer: true,
      isSensitive: true,
      intensity: 5,
      notes: 'Produkuje mierne vibrácie, ale je na ne aj citlivý'
    },
    {
      machineId: createdMachines[5].id,
      factorId: createdFactors[1].id, // Hluk
      isProducer: true,
      isSensitive: false,
      intensity: 4,
      notes: 'Relatívne tichá prevádzka'
    },
    {
      machineId: createdMachines[5].id,
      factorId: createdFactors[3].id, // Elektromagnetické rušenie
      isProducer: false,
      isSensitive: true,
      intensity: 8,
      notes: 'Citlivé riadiace systémy'
    },

    // Priemyselný robot Kuka - podobná charakteristika ako ABB
    {
      machineId: createdMachines[6].id,
      factorId: createdFactors[0].id, // Vibrácie
      isProducer: true,
      isSensitive: true,
      intensity: 6,
      notes: 'Mierne vibrácie pri rýchlych pohyboch'
    },
    {
      machineId: createdMachines[6].id,
      factorId: createdFactors[1].id, // Hluk
      isProducer: true,
      isSensitive: false,
      intensity: 5,
      notes: 'Servomotory produkujú mierny hluk'
    },
    {
      machineId: createdMachines[6].id,
      factorId: createdFactors[3].id, // Elektromagnetické rušenie
      isProducer: false,
      isSensitive: true,
      intensity: 7,
      notes: 'Citlivý na elektromagnetické rušenie'
    }
  ]

  for (const association of machineFactorAssociations) {
    await prisma.machineExternalFactor.create({
      data: association
    })
  }

  console.log('Seeding dokončený!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
