<script setup lang="ts">
import Heading1 from './Heading1.vue';
import Heading2 from './Heading2.vue';
import Heading3 from './Heading3.vue';
import Image from './Image.vue';
import Paragraph from './Paragraph.vue';
import BulletedList from './BulletedList.vue';
import ColumnList from './ColumnList.vue';
import Video from './Video.vue'
import BlockQuote from "~/components/notion/BlockQuote.vue";
import {BlockObjectResponse, PartialBlockObjectResponse} from "@notionhq/client/build/src/api-endpoints";

const props = defineProps({
  block: { type: Object as PropType<BlockObjectResponse | PartialBlockObjectResponse> },
  slug: { type: String, default: '' }
});

const currentBlock: Record<string, Component> = {
  "heading_1": Heading1,
  "heading_2": Heading2,
  "heading_3": Heading3,
  "paragraph": Paragraph,
  "image": Image,
  "bulleted_list_item": BulletedList, // not working
  "column_list": ColumnList, // not working
  "video": Video,
  "quote": BlockQuote
}
</script>

<template>
  <component :is="currentBlock[props.block.type]" v-if="props.block" :block="props.block"/>
</template>
