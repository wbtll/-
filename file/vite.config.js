import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
    rollupOptions:{
      input:{
        index:path.resolve(__dirname,'index.html'),
        about:path.resolve(__dirname,'about.html')
      },output:{
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/name-[hash].[ext]"

      }
    }
  }
})
