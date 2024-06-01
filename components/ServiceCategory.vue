<template>
  <div class="service-wrapper">
        <h3>{{ category.title }}</h3>
        <div class="service-container">
          <template v-for="file in contentFiles">
            <ServiceCard :service="file" />
            <!-- {{ file.title }} -->
          </template>
          <!-- {{ category }} {{ category._path }} {{ contentFiles }} -->
        </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  category: {
    type: Object,
    required: true,

    title: string,
    _path: string
  }
}>()

// let files; 

const contentFiles = await queryContent(`${props.category._path}`)
    .where({category: {$exists: false}})
    .find();

// files = contentFiles.map(file => ({
//     title: file.title,
//     icon: file.icon,
//     content: file.body
//   }));

//     .where({ _path: { $ne: `${props.category.path}/index.md` } })
//     .find();


// let files = ref();

//   const contentFiles = await queryContent(`${props.category.path}`)
//     .where({ _path: { $ne: `${props.category.path}/index.md` } })
//     .find();
  
//   files.value = contentFiles.map(file => ({
//     title: file.title,
//     icon: file.icon,
//     content: file.body
//   }));
</script>

<style scoped>
.service-wrapper {
  display: grid;
  gap: 2rem;
}

.service-container {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(20rem, 1fr));
  justify-items: center;
  align-content: start;
  gap: 5rem 3rem;
  margin-top: 3rem;

  &:has(.service-card:only-child) {
    justify-items: start;
  }

  /* &:last-of-type {
    margin-bottom: 2rem;
  } */

  .service-card {
    &:nth-of-type(even) {
      .icon-wrapper {
        background-color: var(--primary-yellow);
      }
    }
  }
}

.service-container:deep(:nth-of-type(even)) {
  .icon-wrapper {
    background-color: var(--primary-yellow);
  }
}

.service-container:deep(:nth-of-type(3)) {
  .icon-wrapper {
    background-color: var(--primary-blue);
  }
}

.service-container:deep(:nth-of-type(4)) {
  .icon-wrapper {
    background-color: var(--primary-red);
  }
}
</style>