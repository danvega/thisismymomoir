<script setup lang="ts">
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
        name: 'This Is My Momoir',
        url: 'https://www.thisismymomoir.com',
        description: 'A memoir (in blog form) of everything I have learned on this beautiful, exhausting, magical journey known as motherhood.',
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'This Is My Momoir',
        url: 'https://www.thisismymomoir.com',
        logo: 'https://www.thisismymomoir.com/images/this-is-my-momoir-og.png',
        sameAs: [
          'https://www.instagram.com/thisismymomoir',
          'https://www.facebook.com/thisismymomoir',
          'https://pinterest.com/thisismymomoir',
          'https://x.com/thisismymomoir',
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
