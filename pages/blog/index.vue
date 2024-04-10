<template>
  <div>
    <BlogPostShowcase />
    <BlogPostReadMore />
  </div>
</template>
<script setup>
useSeoMeta({
  ogUrl: 'https://www.mynutreatment.gr/blog',
  title: 'mynutreatment Blog',
  ogTitle: 'mynutreatment Blog',
  description: 'Εδώ θα βρείτε άρθρα lorem ipsum',
  ogDescription: 'Εδώ θα βρείτε άρθρα lorem ipsum',
  ogImage: 'https://mynutreatment.vercel.app/favicon.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'mynutreatment Blog',
  twitterDescription: 'Εδώ θα βρείτε άρθρα lorem ipsum',
  twitterImage: 'https://mynutreatment.vercel.app/favicon.png'
})
</script>