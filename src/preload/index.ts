import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  // Auth
  login: (credentials) => ipcRenderer.invoke('auth:login', credentials),
  register: (userData) => ipcRenderer.invoke('auth:register', userData),
  logout: () => ipcRenderer.invoke('auth:logout'),

  // Plants
  getPlants: () => ipcRenderer.invoke('plants:list'),
  getPlant: (id) => ipcRenderer.invoke('plants:get', id),
  createPlant: (data) => ipcRenderer.invoke('plants:create', data),
  updatePlant: (id, data) => ipcRenderer.invoke('plants:update', id, data),
  deletePlant: (id) => ipcRenderer.invoke('plants:delete', id),

  // Machine Types
  getMachineTypes: () => ipcRenderer.invoke('machine-types:list'),
  createMachineType: (data) => ipcRenderer.invoke('machine-types:create', data),
  deleteMachineType: (id) => ipcRenderer.invoke('machine-types:delete', id),

  // Machines
  getMachines: () => ipcRenderer.invoke('machines:list'),
  getMachine: (id) => ipcRenderer.invoke('machines:get', id),
  createMachine: (data) => ipcRenderer.invoke('machines:create', data),
  updateMachine: (id, data) => ipcRenderer.invoke('machines:update', id, data),
  deleteMachine: (id) => ipcRenderer.invoke('machines:delete', id),

  // Admin
  adminCreateUser: (userData) => ipcRenderer.invoke('admin:create-user', userData),
  adminListUsers: () => ipcRenderer.invoke('admin:list-users'),
  adminDeleteUser: (userId) => ipcRenderer.invoke('admin:delete-user', userId),

  // External Factors
  getExternalFactors: () => ipcRenderer.invoke('external-factors:list'),
  createExternalFactor: (data) => ipcRenderer.invoke('external-factors:create', data),
  updateExternalFactor: (id, data) => ipcRenderer.invoke('external-factors:update', id, data),
  deleteExternalFactor: (id) => ipcRenderer.invoke('external-factors:delete', id),

  // Machine External Factors
  getMachineFactors: (machineId) => ipcRenderer.invoke('machine-factors:list', machineId),
  associateMachineFactor: (data) => ipcRenderer.invoke('machine-factors:associate', data),
  removeMachineFactor: (machineId, factorId) =>
    ipcRenderer.invoke('machine-factors:remove', machineId, factorId),

  // Material Flows
  getPlantMaterialFlows: (plantId) => ipcRenderer.invoke('material-flows:list-for-plant', plantId),
  saveMaterialFlows: (data) => ipcRenderer.invoke('material-flows:save-batch', data),
  deleteMaterialFlow: (id) => ipcRenderer.invoke('material-flows:delete-flow', id),

  // Dashboard
  getDashboardStats: () => ipcRenderer.invoke('dashboard:stats')
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
