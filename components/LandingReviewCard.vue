<template>
  <article class="review-card">
    <div class="icons">
      <img src="../assets/icons/google-icon.png" alt="google icon" width="35" heigh="35" class="google-icon">
      <div class="stars">
        <template v-for="i in 5" id="i">
          <img src="../assets/icons/star.svg" alt="star" width="35" heigh="35">
        </template>
      </div>
    </div>
    <!-- <div class="text">
      <h3>{{ review.name }}</h3>
      <ContentRenderer class="content" :value="review" />
    </div> -->
    <NuxtLink :to="review.link" target="blank" class="text">
      <h3>{{ review.name }}</h3>
      <ContentRenderer class="content" :value="review" />
    </NuxtLink>
  </article>
</template>

<script lang="ts" setup>
const props = defineProps<{
  review: {
    type: Object,
    required: true,

    name: string,
    description: string,
    link: string,
  }
}>()

const {$gsap, $ScrollTrigger} = useNuxtApp()

onMounted(() => {
    // create
// let mm = $gsap.matchMedia();

// add a media query. When it matches, the associated function will run
    // mm.add("(min-width: 760px)", () => {
// const reviews: HTMLElement[] = $gsap.utils.toArray('.review-card')

// reviews.forEach((review, index) => {
//   $gsap.to(review, { 
//     opacity: 1,
//     x: 0,
//     backgroundColor: 'red',
//     startAt: {
//       opacity: 0,
//       x: 200,
//       backgroundColor: 'blue'
//     },
//     duration: 0 ,
//     delay: 0,
//     scrollTrigger: {
//       trigger: review,
//       start: "-70px center",
//       end: '50% center',
//       scrub: 2,
//       toggleActions: "play none none none",
//       markers: true
//     }
//   })
// })

  // $gsap.to('.review-card', { 
  //   opacity: 1,
  //   startAt: {
  //     opacity: 0
  //   },
  //   duration: 0 ,
  //   delay: 0,
  //   scrollTrigger: {
  //     trigger: '.review-card',
  //     start: "-70px center",
  //     end: '50% center',
  //     // scrub: 2,
  //     markers: true
  //   }
  // })
    
})
</script>

<style scoped>
article {
  padding: 1rem;
  margin-block: 1.5rem;
  background-color: var(--pure-white);
  margin-right: 1rem;
  border: var(--card-border);
  border-radius: var(--radius-sm);
  width: 25rem;
  /* for mobile devices */
  max-width: 80vw; 
  height: 35rem;
  /* overflow-y: auto;
  scrollbar-width: thin; */
  /* overflow-x: hidden; */
  box-shadow: rgba(0, 0, 0, 0.171) 20px 0px 20px -5px;
  display: grid;
  grid-template-rows: min-content min-content;
  flex-shrink: 0;
  flex-grow: 0;

  &:not(:first-of-type) {
    margin-left: -5rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: translateX(5rem);
    }

    &:last-of-type:hover {
      padding-right: 5rem;
    }
  }
}

.icons {
  display: flex;
  align-items: center;
}

.google-icon {
  max-width: 2rem;
  max-height: 2rem;
}

.stars {
  display: flex;
  margin-left: auto;
  gap: .5rem
}

.text {
  text-decoration: none;
    font-style: normal;
    color: inherit;

  h3 {
    padding-top: 1rem;
    padding-bottom: 0.75rem;
  }

  /* &:deep(a) {
    text-decoration: none;
    font-style: normal;
    color: inherit;

    * {
      text-decoration: none;
      font-style: normal;
      color: inherit;
    } */
  /* } */
}

.content {
  overflow-x: auto;
  scrollbar-width: thin;
  padding-right: 0.35rem;
  padding-block: 0.35rem;
  max-height: 25rem;
  /* mask-image: linear-gradient(transparent 0 1%, red, transparent 99% 100%); */
  mask-image: linear-gradient(transparent, red 4% 96%, transparent);
}
</style>