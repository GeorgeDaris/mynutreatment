<script lang="ts" setup>
const props = defineProps<{
  post: {
    type: Object,
    required: true,

    title: string,
    image: string,
    alt: string,
    author: string,
    authorImage: string,
    authorLink: string
  }
}>()

const url = computed(() => {
  return `url(${props.post.image})`
})
</script>

<template>
  <article class="blog-post">
      <header>
        <div class="img-wrapper">
          <img :src="post.image" :alt="post.alt">
        </div>
        <h1>{{ post.title }}</h1>
        <address>
          <img :src="post.authorImage" :alt="post.author">
          <a :href="post.authorLink">{{post.author}}</a>
        </address>

      </header>
        <div class="prose">
            <ContentRenderer :value="post" />
        </div>
    </article>
</template>


<style scoped>

/* create new component */
address {
  display: inline-flex;
  align-items: center;
  gap: .5rem;

  img {
    max-width: 2.5rem;
    max-height: 3rem;
  }

  a {
    text-decoration: none;
    font-style: normal;
    color: inherit;
  }
} 

article.blog-post {
    --bp-padding: 1rem;
    --bp-top-mg: calc(var(--bp-padding) * 2);

    max-width: 45rem;
    padding: var(--bp-padding);
    margin-top: var(--bp-top-mg);
    background-color: white;
    border-radius: var(--radius-sm);
    border-top-left-radius: var(--radius-md);
    border-top-right-radius: var(--radius-md);
    

    header {
        display: grid;
        position: relative;
        gap: 1.5rem;
        margin-top: calc(var(--bp-padding) - var(--bp-padding) * 4);
        margin-bottom: 1.5rem;
        /* transform: translateY(-2rem); */
        
        .img-wrapper {
          position: relative;
          filter: drop-shadow(0rem 0.25rem 0.5rem #00000071);


            &::before {
              content: "";
              position: absolute;
              bottom: -0.5rem;
              width: 100%;
              height: 100%;
              background-image: v-bind(url);
              background-position: center;
              background-size: cover;
              filter: blur(1.2rem);
              border-radius: calc(var(--radius-md) * 0.75);
              z-index: -1;

            }
            
            img {
                position: relative;
                max-height: 25rem;
                width: 100%;
                object-fit: cover;
                object-position: center;
                border-radius: var(--radius-sm);
                border-top-left-radius: calc(var(--radius-md) * 0.75);
                border-top-right-radius: calc(var(--radius-md) * 0.75);
                /* mask-image: linear-gradient(to top left, red 70%, transparent); */
                filter: drop-shadow(0rem 0.15rem 0.15rem #00000071);
                z-index: 2;
            }
        }

    }

    h1, address, .prose {
      margin-inline: 1rem;
    }
    
}
</style>