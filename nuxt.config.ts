import GoogleFontsModule from '@nuxtjs/google-fonts'
import { Meta } from './.nuxt/components'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image-edge',
    'nuxt-icon',,
    'nuxt-simple-sitemap',
    'nuxt-simple-robots',
  ],
  plugins: ['~/plugins/medium-zoom'],
  image: {
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
    '/blog/**': { swr: 600, },
    '/disclaimer': { static: true },
    '/privacy': { static: true },
    '/contact': { static: true },
  },
  googleFonts: {
    families: {
      'PT Serif': [300,400],
      'Cormorant Garamond': [300,400,500,600,700]
    }
  },
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://use.typekit.net/qbx5zks.css' }],
      script: [{src: "https://cdn.usefathom.com/script.js" , "data-site": "TTXVBGKR", defer: true, body: true}],
      meta: [{
        name: 'keywords',
        content: 'This Is My Momoir, Momoir, Mom Blog, #MomLife, Health & Wellness, Recipes & Meal Planning, Celebrate!, Travel, Mom Bloggers, Mom Blogging'
      }]
    }
  },
  sitemap: {
    siteUrl: 'https://www.thisismymomoir.com'
  }
})
