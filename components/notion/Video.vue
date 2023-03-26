<template>
  <YouTubeEmbed v-if="isExternal && isYouTube" :videoSrc="videoSrc" />
  <p v-else class="text-sm text-red-100">Videos containing a file URL are not supported at this time.</p>
</template>

<script setup lang="ts">
import YouTubeEmbed from '../blog/YouTubeEmbed.vue';

const props = defineProps({
  block: { type: Object as PropType<Block>, default: () => ({}) }
});

const isExternal = ref(false);
const isYouTube = ref(false);
const videoSrc = ref('');

// at this time we only support external youtube videos
if (props.block?.video?.external != null) {
  videoSrc.value = props.block.video.external.url;
  isExternal.value = true;
  isYouTube.value = videoSrc.value.includes('youtube');
}
</script>
