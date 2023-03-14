<template>
  <div class="flex flex-col">
    <label :for="block.id" class="modal-button cursor-pointer not-prose">
      <img :src="imgSrc" class="mb-0" />
    </label>
  </div>
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
    const re = /(?<=secure.notion-static.com\/)(.*)(?=\?X-Amz-Algorithm)/gm;
    const url = props.block.image.file?.url;
    const name = url.match(re)[0];
    imgSrc.value = '/images/blog/posts/' + props.slug + '/' + name.split('/')[1];
    break;
  default:
    imgSrc.value = '';
}
</script>
