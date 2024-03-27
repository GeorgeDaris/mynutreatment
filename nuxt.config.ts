// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      'postcss-nested': {}
    }
  },
  modules: [
    '@nuxt/content'
  ],
  // content: {
    
  // }
  app: {
    head: {
      meta: [
        {name: "theme_color", content: "#C6DBC3"}
      ],
      link: [
        { rel: "icon", type: "image/ico", href: "/favicon.png" }
      ]
    }
  }
})
