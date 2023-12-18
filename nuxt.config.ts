// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    "~/assets/css/normalize.css",
    "~/assets/css/main.css",
    "~/assets/css/media.css",
  ],
  ssr: false,
  app: {
    rootTag: "body",
    head: {
      title: "UCFTI",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.6.0/css/glide.core.min.css",
        },
        {
          rel: "shortcut icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/@glidejs/glide",
        },
      ],
    },
  },
});
