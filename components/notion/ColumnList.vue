<script setup lang="ts">
import Image from './Image.vue';

const props = defineProps({
  block: { type: Object as PropType<Block>, default: () => ({}) }
});

const { data: blockList } = await useFetch<Block[]>(`/api/notion/blocks/${props.block.id}`);

const blocks: Block[] = [];
blockList.value?.forEach(async (block) => {
  const content = await getBlockDetails(block.id);
  if (content.length == 1) {
    blocks.push(content[0]);
  }
});

async function getBlockDetails(id: string): Promise<Block[]> {
  const { data } = useFetch<Block[]>(`/api/notion/blocks/${id}`);
  return data?.value || [];
}
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <div v-for="block in blocks" :key="block.id">
      <Image v-if="block.type === 'image'" :block="block" />
    </div>
  </div>
</template>


