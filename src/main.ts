import { createApp as createVueApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/main.css'

export function createApp() {
  const app = createVueApp(App)
  app.use(router)
  
  return { app, router }
}

// Client-side mounting (only in browser)
if (typeof window !== 'undefined') {
  const { app, router } = createApp()
  router.isReady().then(() => {
    app.mount('#app')
  })
}