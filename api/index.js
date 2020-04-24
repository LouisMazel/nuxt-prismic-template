const cors = require('cors')
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS
const { Nuxt, Builder } = require('nuxt')
const express = require('express')
const consola = require('consola')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const nuxtConfig = require('./../nuxt.config.js')
const routes = require('./routes')
const { siteUrl, serverPort, apiPath } = require('./../config')

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development'
const port = process.env.PORT || serverPort
const isProd = process.env.NODE_ENV === 'production'

const app = express()

const start = async () => {
  if (isProd) {
    app.use((req, res, next) => {
      // const host = req.get('Host')
      // if (host === 'whitebird-immo.herokuapp.com') return res.redirect(301, `https://www.whitebird.immo${req.originalUrl}`)
      return next()
    })
    app.use(redirectToHTTPS([/localhost:(\d{4})/], [], 301))
  }

  app.use(bodyParser.json())
  app.use(cookieParser())

  const originWhiteList = [siteUrl[env]]
  const corsOptions = {
    credentials: true,
    exposedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'csrf-token'
    ]
  }

  app.use(
    cors({
      ...corsOptions
    })
  )

  app.all('*', (req, res, next) => {
    const origin = originWhiteList.includes(req.headers.origin)
      ? req.headers.origin
      : originWhiteList[0]
    res.header('Access-Control-Allow-Origin', origin)
    next()
  })

  nuxtConfig.dev = !isProd
  // Init Nuxt.js
  const nuxt = new Nuxt(nuxtConfig)
  const { host } = nuxt.options.server

  await nuxt.ready()

  // Build only in dev mode
  if (nuxtConfig.dev) {
    const builder = new Builder(nuxt)
    builder.build()
  }
  app.use(apiPath, routes)
  app.use(nuxt.render)
  app.listen(port, () => {
    consola.ready({
      message: `Server listening on http://${host}:${port}`,
      badge: true
    })
  })
}

start()
