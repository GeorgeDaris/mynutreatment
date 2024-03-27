<script setup>

const route = useRoute();

const {data} = await useAsyncData(`content-${route.path}`, () => queryContent().where({_path: route.path}).findOne()
);

useSeoMeta({
  title: data.value.title,
  ogTitle: data.value.title,
  description: data.value.description,
  ogDescription: data.value.description,
  ogImage: `/public${data.value.image}`,
  twitterCard: 'summary_large_image',
})



// Todo: Look into UseHead
</script>

<template>
  <main>
    <BlogPost :post="data" /> 
  </main>
</template>

<style scoped>

/*  */
</style>