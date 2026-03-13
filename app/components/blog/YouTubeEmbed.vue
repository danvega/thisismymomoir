<template>
  <div :class="clazz">
    <iframe :src="embedURL" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  videoSrc: { type: String }
});

const clazz = ref('');
const embedURL = ref('');

if (props.videoSrc?.includes('shorts')) {
  clazz.value = 'aspect-w-9 aspect-h-16';
  embedURL.value = props.videoSrc.replace('shorts', 'embed');
} else {
  clazz.value = 'aspect-w-16 aspect-h-9';
  if (props.videoSrc != null) {
    embedURL.value = props.videoSrc.replace('watch?v=', 'embed/');
  }
}
</script>
