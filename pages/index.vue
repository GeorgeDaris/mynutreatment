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
    <!-- <HeroSection /> -->
    <!-- <address>
      <a href="mailto:mynutreatment@info.com">mynutreatment@info.com</a>
      <br>
      <br>
      <div>
        <a href="tel:+30 6978312684">+30 6978312684</a>
      </div>
    </address> -->

    <AboutCard :data="data" :is-section="true" />

    <!-- <LandingServices />

    <BlogPostShowcase :is-section="true" />

    <LandingReviews /> -->
  </div>
</template>

<script setup>
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