<script setup lang="ts">
import {Heading2BlockObjectResponse} from "@notionhq/client/build/src/api-endpoints";

const props = defineProps({
  block: { type: Object as PropType<Heading2BlockObjectResponse> }
});
</script>

<template>
  <h2 :id="block.id" class="text-3xl font-bold leading-tight text-gray-900 mb-2">
    {{ block?.heading_2?.rich_text[0].plain_text }}
  </h2>
</template>

