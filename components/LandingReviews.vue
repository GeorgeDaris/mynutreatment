<template>
  <section class="block reviews">
    <h2 class="h1-size">Αξιολογήσεις</h2>
    <div class="cards">
      <template v-for="review, i in reviews" :key="review">
        <LandingReviewCard :review="review":style="{ zIndex: reviews.length - i }" />
      </template>
    </div>
    </section>
</template>

<script setup>
const reviews = await queryContent('main/landing-page/reviews').find();

const {$gsap, $ScrollTrigger} = useNuxtApp()

onMounted(() => {
  $gsap.to('.reviews', { 
          rotation: 0,
          x: 0, 
          opacity: 1,
          startAt: {
            x: 20, 
            opacity: 0
          },
          duration: 2 ,
          delay: 2,
          scrollTrigger: {
            trigger: '.reviews',
            start: "-150px center",
            end: '50% center',
            scrub: 2,
            // markers: true
          }
        })
})
</script>

<style scoped>
section {
  overflow-x: auto;
  scrollbar-width: thin;
  max-width: 100%;
  /* margin-block: 6rem; */
  padding-left: .7rem;
  mask-image: linear-gradient(to right, transparent, red 2% 96%, transparent);
}

.cards {
  display: flex;
  /* overflow-x: auto; */
}
</style>