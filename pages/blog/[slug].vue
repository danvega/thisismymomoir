<script setup lang="ts">
import { useDateFormat } from '@vueuse/core'
import BlockRenderer from '~~/components/notion/BlockRenderer.vue';

const slug = useRoute().params.slug;
const post: Post = await $fetch(`/api/notion/page/${slug}`);
const publishedOnFormatted = useDateFormat(post?.publishedOn, 'MM/DD/YYYY', { locales: 'en-US' });

useServerSeoMeta({
  title: post.title,
  description: post.excerpt,
  ogTitle: post.title,
  ogDescription: post.excerpt,
  ogImage: post.cover,
  twitterTitle: post.title,
  twitterDescription: post.excerpt,
  twitterImage: post.cover,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <section class="bg-primary p-8 mb-4">
    <div class="mx-4 md:mx-auto max-w-3xl">
      <h1 class="text-4xl font-cormorant font-bold leading-tight text-gray-900">{{ post?.title }}</h1>
      <div class="flex flex-col md:flex-row gap-4">
        <p class="text-sm lg:text-base">
          <Icon name="material-symbols:edit-square-outline" size="18px" /> Written By: {{ post?.author }}
        </p>
        <p class="text-sm lg:text-base">
          <Icon name="ic:baseline-calendar-month" size="18px" class="" /> Published On: {{ publishedOnFormatted }}
        </p>
      </div>
    </div>
  </section>
  <main class="bg-white">
    <section class="mx-4 md:mx-auto max-w-3xl selection:bg-primary">
      <BlockRenderer v-for="block in post?.content" :key="block.id" :block="block" />
    </section>
  </main>
</template>
