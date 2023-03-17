import GoogleFontsModule from '@nuxtjs/google-fonts'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image-edge'
  ],
  image: {
    provider: 'netlify',
    domains: ['amazonaws.com'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280
    },
  },
  routeRules: {
    // Static page generated on-demand, revalidates in background
    '/blog/**': { swr: true },
    '/disclaimer': { static: true },
    '/privacy': { static: true }
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
  },

})
