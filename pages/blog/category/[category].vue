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
      <div class="mx-4 lg:mx-auto max-w-6xl py-8">
        <h3 class="text-3xl font-bold mb-8">Latest Posts in {{ category.name }}</h3>
        <article class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
          <div v-for="post in posts" :key="post.id" class="rounded-md shadow-md bg-slate-50">
            <BlogPostCard :post="post" />
          </div>
        </article>
      </div>
    </section>


  </main>
</template>
