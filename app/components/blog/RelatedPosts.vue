<script setup lang="ts">
const props = defineProps<{
  category: string
  currentSlug: string
}>()

const { data: related } = await useAsyncData(`related-${props.currentSlug}`, () =>
  queryCollection('blog')
    .where('category', '=', props.category)
    .where('slug', '<>', props.currentSlug)
    .order('publishedOn', 'DESC')
    .limit(3)
    .all()
)
</script>

<template>
  <section v-if="related?.length" class="mx-4 md:mx-auto max-w-3xl py-12 border-t border-gray-200">
    <h3 class="text-3xl font-cormorant font-bold mb-6">You might also enjoy</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="post in related"
        :key="post.slug"
        class="group rounded-xl shadow-sm bg-white border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      >
        <BlogPostCard :post="post" />
      </div>
    </div>
  </section>
</template>
