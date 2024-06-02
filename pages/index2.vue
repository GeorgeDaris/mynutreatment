<template>
  <div class="wrapper">
    <HeroSection :data="intro" />

    <AboutCard :data="data" :is-section="true" id="box" />

    <LandingServices />

    <BlogPostShowcase :is-section="true" />

    <LandingReviews />

    <FooterCTA />

    <!-- <div id="box">this is a test</div> -->
  </div>
</template>

<script setup>
// import * as useGsap from '@hypernym/nuxt-gsap';
// const {gsap} = useNuxtApp()
// import gsap from "@hypernym"
// import {gsap} from '@hypernym/nuxt-gsap'
const {$gsap, $ScrollTrigger} = useNuxtApp()

useSeoMeta({
  title: "mynutreatment",
  ogTitle: "mynutreatment",
  description: "Ιωάννα Παπατζανή | Διατροφολόγος-Διαιτολόγος | Ηράκλειο Κρήτης. Υπηρεσίες Διατροφής: Διαχείριση Βάρους, Κλινική Διατροφή, Αλλαγή διατροφικών συνηθειών, Παιδική Παχυσαρκία, Συνεδρίες ΟΠΙΙΙΙΘ, Εξατομικευμένη προσέγγιση σύμφωνα με τις ανάγκες σας.",
  ogDescription: "Ιωάννα Παπατζανή | Διατροφολόγος-Διαιτολόγος | Ηράκλειο Κρήτης. Υπηρεσίες Διατροφής: Διαχείριση Βάρους, Κλινική Διατροφή, Αλλαγή διατροφικών συνηθειών, Παιδική Παχυσαρκία, Συνεδρίες ΟΠΙΙΙΙΘ, Εξατομικευμένη προσέγγιση σύμφωνα με τις ανάγκες σας.",
  ogImage: "/Hero.png",
  twitterCard: 'summary_large_image',
  themeColor: "#C6DBC3",
  ogUrl: `https://www.mynutreatment.gr`,
  twitterCard: 'summary_large_image',
  twitterTitle: "mynutreatment",
  twitterDescription: "Ιωάννα Παπατζανή | Διατροφολόγος-Διαιτολόγος | Ηράκλειο Κρήτης. Υπηρεσίες Διατροφής: Διαχείριση Βάρους, Κλινική Διατροφή, Αλλαγή διατροφικών συνηθειών, Παιδική Παχυσαρκία, Συνεδρίες ΟΠΙΙΙΙΘ, Εξατομικευμένη προσέγγιση σύμφωνα με τις ανάγκες σας.",
  twitterImage: `/Hero.png`,
  ogSiteName: "mynutreatment",
})



const {data} = await useAsyncData('about', async () => {
    return await queryContent('main/landing-page/about').findOne();
})

const intro = await queryContent('main/landing-page/intro').findOne();

onMounted(() => {
  // useGsap.from('#box', {
  //   y: 100,
  //   opacity: 0,
  //   delay: 1,
  //   ScrollTrigger: {
  //     trigger: '#box',
  //     start: "top center",
  //     end: 'bottom center',
  //     scrub: 1,
  //     markers: true
  //   }
  // })

  // $gsap.to('#box', { 
  //   rotation: 0,
  //   x: 0, 
  //   startAt: {
  //     x: -200,
  //   },
  //   duration: 7 ,
  //   scrollTrigger: {
  //     trigger: '#box',
  //     start: "top center",
  //     end: '50% center',
  //     scrub: 1,
  //     markers: true
  //   }
  // })
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