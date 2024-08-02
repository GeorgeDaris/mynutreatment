<template>
  <div>
    <section class="meeting-grid">
      <h2>Συνεδρίες</h2>
      
      <!-- {{ meetingParas }} -->
      <NuxtPicture src="/images/services/meeting.jpg" width="550" height="260" sizes="sm:500" alt="Meetings" />
      <div class="container">
        <h3 class="remove-pseudo">{{ meeting.title }}</h3>
        <p>{{ meeting.description }}</p>
      </div>

      <p>{{meetingParas[1]}}</p>
      <!-- <div class="container card-stack">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
      </div> -->
      <CardStack />

      <NuxtPicture src="/images/services/measuring-client.jpg" width="350" height="450" sizes="sm:500" loading="lazy" alt="Ioanna Papatzani taking a client's measurements" />
      <p class="measure-para">{{meetingParas[2]}}</p>

      <div class="container">
        <h3 class="remove-pseudo">{{online.title}}</h3>
        <p>{{online.description}}</p>
        
        <MainButton size="small">
          <NuxtLink to="/contact">Κλείστε ραντεβού</NuxtLink>
        </MainButton>
      </div>
      <NuxtPicture src="/images/services/online-meeting.jpg" width="525" height="400"  sizes="sm:500" loading="lazy" id="online" alt="Ioanna Papatzani at her desk during an online meeting"/>


    </section>
    <section class="services-grid">
      <h2 id="category">Υπηρεσίες</h2>
      <!-- <template v-for="category in data"> -->
        <ServiceList :category="data">
        </ServiceList>
      <!-- </template> -->

    </section>
    
  </div>
</template>

<script lang="ts" setup>
// const {data} = await useAsyncData('categories', async () => {
//     const categories = await queryContent('main/services/categories').where({category: {$exists: true}}).find();

//     return categories
// })

const {data} = await useAsyncData('categories', async () => {
    const categories = await queryContent('main/services/categories').where({category: {$exists: true}}).find();

    return categories
})

// const mainText = await queryContent('main/services').findOne();
const meeting = await queryContent('main/services/main/meeting').findOne();

function extractParagraphs(data) {
  const paragraphs = [];

  function traverse(node) {
    if (node.type === 'element' && node.tag === 'p') {
      const textNode = node.children.find(child => child.type === 'text');
      if (textNode) {
        paragraphs.push(textNode.value);
      }
    }

    if (node.children) {
      node.children.forEach(child => traverse(child));
    }
  }

  traverse(data);
  return paragraphs;
}

// Get the paragraphs array
const meetingParas = extractParagraphs(meeting.body);


const online = await queryContent('main/services/main/online').findOne();

useSeoMeta({
  title: "mynutreatment",
  ogTitle: "mynutreatment",
  description: "Ιωάννα Παπατζανή | Διατροφολόγος-Διαιτολόγος | Ηράκλειο Κρήτης. Υπηρεσίες Διατροφής: Διαχείριση Βάρους, Κλινική Διατροφή, Αλλαγή διατροφικών συνηθειών, Παιδική Παχυσαρκία, Συνεδρίες ΟΠΙΙΙΙΘ, Εξατομικευμένη προσέγγιση σύμφωνα με τις ανάγκες σας.",
  ogDescription: "Ιωάννα Παπατζανή | Διατροφολόγος-Διαιτολόγος | Ηράκλειο Κρήτης. Υπηρεσίες Διατροφής: Διαχείριση Βάρους, Κλινική Διατροφή, Αλλαγή διατροφικών συνηθειών, Παιδική Παχυσαρκία, Συνεδρίες ΟΠΙΙΙΙΘ, Εξατομικευμένη προσέγγιση σύμφωνα με τις ανάγκες σας.",
  ogImage: "/images/services/measuring-client.jpg",
  twitterCard: 'summary_large_image',
  themeColor: "#C6DBC3",
  ogUrl: `https://www.mynutreatment.gr/services`,
  twitterCard: 'summary_large_image',
  twitterTitle: "mynutreatment",
  twitterDescription: "Ιωάννα Παπατζανή | Διατροφολόγος-Διαιτολόγος | Ηράκλειο Κρήτης. Υπηρεσίες Διατροφής: Διαχείριση Βάρους, Κλινική Διατροφή, Αλλαγή διατροφικών συνηθειών, Παιδική Παχυσαρκία, Συνεδρίες ΟΠΙΙΙΙΘ, Εξατομικευμένη προσέγγιση σύμφωνα με τις ανάγκες σας.",
  twitterImage: `/images/services/measuring-client.jpg`,
  ogSiteName: "mynutreatment",
})

