import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/style.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// Ocultar loading spinner cuando la app esté lista
app.mount('#app')

// Ocultar loading después de un breve delay
setTimeout(() => {
  const loading = document.querySelector('.loading')
  if (loading) {
    loading.style.opacity = '0'
    setTimeout(() => {
      loading.style.display = 'none'
    }, 300)
  }
}, 1000)
