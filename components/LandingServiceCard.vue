<template>
  <article>
    <NuxtPicture :src="service.image" :alt="service.alt" width="440" height="480" sizes="sm:800" placeholder fit="cover" loading="lazy" />

    <div class="content">
      <header>
        <h3>{{ service.title }}</h3>
      </header>
      <p class="truncated-text">{{ service.description }}</p>
      <MainButton class="link">
        <NuxtLink to="">Μάθετε περισσότερα</NuxtLink>
      </MainButton>
    </div>
  </article>
</template>

<script lang="ts" setup>
const props = defineProps<{
  service: {
    type: Object,
    required: true,

    title: string,
    description: string,
    image: string,
    alt: string
  }
}>()
</script>

<style scoped>
article {
  display: grid;
  grid-template-columns: 1fr .2fr 2fr;
  grid-template-rows: 5rem min-content;
  margin-block: 4rem;

  &:nth-of-type(even) {

    picture {
      &::after {
        background-color: var(--primary-yellow);
      }
    }
  } 
}

picture {
  grid-row: 1 / 3;
  grid-column: 1 / 3;
  position: relative;
  z-index: 3;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 3rem;
    right: -10rem;
    background-color: var(--primary-red);
    width: 100%;
    height: 50%;
    border-top-right-radius: var(--radius-sm);
    border-bottom-right-radius: var(--radius-lg);
    z-index: -2;
  }

  &:deep(img) {
    border-radius: var(--radius-sm);
    border-top-left-radius: var(--radius-md);
    border-bottom-right-radius: var(--radius-lg);
    object-fit: cover;
  }
}

.content {
  grid-row: 2 / 3;
  grid-column: 2 / 4;
  background-color: var(--pure-white);
  border: var(--card-border);
  border-radius: var(--radius-sm);
  padding: 1rem;
  padding-left: 6rem;
  padding-top: 3rem;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  display: grid;
  gap: 1rem;
}

.content {
  * {
    position: relative;
    z-index: 3;
  }
}

.link {
  justify-self: end;
}

@media screen and (max-width: 767px) {
  article {
    grid-template-rows: 10rem 2rem min-content;
    margin-block: 2rem;
  }
  
  .content {
    padding-left: 1rem;
    grid-column: 1 / 4;
    grid-row: 2 / 4;

  }

  picture {
    /* max-height: 10rem; */
    grid-column: 1 / 4;
    grid-row: 1 / 3;

    &::after {
      top: unset;
      bottom: -1rem;
      right: 1rem;
      width: 50%;
      border-bottom-left-radius: var(--radius-sm);
    }

    &:deep(img) {
      height: 100%;
      margin-inline: auto;
    } 
  }
}
</style>