<template>
  <section>
    <div class="main-info">
      <h2 class="h1-size">Υπηρεσίες</h2>
      <p>Η υγιεινή διατροφή μπορεί να ωφελήσει μικρούς και μεγάλους, υγιή άτομα καθώς και άτομα με ιατρικές παθήσεις. Όποιος κι αν είναι ο λόγος που βρίσκεστε εδώ, έχετε κάνει ήδη το πρώτο βήμα για αλλαγή.</p>
    </div>
    <div>
      <template v-for="service in services" id="service.title">
        <LandingServiceCard :service="service" />
      </template>
    </div>
  </section>
</template>

<script setup>
const services = await queryContent('main/landing-page/services').find();

</script>

<style scoped>
section {
  display: grid;
  gap: 2rem;
  width: 100%;
}

.main-info {
  display: grid;
  gap: 2rem;

  p {
    position: relative;
    /* text-align: right; */
    justify-self: end;
    max-width: 30rem;
    padding-right: 2rem;
    display: grid;
    align-content: center;
    justify-items: end;
    /* z-index: 3; */

    &::after {
      content: "";
      position: absolute;
      top: -1.5rem;
      padding-block: 5rem;
      display: block;
      width: 20rem;
      height: 100%;
      /* padding-block: 2rem; */
      background-color: var(--off-red);
      border-radius: var(--radius-sm);
      border-top-left-radius: var(--radius-lg);
      border-bottom-left-radius: var(--radius-lg);
      z-index: -1;

    }
  }
}
</style>