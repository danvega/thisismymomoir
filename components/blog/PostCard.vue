<script setup lang="ts">
import { useDateFormat } from '@vueuse/core'

const props = defineProps({
  post: { type: Object as PropType<Post>, default: () => ({}) }
});

const publishedOnFormatted = useDateFormat(props.post.publishedOn, 'MM/DD/YYYY', { locales: 'en-US' });
</script>

<template>
  <NuxtLink :to="`/blog/${post.slug}`">
    <!-- <NuxtImg :src="post.cover" class="w-full h-48 object-cover rounded-md" sizes="sm:100vw md:50vw lg:400px" /> -->
    <img :src="post.cover" class="w-full h-48 object-cover rounded-md" />
  </NuxtLink>
  <div class="p-6">
    <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>

    <div class="flex items-center	">
      <p class="text-xs flex-1	">
        <Icon name="ic:baseline-calendar-month" size="16px" class="" /> Published on {{ publishedOnFormatted }}
      </p>
      <NuxtLink :to="`/blog/${post.slug}`"
        class="inline-flex items-center p-2 text-sm font-medium text-center text-slate-900 bg-primary rounded-md hover:opacity-90 ">
        Read more
      </NuxtLink>
    </div>


  </div>
</template>
