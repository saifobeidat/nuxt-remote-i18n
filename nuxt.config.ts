// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    baseUrl: 'https://abwaab.com',
    locales: [
      {
        code: 'en',
        country: '',
        iso: 'en',
        lang: 'en',
        file: 'en.js',
        dir: 'ltr',
      },
      {
        code: 'ar',
        country: '',
        iso: 'ar',
        lang: 'ar',
        file: 'ar.js',
        dir: 'rtl',
      },
    ],

    strategy: 'prefix_and_default',
    detectBrowserLanguage: false,
    defaultLocale: 'ar',
    lazy: true,
    langDir: 'i18n/',
    compilation: {
      strictMessage: false,
    },
  },
});
