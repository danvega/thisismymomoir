<template>
  <div class="flex flex-col">
    <label :for="block.id" class="modal-button cursor-pointer not-prose">
      <img :src="imgSrc" class="mb-0" />
    </label>
  </div>
</template>

<script setup lang="ts">
import { blockStatement } from '@babel/types';

const props = defineProps({
  block: { type: Object as PropType<Block>, default: () => ({}) }
});

const imgSrc = ref('');
switch (props.block.image?.type) {
  case 'external':
    imgSrc.value = props.block.image.external?.url;
    break;
  case 'file':
    imgSrc.value = props.block.image.file?.url;
    break;
  default:
    imgSrc.value = '';
}
</script>
