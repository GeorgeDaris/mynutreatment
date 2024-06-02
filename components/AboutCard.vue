<template>
  <section id="box" :class="isSection ? 'block' : ''" >
    <NuxtPicture :src="data.image" :alt="data.alt" width="480" height="556" sizes="sm:800" placeholder :loading="loading" fit="cover" class="profile-picture" />
    <div class="text" id="text">
        <h1 v-if="!isSection">{{ data.title }}</h1>
        <h2 v-else class="h1-size">{{ data.title }}</h2>
        <div class="prose">
            <ContentRenderer :value="data" />
        </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps<{
  data: {
    type: Object,
    required: true,

    title: string,
    description: string,
    image: string,
    alt: string
  },
  isSection?: boolean
}>()

const loading = await props.isSection ? 'lazy' : 'eager';

const {$gsap, $ScrollTrigger} = useNuxtApp()

onMounted(() => {
    // create
let mm = $gsap.matchMedia();

// add a media query. When it matches, the associated function will run
    mm.add("(min-width: 760px)", () => {
        $gsap.to('#text', { 
        rotation: 0,
        x: '-5rem',
        y: '8rem', 
        opacity: 1,
        startAt: {
          x: 200,
          y: '8rem', 
          opacity: 0
        },
        duration: 1 ,
        scrollTrigger: {
          trigger: '#text',
          start: "-300px center",
          end: '50% center',
          scrub: 2,
        //   markers: true
        }
      })

      $gsap.to('.profile-picture', { 
        rotation: 0,
        x: 0, 
        opacity: 1,
        startAt: {
          x: -200, 
          opacity: 0
        },
        duration: 2 ,
        delay: 2,
        scrollTrigger: {
          trigger: '.profile-picture',
          start: "70px center",
          end: '50% center',
          scrub: 2,
        //   markers: true
        }
      })
    });
    
})

</script>

<style scoped>
section {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-template-rows: auto auto;
    gap: 1rem;
    width: 100%;
    /* margin-bottom: 4rem; */
    overflow-x: clip;

    .text {
        /* transform: translateX(-5rem) translateY(8rem); */
        width: 112%;
        height: fit-content;
        grid-row: 1 / 3;
        background-color: var(--pure-white);
        padding: 1rem;
        padding-top: 4rem;
        padding-left: 8rem;
        padding-right: 4rem;
        padding-bottom: 8rem;
        border: var(--card-border);
        border-right: none;
        border-radius: var(--radius-sm);
        /* border-bottom-left-radius: var(--radius-sm);
        border-top-left-radius: var(--radius-sm); */
        /* animation-name: slidefromrightabout;
        animation-duration: 0.6s;
        animation-fill-mode: forwards;
        animation-delay: 0.5s;*/
        /* filter: opacity(0);  */
        opacity: 0; 
        

        h1, h2 {
            text-align: right;
        }
    }

    .profile-picture {
        grid-row: 1;
        /* padding-inline: 1rem; */
        background-color: var(--pure-white);
        border-radius: var(--radius-sm);
        box-shadow:
            0.05rem 0rem 1px 0rem var(--shadow-color-1),
            0.7rem 0rem 0px -0.3rem var(--shadow-color-2),
            0.7rem 0rem 2px -0.3rem var(--shadow-color-1),
            1.3rem 0rem 0px -0.5rem var(--shadow-color-3),
            1.3rem 0rem 2px -0.5rem var(--shadow-color-1);
        z-index: 3;
        /* animation-name: slidefromleft;
        animation-duration: 0.6s;
        animation-fill-mode: forwards;
        animation-delay: 0.1s;*/
        /* filter: opacity(0);  */
        opacity: 0; 

        &:deep(img) {
            width: 100%;
            object-fit: cover;
            border-radius: var(--radius-sm);
            border-bottom-right-radius: var(--radius-60);
        }
    }
}

@media screen and (max-width: 767px) {
    section {
        grid-template-columns: 1fr;
        overflow-x: unset;

        .profile-picture {
            grid-row: 1;
            position: relative;
            left: -1rem;
            width: 95%;
            max-width: 30rem;
            /* bottom: -2rem; */
            animation: none;
            filter: unset;
            opacity: 1;

            &:deep(img) {
                max-height: 27rem;
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }
        }

        .text {
            grid-row: 2 / 4;
            justify-self: end;
            width: 105%;
            transform: unset;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            position: relative;
            right: -1rem;
            bottom: 4rem;
            padding-left: 2rem;
            padding-right: 2rem;
            animation: none;
            filter: unset;
            opacity: 1;


            h1 {
                line-break: anywhere;
            }
        }
    }
}
</style>