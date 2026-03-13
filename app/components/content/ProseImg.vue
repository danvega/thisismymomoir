<script setup lang="ts">
defineProps<{ src?: string; alt?: string }>()
</script>

<template>
  <img :src="src" :alt="alt" class="w-full my-4 zoom" />
</template>
