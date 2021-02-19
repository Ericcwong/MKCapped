export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'mkcapped',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel:"stylesheet",
        href:"https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "~/assets/style.css"
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // 'nuxtjs-darkmode-js-module',
    [
      "@nuxtjs/firebase",
      {
        config:{
          apiKey: "AIzaSyCTLXqFwCneCXT_e-h2tJV86Vu9TDRIDFo",
          authDomain: "mkcapped.firebaseapp.com",
          projectId: "mkcapped",
          storageBucket: "mkcapped.appspot.com",
          messagingSenderId: "1043404648742",
          appId: "1:1043404648742:web:fe754ad6a763ac813811e7",
          measurementId: "G-7PT45T2R3P"
        },
        services:{
          auth: true,
          firestore: {
            enablePersistence: true
          },
          storage: true
        }
      }
    ]
  ],
  // firebase: {
  //   // ...
  //   services: {
  //     auth: {
  //       ssr: true
  //     }
  //     // ...
  //   }
  // },
  // pwa: {
  //   // disable the modules you don't need
  //   meta: false,
  //   icon: false,
  //   // if you omit a module key form configuration sensible defaults will be applied
  //   // manifest: false,

  //   workbox: {
  //     importScripts: [
  //       // ...
  //       '/firebase-auth-sw.js'
  //     ],
  //     // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
  //     // only set this true for testing and remember to always clear your browser cache in development
  //     dev: process.env.NODE_ENV === 'development',
  //   }
  // },
  // darkmodejs:{
  //   time: '1s',
  //   mixColor: '#fff',
  //   label: '🌓'
  // },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
