<script setup lang="ts">
import { useDateFormat } from '@vueuse/core'
import BlockRenderer from '~~/components/notion/BlockRenderer.vue';

const slug = useRoute().params.slug;
const { data: post } = await useFetch<Post>(`/api/notion/page/${slug}`);
const publishedOnFormatted = useDateFormat(post?.publishedOn, 'MM/DD/YYYY', { locales: 'en-US' });
</script>

<template>
  <main class="mx-4 md:mx-auto max-w-6xl flex mb-4">
    <section class="">
      <h1 class="text-4xl font-bold leading-tight text-gray-900">{{ post?.title }}</h1>
      <p class="mb-4 align-middle text-sm lg:text-base">
        <Icon name="material-symbols:edit-square-outline" size="18px" /> Written By: {{ post?.author }}
        <Icon name="ic:baseline-calendar-month" size="18px" class="ml-4" /> Published On: {{ publishedOnFormatted }}
      </p>
      <BlockRenderer v-for="block in post?.content" :key="block.id" :block="block" />
    </section>
  </main>
</template>
