<script setup lang="ts">
import YouTubeEmbed from '../blog/YouTubeEmbed.vue';
import {VideoBlockObjectResponse} from "@notionhq/client/build/src/api-endpoints";

const props = defineProps({
  block: { type: Object as PropType<VideoBlockObjectResponse>, required: true }
});

const isExternal = ref(false);
const isYouTube = ref(false);
const videoSrc = ref('');

if(props.block.video.type == "external") {
  videoSrc.value = props.block.video.external.url;
  isExternal.value = true;
  isYouTube.value = videoSrc.value.includes('youtube');
} else {
  throw createError({
    statusCode: 400,
    statusMessage: "We currently only support external YouTube embeds"
  })
}
</script>

<template>
  <YouTubeEmbed v-if="isExternal && isYouTube" :videoSrc="videoSrc" />
  <p v-else class="text-sm text-red-100">Videos containing a file URL are not supported at this time.</p>
</template>


