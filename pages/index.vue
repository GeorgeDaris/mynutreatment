<template>
  <div>
    <!-- <TestComp /> -->
    
    <img src="/assets/icons/logo.svg" alt="">
    <h1 class="remove-pseudo">
      Coming soon!
    </h1>
    <address>
      <a href="mailto:mynutreatment@info.com">mynutreatment@info.com</a>
    </address>
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

<style scoped>
  div {
    display: grid;
    justify-items: center;

    img {
      width: 80%;
    }

  }
</style>