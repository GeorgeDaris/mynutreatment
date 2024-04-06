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
  }
}>()

</script>
<template>
  <article class="blog-card">
      <img :src="post.image" :alt="post.alt" loading="lazy">
      <div class="content">
        <h3>{{ post.title }}</h3>
        <p>{{ post.description }}</p>
        <MainButton size="small">
          <NuxtLink :to="post._path">Περισσότερα</NuxtLink>
        </MainButton>
      </div>
  </article>
</template>


<style scoped>
.blog-card {
  display: grid;
  grid-template-rows: 12rem auto;
  border-radius: var(--radius-sm);
  border: var(--card-border);
  overflow: hidden;
  max-width: 25rem;

  img {
    height: 100%;
    width: 100%;
    /* max-height: 15rem; */
    object-fit: cover;
    object-position: center;
  }

  h3 {
    font-size: var(--header-md);

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
      mask-image: linear-gradient(to bottom right, red 70%, transparent);

      /* for alignment when alongside other cards with different heights */
      margin-block: auto;
    }

    &:deep(.button) {
      margin-left: auto;
      margin-top: auto;
    }
  }
}

</style>