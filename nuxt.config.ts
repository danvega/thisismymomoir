// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-icon',
    'nuxt-simple-sitemap',
    'nuxt-simple-robots',
  ],
  plugins: ['~/plugins/medium-zoom'],
  routeRules: {
    '/' : { isr: 3600, }, // 3600 = 60 minutes
    '/blog/**': { isr: 3600, },
    '/disclaimer': { prerender: true },
    '/privacy': { prerender: true },
    '/contact': { prerender: true },
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
      script: [{src: "https://cdn.usefathom.com/script.js" , "data-site": "TTXVBGKR", defer: true, tagPosition: 'bodyClose'}],
      meta: [{
        name: 'keywords',
        content: 'This Is My Momoir, Momoir, Mom Blog, #MomLife, Health & Wellness, Recipes & Meal Planning, Celebrate!, Travel, Mom Bloggers, Mom Blogging'
      }]
    }
  },
  sitemap: {
    siteUrl: 'https://www.thisismymomoir.com'
  },
  // production build issue: https://answers.netlify.com/t/javascript-heap-out-of-memory-when-trying-to-build-a-nuxt-app/93138/13
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
          process.env.NODE_ENV === 'production'
              ? { preset: ['default', { discardComments: { removeAll: true } }] }
              : false, // disable cssnano when not in production
    },
  },
  devtools: { enabled: true }
})
