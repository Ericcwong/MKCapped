export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "mkcapped",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap",
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~/assets/style.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["~/plugins/firebase.js", "~/plugins/firebaseAuth.js", '~/plugins/persistedState.client.js' ],
  // Router
  router:{
    // middleware: ["router-guard"]
  },
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxtjs/vuetify"],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",

  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true
  },
  // publicRuntimeConfig:{
  //   test1: "public",
  //   test2: "public"
  // },
  // privateRuntimeConfig:{
  //   test2: "private"
  // }
}
