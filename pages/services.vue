<template>
  <div>
    <section class="meeting-grid">
      <h2>Συνεδρίες</h2>

      <NuxtPicture src="/images/services/meeting.jpg" width="550" height="260" sizes="sm:500"/>
      <div class="container">
        <h3 class="remove-pseudo">Τι περιλαμβάνει μια συνεδρία;</h3>
        <p>Ξεκινάμε με την λήψη διατροφικού ιστορικού ώστε να μπορέσουμε να εντοπίσουμε τις υπάρχουσες συνήθειες και μαζί να ανακαλύψουμε πώς αυτές μπορούν να προσαρμοστούν. Λαμβάνουμε υπόψιν τις ιατρικές εξετάσεις, την φαρμακευτική αγωγή και τις σωματομετρικές μετρήσεις.</p>
      </div>

      <p>Μαθαίνουμε καινούργιες τεχνικές που αφορούν την οργάνωση των γευμάτων και δημιουργούμε ένα εξατομικευμένο πρόγραμμα διατροφής, προσαρμοσμένο στις προτιμήσεις και στους ρυθμούς ζωής του ατόμου.</p>
      <!-- <div class="container card-stack">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
      </div> -->
      <CardStack />

      <NuxtPicture src="/images/services/measuring-client.jpg" width="350" height="450" sizes="sm:500" loading="lazy"/>
      <p class="measure-para">Σε κάθε συνεδρία πραγματοποιούμε αξιολόγηση σωματικού βάρους, ανάλογα τον διαιτώμενο και τις ανάγκες του. Τα εργαλεία μας είναι ο λιπομετρητής για την ανάλυση σύστασης σώματος και η μεζούρα για την παρακολούθηση πόντων σε συγκεκριμένα σημεία στο σώμα.</p>

      <div class="container">
        <h3 class="remove-pseudo">Τι περιλαμβάνει μια εξ αποστάσεως (online) συνεδρία;</h3>
        <p>Εφόσον δεν υπάρχει δυνατότητα για μια δια ζώσης συνεδρία, το ραντεβού μας μπορεί να πραγματοποιηθεί διαδικτυακά. Τα στάδια που ακολουθούμε είναι ακριβώς τα ίδια καθώς με την σωστή καθοδήγηση ο διαιτώμενος μαθαίνει να μετράει τους πόντους και το βάρος μόνος του.</p>
        
        <MainButton size="small">
          <NuxtLink to="/contact">Κλείστε ραντεβού</NuxtLink>
        </MainButton>
      </div>
      <NuxtPicture src="/images/services/online-meeting.jpg" width="525" height="400"  sizes="sm:500" loading="lazy" id="online"/>


    </section>
    <section class="services-grid">
      <h2 id="categories">Υπηρεσίες</h2>
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

      picture:nth-of-type(2) {
        

        /* &:deep(img) {
          margin-inline: auto;
        } */
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