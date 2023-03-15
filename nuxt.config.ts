import GoogleFontsModule from '@nuxtjs/google-fonts'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  routeRules: {
    // Static page generated on-demand, revalidates in background
    '/blog/**': { swr: true },
    '/disclaimer': { static: true },
    '/privacy': { static: true },
    '/contact': { static: true },
  },
  googleFonts: {
    families: {
      'PT Serif': true,
      'Cormorant Garamond': [400, 700]
    }
  },
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://use.typekit.net/qbx5zks.css' }]
    }
  }
})
