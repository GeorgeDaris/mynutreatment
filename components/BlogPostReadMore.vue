<template>
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
</template>

<script lang="ts" setup>
 const posts = await queryContent('blog').skip(4).find();
</script>

<style scoped>

header {
  margin-top: 5rem;
  margin-bottom: 2rem;
}

h2 {
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

    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(20rem, 1fr));
    justify-items: center;

    li {
      display: flex;
      /* flex-shrink: 1; */
    }
  }
</style>