<script setup lang="ts">
interface BreadcrumbItem {
  label: string
  to?: string
}

const props = defineProps<{
  items: BreadcrumbItem[]
}>()

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: props.items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.label,
          ...(item.to ? { item: `https://www.thisismymomoir.com${item.to}` } : {}),
        })),
      }),
    },
  ],
})
</script>

<template>
  <nav aria-label="Breadcrumb" class="text-sm text-slate-600 mb-4">
    <ol class="flex items-center gap-1 flex-wrap">
      <li v-for="(item, index) in items" :key="index" class="flex items-center gap-1">
        <span v-if="index > 0" aria-hidden="true" class="text-slate-400">/</span>
        <NuxtLink v-if="item.to" :to="item.to" class="hover:text-slate-900 transition-colors">
          {{ item.label }}
        </NuxtLink>
        <span v-else aria-current="page" class="text-slate-900 font-medium">{{ item.label }}</span>
      </li>
    </ol>
  </nav>
</template>
