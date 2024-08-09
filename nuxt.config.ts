// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  components: [
    {
      path: '~/components',
    }
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
