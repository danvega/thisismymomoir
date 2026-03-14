<script setup lang="ts">
import categories from '@data/categories.json';

const categorySlug = useRoute().params.category as string;
const category: Category = categories.find((c) => c.slug === categorySlug)!;

if (category == null) {
  throw new Error(`Category ${categorySlug} not found`);
}

const { data: posts } = await useAsyncData(`category-${categorySlug}`, () =>
  queryCollection('blog')
    .where('category', '=', categorySlug)
    .order('publishedOn', 'DESC')
    .all()
);

useCanonical()

useServerSeoMeta({
  title: `This Is My Momoir - ${category.name}`,
  ogTitle: `This Is My Momoir - ${category.name}`,
  description: 'This Is My Momoir, a memoir (in blog form) of everything I have learned on this beautiful, exhausting, magical journey known as motherhood.',
  ogDescription: 'This Is My Momoir, a memoir (in blog form) of everything I have learned on this beautiful, exhausting, magical journey known as motherhood.',
  ogImage: `https://www.thisismymomoir.com/images/category/${category.cover}`,
  twitterTitle: `This Is My Momoir - ${category.name}`,
  twitterDescription: "This Is My Momoir, a memoir (in blog form) of everything I have learned on this beautiful, exhausting, magical journey known as motherhood.",
  twitterImage: `https://www.thisismymomoir.com/images/category/${category.cover}`,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <main class="bg-primary">

    <div class="mx-4 lg:mx-auto max-w-6xl pt-4">
      <AppBreadcrumb :items="[
        { label: 'Home', to: '/' },
        { label: category.name },
      ]" />
    </div>

    <BlogCategoryHeader :category="category" />

    <section class=" bg-white">
      <div class="mx-4 lg:mx-auto max-w-6xl py-8">
        <h3 class="text-3xl mb-8 font-cormorant font-bold">Latest Posts in {{ category.name }}</h3>
        <article class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
          <div v-for="post in posts" :key="post.slug" class="rounded-md shadow-md bg-slate-50">
            <BlogPostCard :post="post" />
          </div>
        </article>
      </div>
    </section>

  </main>
</template>
