<script setup lang="ts">
import { QuoteBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const props = defineProps({
  block: { type: Object as PropType<QuoteBlockObjectResponse>}
});
</script>

<template>
  <blockquote class="text-xl italic font-semibold text-gray-900 p-8 bg-gray-100 rounded-2xl">
    {{ props.block["quote"]["rich_text"][0].text.content}}
  </blockquote>
</template>