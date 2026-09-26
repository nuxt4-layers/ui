export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['./app/assets/css/tokens.css'],
  components: [
    {
      path: './app/components',
      prefix: 'Ui',
      pathPrefix: false,
    },
  ],
})
