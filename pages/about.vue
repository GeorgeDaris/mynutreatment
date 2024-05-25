<template>
    <AboutCard :data="data" />
</template>
<script setup>
// const route = useRoute();

// const {data} = await useAsyncData('about', () => queryContent('/main').findOne())

const {data} = await useAsyncData('about', async () => {
    return await queryContent('main/about').findOne();
})

const route = useRoute();

useSeoMeta({
  ogType: 'article',
  ogUrl: `https://www.mynutreatment.gr/${route.path}`,
  title: `mynutreatment | ${data.value.title}`,
  ogTitle: `mynutreatment | ${data.value.title}`,
  description: data.value.description,
  ogDescription: data.value.description,
  ogImage: `https://mynutreatment.vercel.app/${data.value.image}`,
  twitterCard: 'summary_large_image',
})
</script>