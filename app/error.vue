<template>
  <SiteHeader />
  <section class="mx-4 lg:mx-auto lg:max-w-6xl">
    <h1 class="text-4xl font-cormorant font-bold mb-4">Something Went Wrong!</h1>
    <p class="text-slate-900">You are either looking for a page that doesn't exist or something went terribly wrong. We
      have notified
      our engineers and are looking into the problem.</p>
    <img src="/images/undraw_fixing_bugs_w7gi.png" class="" />
  </section>
  <SiteFooter />
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object
})
</script>
