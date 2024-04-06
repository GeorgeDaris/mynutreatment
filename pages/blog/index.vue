<template>
    <div>
      bloggg

      <section>
        <header>
          <h2>Read more</h2>
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
  }
  </style>