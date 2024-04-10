<template>
  <div class="blog-showcase">
    <header>
      <h1>Blog</h1>
    </header>
      <template v-for="post in posts" :id="post.title">
        <BlogPostCard :post="post" :hide-button="true" class="sh-card" tabindex="0" @click="$router.push(post._path)" :aria-label="post.title" />
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
  overflow-x: clip;

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
    /* TODO: Remove this and fix CSS specificity */
    max-width: unset !important;
    cursor: pointer;
    transition: all 0.3s ease, box-shadow 0.4s 0.1s ease;
    filter: opacity(0);

  
    &:hover {
      transform: scale(1.015);
      box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    }

    &:focus {
      outline: 0.11rem solid var(--primary-green);
    }

    .content {
      grid-template-rows: min-content;
    }
  }

  .sh-card:nth-of-type(1) {
    grid-column: 1 / 3;
    grid-row: 1 / 4;

    border-bottom-right-radius: calc(var(--radius-md) - var(--radius-sm));

    animation-name: slidefromtop;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
    animation-delay: 0.1s;

    p {
      margin-block: unset;
      max-height: 9.7rem !important;

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

    animation-name: slidefromright;
    animation-duration: 0.4s;
    animation-delay: 0.4s;
    animation-fill-mode: forwards;

    .content {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
    }

    img {
      grid-row: 1 / 3;
    }

    p {
      margin-block: unset;
      max-height: 9.7rem !important;
    }
  }

  .sh-card:nth-of-type(3) {
    grid-column: 1 / 4;
    grid-row: 4 / 6;

    grid-template-rows: unset;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--gap);
    /* max-height: 70%; */

    animation-name: slidefromleft;
    animation-duration: 0.4s;
    animation-delay: 0.6s;
    animation-fill-mode: forwards;

    .content {
      grid-column: 1 / 3;
      grid-row: 1 / 3;
    }

    img {
      grid-row: 1 / 3;
    }

    p {
      margin-block: unset;
      max-height: 9.7rem !important;
    }
  }

  .sh-card:nth-of-type(4) {
    grid-column: 4 / 5;
    grid-row: 4 / 6;

    display: block;
    position: relative;
    border-bottom-right-radius: var(--radius-60);

    animation-name: slidefrombottom;
    animation-duration: 0.4s;
    animation-delay: 1s;
    animation-fill-mode: forwards;


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

@media screen and (max-width: 767px) {
    .blog-showcase {
        display: flex;
        flex-direction: column;

        .sh-card:nth-of-type(2) {
          border-top-right-radius: var(--radius-sm);
        }

        .sh-card:nth-of-type(3) {
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;

          .content {
            grid-column: 1 / 2;

            p {
              /* width: 187%;
              background-color: var(--white); */
            }
          }

          img {
            /* grid-row: 1 / 2; */
            /* max-height: 75%; */
          }
        }

        .sh-card:nth-of-type(4) {
          display: grid;
          grid-template-rows: auto 10rem;

          img {
            max-width: unset;
            max-height: unset;
            /* width: 100%;
            height: 100%; */
            position: unset;
            border-radius: unset;
            grid-row: 2 / 3;
          }
        }
    }
}
</style>