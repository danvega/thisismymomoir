<script setup lang="ts">
const props = defineProps({
  title: { type: String, default: '' },
  link: { type: String, default: '' },
  img: { type: String, default: '' }
});
</script>

<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
    <h3 class="bg-primary py-3 px-4 text-center font-semibold">{{ title }}</h3>
    <NuxtLink :to="`/blog/${link}`">
      <img :src="`/images/category/${img}`" :alt="title + ' category'" loading="lazy" class="w-full h-full object-cover" />
    </NuxtLink>
  </div>
</template>
