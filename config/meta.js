const config = require('./index.js')

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development'
const isProd = env === 'production'

const siteUrl = config.siteUrl[process.env.NODE_ENV]

module.exports = [
  { charset: 'utf-8' },
  {
    name: 'viewport',
    content:
      'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
  },
  {
    hid: 'robots',
    name: 'robots',
    content: isProd ? 'index, follow' : 'noindex, nofollow'
  },
  { name: 'msapplication-TileColor', content: '#ffffff' },
  {
    name: 'msapplication-TileImage',
    content: `${siteUrl}/img/social-network-picture.jpg`
  },
  { name: 'theme-color', content: '#ffffff' },
  { property: 'og:site_name', content: 'White bird' },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:image',
    content: `${siteUrl}/img/social-network-picture.jpg`
  },
  { name: 'twitter:card', content: 'summary' },
  { name: 'twitter:creator', content: '@mazeel' },
  {
    name: 'twitter:image:src',
    content: `${siteUrl}/img/social-network-picture.jpg`
  },
  { itemprop: 'image', content: `${siteUrl}/img/social-network-picture.jpg` }
]
