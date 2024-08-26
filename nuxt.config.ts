// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image"],
  components: [
    {
      path: '~/components',
    }
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public:{
      backend_url: process.env.BACKEND_URL || 'http://localhost:3000'
    }
  },
  plugins: ["~/plugins/preline.client.ts"],
})