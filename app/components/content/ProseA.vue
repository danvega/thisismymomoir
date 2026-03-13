<script setup lang="ts">
defineProps<{ href?: string }>()
</script>

<template>
  <a :href="href" class="text-primary-200 hover:text-primary-200/70 underline underline-offset-2">
    <slot />
  </a>
</template>
