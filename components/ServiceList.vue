<template>
  <div class="service-wrapper">
        <!-- <h3>{{ category.title }}</h3> -->
        <div class="service-container">
          <template v-for="file in contentFiles">
            <ServiceCard :service="file" />
            <!-- {{ file.title }} -->
          </template>
          <!-- {{ category }} {{ category._path }} {{ contentFiles }} -->
        </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  category: {
    type: Object,
    required: true,

    title: string,
    _path: string
  }
}>()

// let files; 

const contentFiles = await queryContent('/main/services/categories')
    .where({category: {$exists: false}})
    .find();

    const {$gsap, $ScrollTrigger} = useNuxtApp()

onMounted(() => {
    // create
// let mm = $gsap.matchMedia();

// add a media query. When it matches, the associated function will run
    // mm.add("(min-width: 760px)", () => {
const sections: HTMLElement[] = $gsap.utils.toArray('.service-wrapper')

sections.forEach((section, index) => {
  const isEven = index % 2 === 0;
  $gsap.to(section, { 
    rotation: 0,
    x: 0, 
    opacity: 1,
    startAt: {
      x: isEven ? -200 : 200, 
      opacity: 0
    },
    duration: 2 ,
    delay: 2,
    scrollTrigger: {
      trigger: section,
      start: "-200px center",
      end: '20% center',
      scrub: 2,
      once: true,
      toggleActions: "play none none none",
    }
  })

  let mm = $gsap.matchMedia();

// add a media query. When it matches, the associated function will run
    mm.add("(max-width: 760px)", () => {
      $gsap.to(section, { 
        rotation: 0,
        x: 0, 
        opacity: 1,
        startAt: {
          x: isEven ? -200 : 200, 
          opacity: 0
        },
        duration: 2 ,
        delay: 2,
        scrollTrigger: {
          trigger: section,
          start: "-80% center",
          end: '10% center',
          scrub: 2,
          once: true,
          toggleActions: "play none none none",
        }
      })
    })
})
    
})
</script>

<style scoped>
.service-wrapper {
  display: grid;
  gap: 2rem;
}

.service-container {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(20rem, 1fr));
  justify-items: center;
  align-content: start;
  gap: 5rem 3rem;
  margin-top: 3rem;

  &:has(.service-card:only-child) {
    justify-items: start;
  }

  /* &:last-of-type {
    margin-bottom: 2rem;
  } */

  .service-card {
    &:nth-of-type(even) {
      .icon-wrapper {
        background-color: var(--primary-yellow);
      }
    }
  }
}

.service-container:deep(:nth-of-type(1n+1)) {
  .icon-wrapper {
    background-color: var(--primary-yellow);
  }
}

.service-container:deep(:nth-of-type(3n+1)) {
  .icon-wrapper {
    background-color: var(--primary-red);
  }
}

.service-container:deep(:nth-of-type(3n)) {
  .icon-wrapper {
    background-color: var(--primary-green);
  }
}
</style>