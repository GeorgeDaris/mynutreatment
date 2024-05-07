<script lang="ts" setup>
const props = defineProps<{
  post: {
    type: Object,
    required: true,

    title: string,
    description: string,
    image: string,
    alt: string
    _path: string
  },
  hideButton?: boolean
}>()

</script>
<template>
    <article class="blog-card">
        <!-- <img :src="post.image" :alt="post.alt" loading="lazy"> -->
        <NuxtPicture :src="post.image" :alt="post.alt" loading="lazy" width="600" sizes="sm:500"/>
        <div class="content">
          <h3>{{ post.title }}</h3>
          <p>{{ post.description }}</p>
          <MainButton size="small" v-if="!hideButton" class="post-link">
            <NuxtLink :to="post._path">Περισσότερα
            </NuxtLink>
          </MainButton>
        </div>
    </article>
</template>


<style scoped>
/* .post-link::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;

} */


.blog-card {
  display: grid;
  grid-template-rows: 12rem auto;
  border-radius: var(--radius-sm);
  border: var(--card-border);
  overflow: hidden;
  max-width: 25rem;
  background-color: var(--pure-white);

  &:deep(picture) {
    height: 100%;
    width: 100%;
  }

  &:deep(img) {
    height: 100%;
    width: 100%;
    /* max-height: 15rem; */
    object-fit: cover;
    object-position: center;
  }

  h3 {
    font-size: var(--header-md);
    font-weight: var(--header-md-weight);

    &::before {
      display: none;
    }
  }

  .content {
    padding: 1rem;
    display: grid;
    gap: 0.5rem;

    p {
      max-height: 5rem;
      overflow: clip;
      position: relative;
      /* mask-image: linear-gradient(to bottom right, red 70%, transparent); */

      /* for alignment when alongside other cards with different heights */
      margin-block: auto;

      /* truncated text effect */
      &::after {
        content: "";
        position: absolute;
        bottom: -0.2rem;
        right: 0;
        width: 100%;
        height: 1.6rem;
        background-image: linear-gradient(to right, transparent 20%, var(--pure-white));
        pointer-events: none;
      }
    }

    &:deep(.button) {
      margin-left: auto;
      margin-top: auto;
    }
  }
}

@media screen and (max-width: 767px) {
  .blog-card {
    max-width: unset;
  }
}

</style>