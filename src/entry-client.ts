import { createApp } from './main'

const { app, router } = createApp()

// Wait for router to be ready before mounting
router.isReady().then(() => {
  app.mount('#app')
})