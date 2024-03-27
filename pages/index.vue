<template>
  <div>
    <NuxtLink to="/about">about</NuxtLink>
    <TestComp />
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "mynutreatment",
  ogTitle: "mynutreatment",
  description: "tba",
  ogDescription: "tba",
  ogImage: "/public/favicon.png",
  twitterCard: 'summary_large_image',
  themeColor: "#C6DBC3"
})

</script>

<style>

</style>