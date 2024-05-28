<template>
  <section>
    <header>
      <h1>Eat smarter, live better</h1>
    </header>
    <div class="text">
      <p>Καλωσορίσατε στο mynutreatment!</p>
      <p>Ονομάζομαι Ιωάννα Παπατζανή και είμαι πτυχιούχος Διατροφολόγος, του τμήματος Διατροφής και Διαιτολογίας του Αλεξάνδρειου Τεχνολογικού Εκπαιδευτικού Ιδρύματος Θεσσαλονίκης.</p>
    </div>
    <div class="logo-container" >
      <NuxtPicture src="/images/logo-no-text.svg" alt="mynutreatment"  width="250" height="250" sizes="sm:800" placeholder fit="cover" />
    </div>
    <MainButton class="cta-button" size="large">
      <NuxtLink to="/contact">Κλείστε ραντεβού
      </NuxtLink>
    </MainButton>
    <div class="author">
      <p>Ιωάννα Παπατζανή</p>
    </div>
  </section>
  <section >
    <header>
      <!-- <h1 class="alt">Eat smarter, <span class="underlined">live better</span></h1> -->
      <h1 class="alt">Coming soon!</h1>
    </header>
    <!-- <div class="text"> -->
      <ContentRenderer :value="intro" class="text"/>
    <!-- </div> -->
    <div class="logo-container hero" >
      <NuxtPicture src="/images/landing-page/hero.png" alt="mynutreatment"  width="520" height="480" sizes="sm:800" placeholder fit="cover"  />
    </div>
    <MainButton class="cta-button" size="large">
      <!-- <NuxtLink to="/contact" > -->
      <NuxtLink to="mailto:info@mynutreatment.com" >
        <!-- {{ intro.buttonText }}  -->Κλείστε ραντεβού 
      </NuxtLink>
    </MainButton>
    <div class="author">
      <p>{{ intro.subheader }}</p>
    </div>
  </section>
</template>

<script lang="ts" setup>
const intro = await queryContent('main/landing-page/intro').findOne();
</script>

<style scoped>
section {
  --gap: 2rem;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, min-content);
  gap: var(--gap);
  overflow-x: clip;
  margin-bottom: 8rem;
  margin-top: 4rem; /*For the coming soon version*/

  header {
    grid-column: 1 / 4;
    display: grid;
    align-content: center;

    h1 {
      text-shadow: none;
      margin-bottom: -1rem;
      filter: opacity(0);
      animation-name: opacityfade;
      animation-duration: 0.6s;
      animation-fill-mode: forwards;
      animation-delay: 2.5s;


      &.alt {
        margin-bottom: -1rem
      }
    }
  }

  .text {
    grid-column: 1 / 4;
    grid-row: 2 / 4;

    background-color: var(--primary-green);
    padding: 1rem;
    padding-right: 5rem;
    border-radius: var(--radius-sm);
    border-bottom-right-radius: var(--radius-lg);

    animation-name: slidefromtop;
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
    animation-delay: 0.2s;
    filter: opacity(0);

    &:deep(p) {
      padding-block: 0.35rem
    }
  }

  .logo-container {
    grid-column: 4 / 6;
    grid-row: 2 / 3;

    display: grid;
    justify-content: center;
    height: 60%;
    background-color: var(--pure-white);
    /* box-shadow: .5rem .5rem 0 var(--primary-green); */
    border-radius: var(--radius-sm);
    border-bottom-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-md);

    animation-name: slidefromright;
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
    animation-delay: 0.8s;
    filter: opacity(0);

    picture {
      position: relative;
      top: -50%;
    }

    &.hero {
      grid-row: 1 / 4;
      height: 100%;
      background-color: unset;
      display: unset;


      picture {
        position: static;
        width: 100%;
        height: 100%;
        /* border: 2px solid salmon; */
        border-radius: var(--radius-sm);
        border-bottom-left-radius: var(--radius-lg);
        border-top-right-radius: var(--radius-lg);
        overflow: hidden;

        &:deep(img) {
          object-fit: cover;
          width: 100%;
          height: 100%;
          min-height: 23rem;
        }
      }
    }
  }

  .cta-button {
    grid-row: 4 / 5;
    grid-column: 1 / 3;

    width: 100%;
    border-radius: var(--radius-sm);
    /* height: 100%; */
    /* padding-block: auto; */

    animation-name: slidefromleft;
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
    animation-delay: 1.2s;
    filter: opacity(0);

    &::after {
      background-color: var(--primary-red);
      bottom: -0.6rem;
      right: -0.6rem;
    }

    &:deep(a) {
      width: 100%;
      padding-block: 2rem;
      text-align: center;
      font-size: var(--header-lg);
    }
  }

  .author {
    grid-row: 4 / 5;
    grid-column: 3 / 6;

    display: grid;
    justify-content: end;
    align-items: center;
    background-color: var(--primary-yellow);
    padding: 1rem;
    border-radius: var(--radius-sm);
    border-top-left-radius: var(--radius-md);
    border-bottom-left-radius: var(--radius-md);

    animation-name: slidefromright;
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
    animation-delay: 1.6s;
    filter: opacity(0);

    p {
      font-size: var(--header-lg);
    }
  }

}

@media screen and (max-width: 767px) {
  section {
    grid-template-columns: 1fr;
    overflow-x: unset;

    * {
      grid-column: unset !important;
      grid-row: unset !important;
    }

    header {
      h1 {
       margin-bottom: 0rem !important;
      } 
    }

    .text {
      position: relative;
      left: -1rem;
      padding-right: 1rem;
      border-radius: 0rem;
      border-bottom-right-radius: var(--radius-md);
      border-top-right-radius: var(--radius-sm);
    }

    .logo-container.hero {
      position: relative;
      right: -1rem;
      grid-row: 2 / 3 !important;

      picture {
        border-top-right-radius: 0rem;
        border-bottom-right-radius: 0rem;
        border-bottom-left-radius: var(--radius-md);
      }

      &:deep(img) {
        min-height: unset !important;
        max-height: 14rem;
      }
    }

    .cta-button {
      grid-row: 5 / 6 !important;
    }

    .author {
      position: relative;
      right: -1rem;
      border-top-right-radius: 0rem;
      border-bottom-right-radius: 0rem;
    }
  }
}

</style>