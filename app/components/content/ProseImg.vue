<script setup lang="ts">
defineProps<{ src?: string; alt?: string }>()
</script>

<template>
  <figure class="my-8">
    <img :src="src" :alt="alt" class="w-full rounded-xl shadow-md" />
    <figcaption v-if="alt" class="mt-2 text-center text-sm text-slate-500 italic font-ptserif">
      {{ alt }}
    </figcaption>
  </figure>
</template>
