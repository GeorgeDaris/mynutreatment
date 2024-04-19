// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      'postcss-nested': {}
    }
  },
  modules: ['@nuxt/content', "@nuxt/image"],
  image: {
    // dir: 'assets/images',
    format: ['avif', 'webp', 'png']
  },
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
    },
    pageTransition: { name: 'page', mode: 'out-in' }
    
  },
  experimental: {
    defaults: {
      nuxtLink: {
        activeClass: 'router-link-active'
      }
    }
  }
})