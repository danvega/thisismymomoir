<script setup lang="ts">
import { useDateFormat } from '@vueuse/core'

const props = defineProps({
  post: { type: Object as PropType<Post>, default: () => ({}) }
});

const publishedOnFormatted = useDateFormat(props.post.publishedOn, 'MM/DD/YYYY', { locales: 'en-US' });
</script>

<template>
  <NuxtLink :to="`/blog/${post.slug}`" class="block">
    <img :src="post.cover" :alt="post.title" loading="lazy" style="aspect-ratio: 16/9" class="w-full object-cover" />
    <div class="p-6">
      <h2 class="text-xl font-bold mb-2 font-cormorant group-hover:text-primary-200 transition-colors">{{ post.title }}</h2>

      <div class="flex items-center justify-between">
        <p class="text-xs text-slate-500">
          <Icon name="ic:baseline-calendar-month" size="16px" /> {{ publishedOnFormatted }}
        </p>
        <span class="text-sm text-slate-500 group-hover:text-primary-200 transition-all group-hover:translate-x-1 inline-flex items-center gap-1">
          Read more <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </div>
  </NuxtLink>
</template>
