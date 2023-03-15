<script setup lang="ts">
import categories from '@/data/categories.json';

const categorySlug = useRoute().params.category;
const category: Category = categories.find((c) => c.slug === categorySlug);

const { data: posts } = await useFetch<Post[]>("/api/notion/posts/" + encodeURI(category.notionCategory));
</script>

<template>
  <main class="bg-primary">

    <BlogCategoryHeader :category="category" />

    <section class=" bg-white">
      <div class="mx-auto max-w-6xl py-8">
        <h3 class="text-3xl font-bold mb-8">Latest Posts in {{ category.name }}</h3>
        <article class="grid grid-cols-3 gap-10">
          <div v-for="post in posts" :key="post.id" class="rounded-md shadow-md bg-slate-50">
            <NuxtLink :to="`/blog/${post.slug}`">
              <!-- <img :src="`/images/blog/thumbnails/${post.cover}`" class="w-full h-48 object-cover rounded-md" /> -->
              <img :src="post.cover" class="w-full h-48 object-cover rounded-md" />
            </NuxtLink>
            <div class="p-6">
              <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
              <p class="text-gray-700 mb-4">We need to figure out a good way to grab an excerpt for each blog post to give
                the reader a teaser as to what this blog post is all about.</p>
              <NuxtLink :to="`/blog/${post.slug}`"
                class="inline-block bg-primary hover:opacity-90 text-slate-900 py-2 px-4 rounded float-right mb-8">Read
                More
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>
    </section>


  </main>
</template>
