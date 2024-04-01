// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      title: 'Nuxt3 - audio-soundboard',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'audio-soundboard' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
    },
    baseURL: (process.env.NODE_ENV == "production") ? '/audio-soundboard/' : '/',
  },
  modules: ["@nuxtjs/tailwindcss"],
});