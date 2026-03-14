<script setup lang="ts">
import { useDateFormat } from '@vueuse/core'
import categories from '@data/categories.json'

const slug = useRoute().params.slug as string
const { data: post } = await useAsyncData(`blog-${slug}`, () =>
  queryCollection('blog').where('slug', '=', slug).first()
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: `Post Not Found: ${slug}` })
}

const publishedOnFormatted = useDateFormat(post.value?.publishedOn, 'MM/DD/YYYY', { locales: 'en-US' })
const postCategory = categories.find((c) => c.slug === post.value?.category)

function extractText(node: any): string {
  if (typeof node === 'string') return node
  if (Array.isArray(node)) return node.map(extractText).join(' ')
  if (node?.value) return Array.isArray(node.value) ? node.value.map(extractText).join(' ') : String(node.value)
  return ''
}
const bodyText = extractText(post.value?.body) || ''
const wordCount = bodyText.split(/\s+/).filter(Boolean).length
const readingTime = Math.max(1, Math.round(wordCount / 230))

useCanonical()

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.value.title,
        description: post.value.excerpt,
        image: post.value.cover ? `https://www.thisismymomoir.com${post.value.cover}` : 'https://www.thisismymomoir.com/images/this-is-my-momoir-og.png',
        datePublished: post.value.publishedOn,
        author: {
          '@type': 'Person',
          name: post.value.author,
        },
        publisher: {
          '@type': 'Organization',
          name: 'This Is My Momoir',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.thisismymomoir.com/images/this-is-my-momoir-og.png',
          },
        },
      }),
    },
  ],
})

const ogImageUrl = post.value.cover ? `https://www.thisismymomoir.com${post.value.cover}` : 'https://www.thisismymomoir.com/images/this-is-my-momoir-og.png'

useServerSeoMeta({
  title: post.value.title,
  description: post.value.excerpt,
  ogTitle: post.value.title,
  ogDescription: post.value.excerpt,
  ogImage: ogImageUrl,
  twitterTitle: post.value.title,
  twitterDescription: post.value.excerpt,
  twitterImage: ogImageUrl,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <section class="bg-gradient-to-b from-primary/60 to-white pt-12 pb-8">
    <div class="mx-4 md:mx-auto max-w-3xl">
      <AppBreadcrumb :items="[
        { label: 'Home', to: '/' },
        ...(postCategory ? [{ label: postCategory.name, to: `/blog/category/${postCategory.slug}` }] : []),
        { label: post?.title ?? '' },
      ]" />
      <h1 class="text-4xl font-cormorant font-bold leading-tight text-gray-900 mb-3">{{ post?.title }}</h1>
      <div class="flex flex-col md:flex-row gap-2 md:gap-4 text-slate-600">
        <p class="text-sm flex items-center gap-1">
          <Icon name="material-symbols:edit-square-outline" size="16px" /> {{ post?.author }}
        </p>
        <span class="hidden md:inline text-slate-300">|</span>
        <p class="text-sm flex items-center gap-1">
          <Icon name="ic:baseline-calendar-month" size="16px" /> {{ publishedOnFormatted }}
        </p>
        <span class="hidden md:inline text-slate-300">|</span>
        <p class="text-sm flex items-center gap-1">
          <Icon name="material-symbols:timer-outline" size="16px" /> {{ readingTime }} min read
        </p>
      </div>
    </div>
  </section>
  <main class="bg-white">
    <section class="mx-4 md:mx-auto max-w-3xl selection:bg-primary pb-16">
      <ContentRenderer v-if="post" :value="post" />
    </section>
  </main>
  <BlogRelatedPosts v-if="post?.category" :category="post.category" :current-slug="slug" />
  <BlogNewsletterSignup variant="modal" />
</template>
