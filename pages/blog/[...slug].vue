<script setup>

const route = useRoute();

const {data} = await useAsyncData(`content-${route.path}`, () => queryContent().where({_path: route.path}).findOne()
);

useSeoMeta({
  ogType: 'article',
  ogUrl: `https://www.mynutreatment.gr/${route.path}`,
  title: data.value.title,
  ogTitle: data.value.title,
  description: data.value.description,
  ogDescription: data.value.description,
  ogImage: `https://mynutreatment.vercel.app/${data.value.image}`,
  author: data.author,
  byl: data.author,
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