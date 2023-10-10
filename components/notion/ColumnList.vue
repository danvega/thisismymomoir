<script setup lang="ts">
import Image from './Image.vue';
import {
  BlockObjectResponse,
  ColumnBlockObjectResponse,
  ColumnListBlockObjectResponse
} from "@notionhq/client/build/src/api-endpoints";
import Paragraph from "~/components/notion/Paragraph.vue";
import Video from "~/components/notion/Video.vue";

const props = defineProps({
  block: { type: Object as PropType<ColumnListBlockObjectResponse>, default: () => {} }
});

// This currently only works to display 2 column content of images, update as needed.
const { data: columns } = await useFetch<ColumnBlockObjectResponse[]>(`/api/notion/blocks/${props.block.id}`);
const blocks: Ref<BlockObjectResponse[]> = ref([]);

if(columns.value) {
  columns.value.forEach( async (column) => {
    const content = await getColumnDetails(column.id);
    if(content.length == 1) {
      blocks.value.push(content[0]);
    }
  });
}

async function getColumnDetails(id: string): Promise<BlockObjectResponse[]> {
  return await $fetch(`/api/notion/blocks/${id}`);
}

// what I'm currently supporting in columns
const currentBlock: Record<string, Component> = {
  "paragraph": Paragraph,
  "image": Image,
  "video": Video
}
</script>

<template>
  <section class="grid grid-cols-2 gap-4">
    <div v-for="block in blocks" :key="block.id">
<!--      <Image v-if="block.type === 'image'" :block="block" />-->
      <component :is="currentBlock[block.type]" v-if="block" :block="block"/>
    </div>
  </section>
</template>


