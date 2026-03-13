<script setup lang="ts">
defineProps<{ href?: string }>()
</script>

<template>
  <a :href="href" class="text-blue-500 hover:text-blue-700">
    <slot />
  </a>
</template>
