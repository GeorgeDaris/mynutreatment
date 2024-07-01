// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      'postcss-nested': {}
    }
  },
  modules: ['@nuxt/content', "@nuxt/image", "@hypernym/nuxt-gsap"],
  image: {
    // dir: 'assets/images',
    // provider: 'IPX',
    format: ['avif', 'webp', 'png']
  },
  // "@hypernym/nuxt-gsap"
  gsap: {
    composables: true,
    extraPlugins: {
      scrollTrigger: true,
      scrollTo: true
    }
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
  },
  runtimeConfig: {
    MAILHOST: process.env.MAILHOST,
    MAILPORT: process.env.MAILPORT,
    MAILUSER: process.env.MAILUSER,
    MAILPASSWORD: process.env.MAILPASSWORD,
    CONTACTMAIL: process.env.CONTACTMAIL,
  }
})