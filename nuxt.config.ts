import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  
  css: [
    join(currentDir, './app/assets/css/tokens.css'),
  ],
  
  components: [
    {
      path: './app/components',
      prefix: 'Ui',
      pathPrefix: false,
    },
  ],
})