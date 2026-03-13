<script setup lang="ts">
import {Heading3BlockObjectResponse} from "@notionhq/client/build/src/api-endpoints";

const props = defineProps({
  block: { type: Object as PropType<Heading3BlockObjectResponse> }
});
</script>

<template>
  <h3 :id="block.id" class="text-2xl font-bold leading-tight text-gray-900 mb-2">
    {{ block?.heading_3?.rich_text[0].plain_text }}
  </h3>
</template>


