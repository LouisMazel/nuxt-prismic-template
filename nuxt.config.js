// const meta = require('./config/meta')
const config = require('./config')
const link = require('./config/link')
const prismic = require('./config/prismic')

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development'
const siteUrl = config.siteUrl[env]
const { supportedLocales, messages, defaultLocale } = require('./locales')

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: '%PROJECT_NAME% - Expert',
    titleTemplate: '%s | %PROJECT_NAME%',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/filters', '~/plugins/maz-ui', '~/plugins/vue-lazyload'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://www.npmjs.com/package/@nuxtjs/moment
    '@nuxtjs/moment'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-material-design-icons',
    'vue-wait/nuxt',
    // ['@nuxtjs/google-analytics', {
    //   id: 'UA-XXXXXX-X',
    //   dev: true
    // }],
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'vue-scrollto/nuxt',
    [
      'nuxt-i18n',
      {
        locales: supportedLocales,
        baseUrl: siteUrl,
        defaultLocale,
        vueI18n: {
          fallbackLocale: defaultLocale,
          messages
        }
      }
    ],
    '@/modules/static',
    '@/modules/crawler',
    '@nuxtjs/prismic'
  ],
  moment: {
    defaultLocale: 'en',
    locales: ['fr']
  },
  prismic,
  styleResources: {
    scss: [
      '~/assets/scss/_vars.scss',
      'maz-ui/lib/scss/style-helpers/variables/index.scss'
    ]
  },
  robots: [
    {
      Sitemap: `/sitemap.xml`
    }
  ],
  sitemap: {
    hostname: siteUrl,
    gzip: true,
    path: '/sitemap.xml'
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    'postcss-cssnext': {
      browsers: ['last 2 versions', 'ie >= 9']
    },
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'maz-ui',
            style: false
          }
        ]
      ]
    },
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
