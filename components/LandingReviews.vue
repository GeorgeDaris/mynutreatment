<template>
  <section class="block">
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