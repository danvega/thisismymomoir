<script setup lang="ts">
import {BulletedListItemBlockObjectResponse} from "@notionhq/client/build/src/api-endpoints";

const props = defineProps({
  block: { type: Object as PropType<BulletedListItemBlockObjectResponse> }
});

// const listItem = ref('');
// const text = props.block?.bulleted_list_item?.rich_text[0];
//
// if (text?.text?.link != null) {
//   listItem.value += `<a href="${text?.text?.link?.url}" class="text-blue-500 hover:text-blue-700">${text.text.content}</a>`;
// } else {
//   if (text?.annotations?.bold) {
//     listItem.value += `<strong>${text.plain_text}</strong>`;
//   } else {
//     listItem.value += text?.plain_text;
//   }
// }

</script>


<template>
<!--  <li id:="block.id" v-html="listItem" class="pl-4"></li>-->
</template>

