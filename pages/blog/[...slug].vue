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
  author: data.value.author,
  byl: data.value.author,
  twitterCard: 'summary_large_image',
  twitterTitle: data.value.title,
  twitterDescription: data.value.description,
  twitterImage: `https://mynutreatment.vercel.app/${data.value.image}`,
  ogSiteName: "mynutreatment",
  articleAuthor: data.value.author
})

// useHead({
//   meta: [
//     { property: 'article:author', content: data.value.author }
//   ]
// })



// Todo: Look into UseHead
</script>

<template>
  <div>
    <BlogPost :post="data" /> 
    <BlogPostReadMore />
  </div>
</template>

<style scoped>

/*  */
</style>