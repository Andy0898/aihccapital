import { renderToString } from 'vue/server-renderer'
import { createApp } from './main'

export async function render(url: string) {
  const { app, router } = createApp()

  // Set the router to the incoming URL
  router.push(url)
  await router.isReady()

  // Render the app to HTML string
  const html = await renderToString(app)

  return { html }
}