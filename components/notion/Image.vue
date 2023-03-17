<template>
  <!-- <div class="flex flex-col">
    <label :for="block.id" class="modal-button cursor-pointer not-prose">
      <img :src="imgSrc" class="mb-0" />
    </label>
  </div> -->
  <NuxtImg :src="imgSrc" class="w-full my-4" sizes="sm:100vw md:50vw lg:1152px" format="webp" />
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
