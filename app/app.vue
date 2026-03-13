<script setup lang="ts">
useHead({
  script: [
    {
      src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
      async: true,
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
