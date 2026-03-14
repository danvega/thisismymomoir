<script setup lang="ts">
const props = defineProps<{ src: string }>()

const clazz = ref('')
const embedURL = ref('')

if (props.src?.includes('shorts')) {
  clazz.value = 'aspect-w-9 aspect-h-16'
  embedURL.value = props.src.replace('shorts', 'embed')
} else {
  clazz.value = 'aspect-w-16 aspect-h-9'
  embedURL.value = props.src?.replace('watch?v=', 'embed/') || ''
}
</script>

<template>
  <div :class="clazz">
    <iframe :src="embedURL" title="YouTube video" loading="lazy" style="border: 0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
  </div>
</template>
