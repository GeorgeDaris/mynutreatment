<template>
    <div>
      bloggg

      <section>
        <header>
          <h2>Διαβάστε περισσότερα</h2>
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
  
  <script setup>
  const posts = await queryContent('blog').find();
  </script>
  
  <style scoped>
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