<template>
  <!-- <NuxtImg :src="imgSrc" class="w-full my-4 zoom" sizes="sm:100vw md:50vw lg:1152px" /> -->
  <img :src="imgSrc" class="w-full my-4 zoom" alt="" />
</template>

<script setup lang="ts">
const props = defineProps({
  block: { type: Object as PropType<Block>, default: () => ({}) },
  slug: { type: String, default: '' }
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
