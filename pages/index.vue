<template>
  <div class="wrapper">
    <!-- <TestComp /> -->
    
    <!-- <img src="/assets/icons/logo.svg" alt="">
    <h1 class="remove-pseudo">
      Coming soon!
    </h1>
    <address>
      <a href="mailto:mynutreatment@info.com">mynutreatment@info.com</a>
    </address> -->
    <HeroSection />
    <address>
      <a href="mailto:mynutreatment@info.com">mynutreatment@info.com</a>
      <br>
      <br>
      <div>
        <a href="tel:+30 6978312684">+30 6978312684</a>
      </div>
    </address>

    <AboutCard :data="data" :is-section="true" />

    <LandingServices />

    <BlogPostShowcase :is-section="true" />

    <LandingReviews />
  </div>
</template>

<script setup>
useSeoMeta({
  title: "mynutreatment",
  ogTitle: "mynutreatment",
  description: "tba",
  ogDescription: "tba",
  ogImage: "/public/favicon.png",
  twitterCard: 'summary_large_image',
  themeColor: "#C6DBC3"
})


const {data} = await useAsyncData('about', async () => {
    return await queryContent('main/landing-page/about').findOne();
})

</script>

<style scoped>
  .wrapper {
    display: grid;
    justify-items: center;

    img {
      width: 80%;
    }

  }
</style>