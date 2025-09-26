import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      // Exclude SSR dependencies from client bundle
      external: ['express', 'compression', 'sirv']
    }
  },
  ssr: {
    // SSR specific options
    noExternal: ['vue', 'vue-router']
  },
  optimizeDeps: {
    include: ['vue', 'vue-router']
  }
})