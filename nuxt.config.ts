// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiUrl: 'https://pokeapi.co/api/v2/pokemon',
    },
  },
  compatibilityDate: '2024-04-03',
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          charset: false,
        },
      },
    },
  },
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  plugins: [
    './plugins/vuetify',
  ],
  sourcemap: {
    server: true,
    client: true,
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: 'single',
        semi: false,
      },
    },
  },
})
