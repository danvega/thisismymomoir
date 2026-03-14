<script setup lang="ts">
const { siteUrl, siteName, siteDescription, social } = useRuntimeConfig().public

useHead({
  script: [
    {
      src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
      async: true,
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteName,
        url: siteUrl,
        description: siteDescription,
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteName,
        url: siteUrl,
        logo: `${siteUrl}/images/this-is-my-momoir-og.png`,
        sameAs: [
          social.instagram,
          social.facebook,
          social.pinterest,
          social.twitter,
        ],
      }),
    },
  ],
})

onMounted(() => {
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on('init', (user: any) => {
      if (!user) {
        window.netlifyIdentity.on('login', () => {
          document.location.href = '/admin/'
        })
      }
    })
  }
})
</script>

<template>
  <SiteHeader/>
  <NuxtPage />
  <SiteFooter />
</template>
