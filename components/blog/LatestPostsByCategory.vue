<script setup lang="ts">
import categories from '@/data/categories.json';

const props = defineProps({
  categorySlug: { type: String, default: '' },
  pageSize: { type: Number, default: 3 }
});

const category: Category = categories.find((c) => c.slug === props.categorySlug);
const { data: posts } = await useFetch<Post[]>(`/api/notion/posts/${encodeURI(category.notionCategory)}?page_size=${props.pageSize}`);

// console.log(posts);
</script>

<template>
  <section class=" bg-white">
    <div class="mx-auto max-w-6xl py-8">
      <h3 class="text-3xl font-bold mb-8 font-cormorant font-bold">Latest Posts in {{ category.name }}</h3>
      <article class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div v-for="post in posts" :key="post.id" class="rounded-md shadow-md bg-slate-50">
          <BlogPostCard :post="post" />
        </div>
      </article>
    </div>
  </section>
</template>
