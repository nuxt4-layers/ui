export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/tokens.css'],
  components: [
    {
      path: './app/components',
      prefix: 'Ui',
      pathPrefix: false,
    },
  ],
})
