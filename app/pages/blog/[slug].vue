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
  <section class="bg-gradient-to-b from-primary/60 to-white pt-12 pb-8">
    <div class="mx-4 md:mx-auto max-w-3xl">
      <NuxtLink to="/" class="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900 transition-colors mb-4">
        <span aria-hidden="true">&larr;</span> Back to home
      </NuxtLink>
      <h1 class="text-4xl font-cormorant font-bold leading-tight text-gray-900 mb-3">{{ post?.title }}</h1>
      <div class="flex flex-col md:flex-row gap-2 md:gap-4 text-slate-600">
        <p class="text-sm flex items-center gap-1">
          <Icon name="material-symbols:edit-square-outline" size="16px" /> {{ post?.author }}
        </p>
        <span class="hidden md:inline text-slate-300">|</span>
        <p class="text-sm flex items-center gap-1">
          <Icon name="ic:baseline-calendar-month" size="16px" /> {{ publishedOnFormatted }}
        </p>
      </div>
    </div>
  </section>
  <main class="bg-white">
    <section class="mx-4 md:mx-auto max-w-3xl selection:bg-primary pb-16">
      <ContentRenderer v-if="post" :value="post" />
    </section>
  </main>
</template>
