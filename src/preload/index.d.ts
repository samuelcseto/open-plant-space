import { ElectronAPI } from '@electron-toolkit/preload'

interface ExternalFactor {
  id: number
  name: string
  description?: string
  createdAt: string
  updatedAt: string
  _count?: {
    producers: number
    sensitives: number
  }
}

interface MachineExternalFactor {
  machineId: number
  factorId: number
  isProducer: boolean
  isSensitive: boolean
  intensity?: number
  notes?: string
  createdAt: string
  updatedAt: string
  producedFactor?: ExternalFactor
  sensitiveFactor?: ExternalFactor
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      // Auth
      login: (credentials: { email: string; password: string }) => Promise<any>
      register: (userData: {
        email: string
        password: string
        firstName: string
        lastName: string
      }) => Promise<any>
      logout: () => Promise<any>

      // Plants
      getPlants: () => Promise<any[]>
      getPlant: (id: number) => Promise<any>
      createPlant: (data: any) => Promise<any>
      updatePlant: (id: number, data: any) => Promise<any>
      deletePlant: (id: number) => Promise<any>

      // Machine Types
      getMachineTypes: () => Promise<any[]>
      createMachineType: (data: any) => Promise<any>
      deleteMachineType: (id: number) => Promise<any>

      // Machines
      getMachines: () => Promise<any[]>
      getMachine: (id: number) => Promise<any>
      createMachine: (data: any) => Promise<any>
      updateMachine: (id: number, data: any) => Promise<any>
      deleteMachine: (id: number) => Promise<any>

      // Admin
      adminCreateUser: (userData: any) => Promise<any>
      adminListUsers: () => Promise<any[]>
      adminDeleteUser: (userId: number) => Promise<any>

      // External Factors
      getExternalFactors: () => Promise<ExternalFactor[]>
      createExternalFactor: (data: {
        name: string
        description?: string
      }) => Promise<ExternalFactor>
      updateExternalFactor: (
        id: number,
        data: { name: string; description?: string }
      ) => Promise<ExternalFactor>
      deleteExternalFactor: (id: number) => Promise<ExternalFactor>

      // Machine External Factors
      getMachineFactors: (machineId: number) => Promise<MachineExternalFactor[]>
      associateMachineFactor: (data: {
        machineId: number
        factorId: number
        isProducer: boolean
        isSensitive: boolean
        intensity?: number
        notes?: string
      }) => Promise<MachineExternalFactor>
      removeMachineFactor: (machineId: number, factorId: number) => Promise<MachineExternalFactor>

      // Material Flows
      getPlantMaterialFlows: (plantId: number) => Promise<any[]>
      saveMaterialFlows: (data: any) => Promise<any[]>
      deleteMaterialFlow: (id: number) => Promise<any>

      // Dashboard
      getDashboardStats: () => Promise<{
        plants: number
        machines: number
        machineTypes: number
        success?: boolean
        message?: string
      }>
    }
  }
}
