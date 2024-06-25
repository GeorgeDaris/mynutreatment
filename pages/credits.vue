<template>
  <div class="prose">
    <ContentRenderer :value="data" />
    
  </div>
</template>

<script lang="ts" setup>
const {data} = await useAsyncData('categories', async () => {
  const credits = await queryContent('main/credits').findOne();

  return credits
})
</script>
<style>

</style>