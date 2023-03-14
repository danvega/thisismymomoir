<script setup lang="ts">
import { stringLiteral } from '@babel/types';

const props = defineProps({
  title: { type: String, default: '' },
  link: { type: String, default: '' },
  img: { type: String, default: '' }
});
</script>

<template>
  <div class="bg-slate-50 rounded shadow-md overflow-hidden hover:opacity-75">
    <h3 class="bg-primary p-2 text-center font-semibold">{{ title }}</h3>
    <NuxtLink :to="`/blog/${link}`">
      <img :src="`/images/category/${img}`" class="h-full object-cover" />
    </NuxtLink>
  </div>
</template>
