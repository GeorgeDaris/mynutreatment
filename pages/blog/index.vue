<template>
    <div>
      <BlogPostShowcase />
      <section>
        <header>
          <h2 class="remove-pseudo">Διαβάστε περισσότερα</h2>
        </header>
        <ul class="post-container">
          <li v-for="post in posts" :id="post.title">
            <BlogPostCard :post="post"/>
            <!-- {{ post }} -->
          </li>
        </ul>
      </section>
    </div>
  </template>
  
  <script lang="ts"setup>
  const posts = await queryContent('blog').skip(4).find();
  </script>
  
  <style scoped>

  h2 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }

  .post-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    /* justify-content: space-evenly; */
    align-content: space-evenly;
    list-style-type: none;
    padding-left: 0;

    li {
      display: flex;
      /* flex-shrink: 1; */
    }
  }
  </style>