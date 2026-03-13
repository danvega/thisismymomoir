<script setup lang="ts">
import { useDateFormat } from '@vueuse/core'

const slug = useRoute().params.slug as string
const { data: post } = await useAsyncData(`blog-${slug}`, () =>
  queryCollection('blog').where('slug', '=', slug).first()
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: `Post Not Found: ${slug}` })
}

const publishedOnFormatted = useDateFormat(post.value?.publishedOn, 'MM/DD/YYYY', { locales: 'en-US' })

useServerSeoMeta({
  title: post.value.title,
  description: post.value.excerpt,
  ogTitle: post.value.title,
  ogDescription: post.value.excerpt,
  ogImage: post.value.cover,
  twitterTitle: post.value.title,
  twitterDescription: post.value.excerpt,
  twitterImage: post.value.cover,
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
      <ContentRenderer v-if="post" :value="post" />
    </section>
  </main>
</template>
