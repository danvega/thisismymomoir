<script setup lang="ts">
import {Heading1BlockObjectResponse} from "@notionhq/client/build/src/api-endpoints";

const props = defineProps({
  block: { type: Object as PropType<Heading1BlockObjectResponse> }
});
</script>


<template>
  <h1 :id="block.id" class="text-4xl font-bold leading-tight text-gray-900 mb-2">
    {{ block?.heading_1?.rich_text[0].plain_text }}
  </h1>
</template>

