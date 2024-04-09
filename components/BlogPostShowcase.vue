<template>
  <div class="blog-showcase">
    <header>
      <h1>Blog</h1>
    </header>
      <template v-for="post in posts" :id="post.title">
        <BlogPostCard :post="post" :hide-button="true" class="sh-card"/>
      </template>
  </div>
</template>

<script setup>
  const posts = await queryContent('blog').limit(4).find();
</script>

<style>
.blog-showcase {
  --gap: 1rem;

  display: grid;
  gap: var(--gap);
  grid-template-rows: repeat(4, 25%);
  grid-template-rows: repeat(5, 0.5fr);
  grid-template-rows: calc(12rem - var(--gap)) repeat(4, 12rem);
  grid-template-rows: calc(12rem - var(--gap)) repeat(4, min-content);
  grid-template-columns: repeat(4, 1fr);

  header {
    grid-column: 3/5;
    grid-row: 1 / 2;
    display: grid;
    align-content: center;

    h1 {
      margin-left: 1rem;
    }
  }

  .sh-card {
    max-width: unset;

    .content {
      grid-template-rows: min-content;
    }
  }

  .sh-card:nth-of-type(1) {
    grid-column: 1 / 3;
    grid-row: 1 / 4;

    border-bottom-right-radius: calc(var(--radius-md) - var(--radius-sm));

    p {
      margin-block: unset;
      max-height: unset;

      border-bottom-right-radius: calc(var(--radius-sm) + 1rem);
    }
  }

  .sh-card:nth-of-type(2) {
    grid-column: 3 / 5;
    grid-row: 2 / 4;

    grid-template-rows: unset;
    grid-template-columns: 1fr 1fr;
    gap: var(--gap);

    border-top-right-radius: var(--radius-60);

    .content {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
    }

    img {
      grid-row: 1 / 3;
    }

    p {
      margin-block: unset;
      max-height: unset;
    }
  }

  .sh-card:nth-of-type(3) {
    grid-column: 1 / 4;
    grid-row: 4 / 6;

    grid-template-rows: unset;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--gap);
    /* max-height: 70%; */

    .content {
      grid-column: 1 / 3;
      grid-row: 1 / 3;
    }

    img {
      grid-row: 1 / 3;
    }

    p {
      margin-block: unset;
      max-height: unset;
    }
  }

  .sh-card:nth-of-type(4) {
    grid-column: 4 / 5;
    grid-row: 4 / 6;

    display: block;
    position: relative;
    border-bottom-right-radius: var(--radius-60);

    img {
      max-height: 60%;
      max-width: 60%;
      position: absolute;
      border-top-left-radius: 50rem;
      bottom: 0;
      right: 0;

      /* max-height: 5rem; */
    }

    p {
      display: none;
    }
  }
}

</style>