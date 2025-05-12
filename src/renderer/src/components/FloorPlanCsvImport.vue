<template>
  <div class="csv-import-container">
    <h3>Import Layout from CSV</h3>
    <div class="import-form">
      <input
        ref="fileInput"
        type="file"
        accept=".csv"
        class="file-input"
        @change="handleFileInput"
      />
      <button class="import-button" :disabled="!file" @click="importCsv">Import Layout</button>
    </div>
    <div v-if="importStatus" class="import-status" :class="statusClass">
      {{ importStatus }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Papa from 'papaparse'

const emit = defineEmits(['layout-imported'])

const file = ref(null)
const fileInput = ref(null)
const importStatus = ref('')
const statusClass = ref('')

// Handle file selection
const handleFileInput = (event) => {
  file.value = event.target.files[0]
  importStatus.value = ''
}

// Import and process the CSV file
const importCsv = async () => {
  if (!file.value) {
    setStatus('Please select a CSV file first', 'error')
    return
  }

  try {
    const text = await readFile(file.value)
    const result = Papa.parse(text, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true // Convert numbers automatically
    })

    if (result.errors.length > 0) {
      throw new Error(`CSV parsing error: ${result.errors[0].message}`)
    }

    if (!validateCsvData(result.data)) {
      throw new Error('Invalid CSV format. Expected columns: ID, X, Y')
    }

    // Success - emit the parsed data
    setStatus('CSV imported successfully', 'success')
    emit('layout-imported', result.data)

    // Reset the file input
    if (fileInput.value) {
      fileInput.value.value = ''
      file.value = null
    }
  } catch (error) {
    console.error('CSV import error:', error)
    setStatus(`Error: ${error.message}`, 'error')
  }
}

// Validate the CSV data structure
const validateCsvData = (data) => {
  if (!data || data.length === 0) return false

  const firstRow = data[0]
  const hasRequiredColumns =
    firstRow.hasOwnProperty('ID') && firstRow.hasOwnProperty('X') && firstRow.hasOwnProperty('Y')

  return hasRequiredColumns
}

// Helper function to read file
const readFile = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => resolve(e.target.result)
    reader.onerror = (e) => reject(new Error('File read failed'))
    reader.readAsText(file)
  })
}

// Helper to set status message
const setStatus = (message, type = 'info') => {
  importStatus.value = message
  statusClass.value = type
}
</script>

<style scoped>
.csv-import-container {
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 20px;
}

.import-form {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.file-input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.import-button {
  background-color: #2196f3;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.import-button:hover:not(:disabled) {
  background-color: #0d8bf2;
}

.import-button:disabled {
  background-color: #b0bec5;
  cursor: not-allowed;
}

.import-status {
  margin-top: 8px;
  padding: 8px;
  border-radius: 4px;
}

.import-status.success {
  background-color: #e8f5e9;
  color: #2e7d32;
}

.import-status.error {
  background-color: #ffebee;
  color: #c62828;
}

.import-status.info {
  background-color: #e3f2fd;
  color: #1565c0;
}
</style>
