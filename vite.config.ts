import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
        '/api': {
            changeOrigin: true,
            target: 'http://172.17.3.91:4001/',
        }
    }
  },
  esbuild: {
    drop: ['debugger']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
        entryFileNames: 'js/main-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames(assetInfo) {
          if (assetInfo.name?.endsWith('.css')) {
            return 'css/[name]-[hash].css'
          }
          const imgsExt = ['.png', '.jpeg', '.jpg', '.webp', '.svg', '.gif', '.ico']
          if (imgsExt.some(ext => assetInfo.name?.endsWith(ext))) {
            return 'images/[name]-[hash].[ext]'
          }
          return 'assets/[name]-[hash].[ext]'
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  }
})
