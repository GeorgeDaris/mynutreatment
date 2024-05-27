<template>
  <article>
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
  max-width: 70vw; 
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