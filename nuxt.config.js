export default {
  server: {
    port: 8000,
    host: '0.0.0.0',
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  ssr: false,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'LittleTiles' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'LittleTiles Structures',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  pwa: {
    meta: {
      theme_color: '#000',
      name: 'LittleTiles Structures',
      short_name: 'LittleTiles',
      author: 'Team Creative',
      description: 'A place to share and download LittleTiles Structures',
    },
    manifest: {
      name: 'LittleTiles Structures',
      author: 'Team Creative',
      description: 'A place to share and download LittleTiles Structures',
      background_color: 'rgb(12,12,12)',
    },
  },
  /*
   ** Top loading bar
   */
  loading: {
    height: '3px',
    color: 'rgb(46, 145, 43)',
    failedColor: 'rgb(179, 63, 28)',
    throttle: 0,
  },
  /*
   ** Global CSS
   */
  css: ['~assets/scss/_reset.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/nbt-lint.js'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/moment',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxt/content',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas'],
          },
        ],
      },
    ],
  ],
  router: {
    middleware: ['auth'],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'https://api.littletiles.net/1.0',
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/auth/user',
            method: 'post',
            propertyName: 'data.weak.token',
          },
          user: {
            url: '/auth/user',
            method: 'get',
            propertyName: 'data',
          },
          logout: false,
        },
      },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  styleResources: {
    scss: ['./assets/scss/_variables.scss'],
  },
}
