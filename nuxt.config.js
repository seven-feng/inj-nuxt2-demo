import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - galxe-demo',
    title: 'galxe-demo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],



  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend: (config) => {
      config.resolve.alias['@ledgerhq/cryptoassets'] =
        '@ledgerhq/cryptoassets/lib';
      config.resolve.alias['@ledgerhq/devices'] = '@ledgerhq/devices/lib';
      config.resolve.alias['@ledgerhq/domain-service'] =
        '@ledgerhq/domain-service/lib';
    },
    transpile: [
      ({ isClient }) => isClient && '@injectivelabs',
      ({ isClient }) => isClient && '@ledgerhq',
      ({ isClient }) => isClient && '@ethereumjs',
      ({ isClient }) => isClient && '@solana',
      ({ isClient }) => isClient && '@toruslabs',
      ({ isClient }) => isClient && '@metamask',
      ({ isClient }) => isClient && '@walletconnect',
      ({ isClient }) => isClient && 'unstorage',
      ({ isClient }) => isClient && '@jnwng',
      ({ isClient }) => isClient && 'micro-ftch',
      ({ isClient }) => isClient && 'ethereum-cryptography',
      ({ isClient }) => isClient && '@noble',
      ({ isClient }) => isClient && '@cosmjs',
      ({ isClient }) => isClient && 'cosmjs-types',
      ],
  }
}
