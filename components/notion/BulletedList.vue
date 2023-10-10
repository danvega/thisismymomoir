<script setup lang="ts" xmlns:id="http://www.w3.org/1999/xhtml">
import {
  BulletedListItemBlockObjectResponse,
  TextRichTextItemResponse
} from "@notionhq/client/build/src/api-endpoints";

const props = defineProps({
  block: { type: Object as PropType<BulletedListItemBlockObjectResponse> }
});

// There currently is no way to wrap each bullet list group with <ul>
const listItem = ref('');
props.block.bulleted_list_item.rich_text.forEach((item : TextRichTextItemResponse) => {

  if(item.text.link != null) {
    listItem.value += `<a href="${item.text.link.url}" class="text-blue-500 hover:text-blue-700">${item.text.content}</a>`;
  } else {
    if(item.annotations.bold) {
      listItem.value += `<strong>${item.plain_text}</strong>`;
    } else {
      listItem.value += item.plain_text;
    }
  }
})
</script>

<template>
  <li :id="props.block.id" v-html="listItem" class="pl-4"></li>
</template>

