<script setup lang="ts">
const props = defineProps({
  category: { type: Object as PropType<Category>, default: () => ({}) }
});
</script>

<template>
  <section class="mx-auto max-w-6xl flex flex-col lg:flex-row mb-4">
    <article class="lg:w-3/5 bg-white rounded p-4 shadow mt-4 mx-4 lg:mx-0">
      <h2 class="text-4xl mb-4 font-cormorant font-bold">{{ category.name }}</h2>
      <p class="leading-7 text-slate-900 mb-2">
        {{ category.featuredPost }}
        <NuxtLink :to="`/blog/${category.slug}`" class="text-indigo-600 underline hover:no-underline">Read More</NuxtLink>
      </p>

    </article>
    <article class="lg:w-2/5 mx-4">
      <img :src="`/images/category/${category.cover.replace('.jpeg', '-386.jpg')}`"
        class="w-full h-max object-cover mt-4 rounded shadow" />
    </article>
  </section>
</template>
