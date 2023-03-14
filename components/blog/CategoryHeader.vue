<script setup lang="ts">
const props = defineProps({
  category: { type: Object as PropType<Category>, default: () => ({}) }
});
</script>

<template>
  <section class="mx-auto max-w-6xl flex mb-4">
    <article class="w-2/3 bg-white rounded p-4 shadow mt-4 mr-4">
      <h2 class="text-4xl mb-4 font-bold" style="font-family: 'Cormorant Garamond'">{{ category.name }}</h2>
      <p class="leading-7 text-slate-900 mb-2">
        {{ category.featuredPost }}
        <NuxtLink :to="`/blog/${category.slug}`" class="text-indigo-600 underline hover:no-underline">Read More</NuxtLink>
      </p>

    </article>
    <article class="w-1/3">
      <img :src="`/images/category/${category.cover}`" class="w-full h-max object-cover mt-4 rounded shadow" />
    </article>
  </section>
</template>
