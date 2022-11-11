// vite.config.js
import { resolve } from 'path'
import { defineConfig } from "vite";


export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                course: resolve(__dirname, 'course.html'),
                recommended: resolve(__dirname, 'recommended.html')
            }
        }
    }
})
