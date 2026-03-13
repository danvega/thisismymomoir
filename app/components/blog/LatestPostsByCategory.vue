<script setup lang="ts">
import categories from '@data/categories.json';

const props = defineProps({
  categorySlug: { type: String, default: '' },
  pageSize: { type: Number, default: 3 }
});

const category: Category = categories.find((c) => c.slug === props.categorySlug)!;
const { data: posts } = await useAsyncData(`latest-${props.categorySlug}`, () =>
  queryCollection('blog')
    .where('category', '=', props.categorySlug)
    .order('publishedOn', 'DESC')
    .limit(props.pageSize)
    .all()
);
</script>

<template>
  <section class=" bg-white">
    <div class="mx-auto max-w-6xl py-8">
      <h3 class="text-3xl font-bold mb-8 font-cormorant font-bold">Latest Posts in {{ category.name }}</h3>
      <article class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div v-for="post in posts" :key="post.slug" class="group rounded-xl shadow-sm bg-white border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <BlogPostCard :post="post" />
        </div>
      </article>
    </div>
  </section>
</template>
