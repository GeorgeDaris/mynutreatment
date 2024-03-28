<template>
  <!-- <TestComp /> -->
  <SiteHeader />
  <NuxtPage />
</template>
<script setup lang="ts">
useSeoMeta({
  themeColor: "#C6DBC3"
})
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(2rem) rotateZ(1deg);
  filter: blur(1rem);
}
</style>