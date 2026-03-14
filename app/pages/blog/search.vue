<script setup lang="ts">
import { useDateFormat } from '@vueuse/core'

useCanonical()

useServerSeoMeta({
  title: 'This Is My Momoir - Search',
  ogTitle: 'This Is My Momoir - Search',
  description: 'Search blog posts on This Is My Momoir.',
  ogDescription: 'Search blog posts on This Is My Momoir.',
  ogImage: 'https://www.thisismymomoir.com/images/this-is-my-momoir-og.png',
  twitterCard: 'summary_large_image',
})

const query = ref('')
const route = useRoute()

// Seed from query param if present
if (route.query.q) {
  query.value = route.query.q as string
}

const { data: allPosts } = await useAsyncData('search-posts', () =>
  queryCollection('blog')
    .where('category', '<>', '')
    .order('publishedOn', 'DESC')
    .all()
)

const results = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q || !allPosts.value) return []
  return allPosts.value.filter((post) =>
    post.title.toLowerCase().includes(q) ||
    (post.excerpt?.toLowerCase().includes(q))
  )
})

const hasSearched = computed(() => query.value.trim().length > 0)
</script>

<template>
  <main class="bg-white min-h-screen">
    <section class="bg-primary p-4 lg:mx-auto lg:max-w-6xl">
      <AppBreadcrumb :items="[
        { label: 'Home', to: '/' },
        { label: 'Search' },
      ]" />
      <h2 class="text-4xl font-bold leading-tight text-gray-900 font-cormorant">Search</h2>
    </section>

    <section class="mx-auto max-w-6xl px-4 py-8">
      <div class="max-w-xl mx-auto mb-8">
        <div class="relative">
          <Icon name="material-symbols:search" size="20px" class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            v-model="query"
            type="search"
            placeholder="Search blog posts..."
            class="w-full pl-10 pr-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow"
          />
        </div>
      </div>

      <p v-if="hasSearched" class="text-sm text-slate-500 mb-6">
        {{ results.length }} {{ results.length === 1 ? 'result' : 'results' }} for "{{ query }}"
      </p>

      <div v-if="results.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="post in results"
          :key="post.slug"
          class="group rounded-xl shadow-sm bg-white border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <BlogPostCard :post="post" />
        </div>
      </div>

      <div v-else-if="hasSearched" class="text-center py-12">
        <Icon name="material-symbols:search-off" size="48px" class="text-slate-300 mb-4" />
        <p class="text-slate-500">No posts found matching your search.</p>
      </div>

      <div v-else class="text-center py-12">
        <Icon name="material-symbols:search" size="48px" class="text-slate-300 mb-4" />
        <p class="text-slate-500">Start typing to search blog posts.</p>
      </div>
    </section>
  </main>
</template>
