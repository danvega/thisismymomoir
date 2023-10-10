<script setup lang="ts">
import {
  BulletedListItemBlockObjectResponse, RichTextItemResponse,
  TextRichTextItemResponse
} from "@notionhq/client/build/src/api-endpoints";

const props = defineProps({
  block: { type: Object as PropType<BulletedListItemBlockObjectResponse>, default: () => {} }
});

// There currently is no way to wrap each bullet list group with <ul>
const listItem = ref('');
props.block.bulleted_list_item.rich_text.forEach((item : RichTextItemResponse) => {
  const li :TextRichTextItemResponse = <TextRichTextItemResponse>item;
  if(li.text.link != null) {
    listItem.value += `<a href="${li.text.link.url}" class="text-blue-500 hover:text-blue-700">${li.text.content}</a>`;
  } else {
    if(li.annotations.bold) {
      listItem.value += `<strong>${li.plain_text}</strong>`;
    } else {
      listItem.value += li.plain_text;
    }
  }
});
</script>

<template>
  <li :id="props.block.id" v-html="listItem" class="pl-4"></li>
</template>

