// SEE: https://ja.nuxtjs.org/faq/github-pages/
const routerBase = process.env.BASE_DIR
  ? {
      router: {
        base: process.env.BASE_DIR,
      },
    }
  : {}

export default {
  env: {},
  head: {
    title: "nuxt-type-script-starter",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js TypeScript project" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: `${process.env.BASE_DIR || '/'}favicon.ico` }
    ]
  },
  loading: { color: "#3B8070" },
  css: ["~/assets/css/main.css"],
  build: {},
  buildModules: ["@nuxt/typescript-build"],
  modules: [
    "@nuxtjs/axios",
  ],
  axios: {},
  generate: {
    fallback: true, // '404.html' を使用したい場合
    dir: 'public',
  },
  ...routerBase,
}
