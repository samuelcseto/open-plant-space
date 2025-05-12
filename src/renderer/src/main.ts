import './assets/main.css'

import { createMemoryHistory, createRouter } from 'vue-router'
import { createPinia } from 'pinia'
import routes from './routes'

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

import { createApp } from 'vue'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
