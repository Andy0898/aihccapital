import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import { createServer as createViteServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function createServer(root = process.cwd(), isProd = process.env.NODE_ENV === 'production') {
  const resolve = (p) => path.resolve(__dirname, p)

  const indexProd = isProd ? fs.readFileSync(resolve('dist/client/index.html'), 'utf-8') : ''

  const app = express()

  /**
   * @type {import('vite').ViteDevServer}
   */
  let vite
  if (!isProd) {
    vite = await createViteServer({
      root,
      logLevel: 'info',
      server: {
        middlewareMode: true,
        watch: {
          usePolling: true,
          interval: 100
        }
      },
      appType: 'custom'
    })
    app.use(vite.ssrLoadModule)
  } else {
    app.use(express.static(resolve('dist/client'), { index: false }))
  }

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl

      let template, render
      if (!isProd) {
        template = fs.readFileSync(resolve('index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)
        render = (await vite.ssrLoadModule('/src/entry-server.ts')).render
      } else {
        template = indexProd
        render = (await import('./dist/server/entry-server.js')).render
      }

      const { html: appHtml } = await render(url)

      const html = template
        .replace(`<!--ssr-outlet-->`, appHtml)
        .replace(
          `<title>AIHC Capital - Professional Investment Firm</title>`,
          getPageTitle(url)
        )
        .replace(
          `<meta name="description" content="AIHC Capital is a professional investment firm specializing in strategic investments and portfolio management.">`,
          getPageDescription(url)
        )

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      !isProd && vite.ssrFixStacktrace(e)
      console.log(e.stack)
      res.status(500).end(e.stack)
    }
  })

  return { app, vite }
}

function getPageTitle(url) {
  const titles = {
    '/': 'AIHC Capital - Professional Investment Firm',
    '/about': 'About Us - AIHC Capital',
    '/team': 'Our Team - AIHC Capital',
    '/philosophy': 'Investment Philosophy - AIHC Capital',
    '/cases': 'Success Cases - AIHC Capital',
    '/contact': 'Contact Us - AIHC Capital'
  }
  
  for (const [path, title] of Object.entries(titles)) {
    if (url.startsWith(path)) {
      return `<title>${title}</title>`
    }
  }
  
  return '<title>AIHC Capital - Professional Investment Firm</title>'
}

function getPageDescription(url) {
  const descriptions = {
    '/': 'AIHC Capital is a professional investment firm specializing in strategic investments and portfolio management.',
    '/about': 'Learn about AIHC Capital\'s mission, vision, values, and company history. Discover our commitment to excellence and innovation.',
    '/team': 'Meet the experienced professionals who drive AIHC Capital\'s success through strategic vision and industry expertise.',
    '/philosophy': 'Explore AIHC Capital\'s investment philosophy, criteria, and systematic approach to identifying exceptional opportunities.',
    '/cases': 'Discover our portfolio success stories and the transformational growth we\'ve achieved with our investment partners.',
    '/contact': 'Get in touch with AIHC Capital to explore partnership opportunities and strategic investment discussions.'
  }
  
  for (const [path, description] of Object.entries(descriptions)) {
    if (url.startsWith(path)) {
      return `<meta name="description" content="${description}">`
    }
  }
  
  return '<meta name="description" content="AIHC Capital is a professional investment firm specializing in strategic investments and portfolio management.">'
}

createServer().then(({ app }) =>
  app.listen(3000, () => {
    console.log('Server running at http://localhost:3000')
  })
)