const {$gsap, $ScrollTrigger} = useNuxtApp()

onMounted(() => {
    // create
// let mm = $gsap.matchMedia();

// add a media query. When it matches, the associated function will run
    // mm.add("(min-width: 760px)", () => {
      $gsap.to('.measure-para', { 
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
          trigger: '.measure-para',
          start: "-300px center",
          end: '100% center',
          scrub: 2,
          once: true
        //   markers: true
        }
      })

      $gsap.to('#online', { 
        rotation: 0,
        x: 0, 
        opacity: 1,
        scale: 1,
        startAt: {
          x: 100, 
          opacity: 0,
          rotation: 10,
          scale: 0.8
        },
        duration: 2 ,
        delay: 2,
        scrollTrigger: {
          trigger: '#online',
          start: "-50px center",
          end: '50% center',
          scrub: 2,
          once: true
        //   markers: true
        }
      })

      let mm = $gsap.matchMedia();

// add a media query. When it matches, the associated function will run
    mm.add("(max-width: 760px)", () => {
      $gsap.to('.measure-para', { 
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
          trigger: '.measure-para',
          start: "-100% center",
          end: '-30% center',
          scrub: 2,
          once: true
        //   markers: true
        }
      })

      $gsap.to('#online', { 
        rotation: 0,
        x: 0, 
        opacity: 1,
        scale: 1,
        startAt: {
          x: 100, 
          opacity: 0,
          rotation: 10,
          scale: 0.8
        },
        duration: 2 ,
        delay: 2, 
        scrollTrigger: {
          trigger: '#online',
          start: "-140% center",
          end: '-30% center',
          scrub: 2,
          once: true
        //   markers: true
        }
      })
    })
      
})
</script>

<style scoped>
.services-grid {
  margin-top: 6rem;
  display: grid;
  gap: 2rem;

  /* div:first-of-type {
    margin-block: 2rem;
  } */
}





  /* h3 {
    margin-bottom: 1rem;
  } */
  .meeting-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem 2rem;

    h2 {
      grid-column: span 2;
    }

    .container {
      display: grid;
      /* align-content: space-between; */

      &:deep(.button) {
        margin-left: auto;
      }
    }
    p {
      /* max-width: 27rem; */
    }

    .measure-para {
      align-self: flex-end;
    }

    
  }

  :deep(img) {
    border-radius: var(--radius-sm);
    object-fit: cover;
  }

  picture:nth-of-type(1) {
    &:deep(img) {
      width: 100%;
    }
  }

  picture:nth-of-type(2) {
    position: relative;

    &:deep(img) {
      margin-inline: auto;
    }

    &::after {
        content: "";
        position: absolute;
        bottom: -.75rem;
        right: -8rem;
        padding-block: 5rem;
        display: block;
        width: 25rem;
        height: 30%;
        padding-block: 2rem;
        background-color: var(--off-red);
        border-radius: var(--radius-lg);
        z-index: -1;
      }
  }

  picture:nth-of-type(3) {
    &:deep(img) {
      width: 100%;
      height: 100%;
    }
  }
  

  @media screen and (max-width: 767px) {
    .meeting-grid {
      /* display: grid; */
      position: relative;
      grid-template-columns: 1fr;
      gap: 2.5rem;

      h2 {
        grid-column: unset;
      }

      .container {
        gap: 1rem;
      }

      .container:last-of-type {
        grid-row: 8;
        gap: 1rem
      }

      picture:first-of-type {
        position: relative;
        left: -1rem;
        

        &:deep(img) {
          width: 100%;
          /* height: 100%; */
          border-top-left-radius: 0rem;
          border-bottom-left-radius: 0rem;
        }
      }

      /* picture:nth-of-type(2) { */
        

        /* &:deep(img) {
          margin-inline: auto;
        } */
      /* } */

      picture:nth-of-type(2) {

        &::after {
            content: "";
            position: absolute;
            bottom: -2rem;
            right: -8rem;
            padding-block: 5rem;
            display: block;
            width: 25rem;
            height: 30%;
            padding-block: 2rem;
            background-color: var(--off-red);
            border-radius: var(--radius-lg);
            z-index: -1;
          }
      }

      picture:nth-of-type(3) {
        

        position: relative;
        right: -1rem;

        &:deep(img) {
          width: 100%;
          height: 100%;
          border-top-right-radius: 0rem;
          border-bottom-right-radius: 0rem;
        }
      }

      &:deep(.card-stack) {
       grid-row: 4;
       /* height: min-content; */
       /* order: 2; */
      }
      
    }
  }
</style>