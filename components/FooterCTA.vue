<template>
  <section>
    <NuxtPicture :src="footer.image" :alt="footer.alt" width="550" height="450" sizes="sm:800" placeholder fit="cover" loading="lazy" />
    <div class="text">
      <h2>
        {{ footer.description }}
      </h2>
      <MainButton size="large" class="btn">
        <NuxtLink to="/contact">Κλείστε ραντεβού</NuxtLink>
      </MainButton>
    </div>
  </section>
</template>

<script lang="ts" setup>
const footer = await queryContent('main/footercta').findOne();
</script>

<style scoped>
section {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  padding: 1rem;
  margin-top: 6rem;
}

picture {
  /* width: 100%; */
  justify-self: end;
  margin-right: -2rem;
  transform: translateX(2rem);

  &:deep(img) {
    object-fit: cover;
  }
}

.text {
  display: grid;
  gap: 2rem;
  max-width: 35rem;
}

h2 {
  /* text-align: justify; */
  font-size: var(--header-xl);
  font-weight: 600;
  color: var(--white);
  letter-spacing: .2rem;
  -webkit-text-stroke: .12rem var(--dark-blue);
}

.btn {
  justify-self: end;
  margin-right: 3rem
}

@media screen and (max-width: 767px) {
  section {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  picture {
    justify-self: center;
    margin-right: 0rem;
    /* order: 2; */
  }
}

</style>