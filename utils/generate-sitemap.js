const Prismic = require('prismic-javascript')
const { prismicEndpoint } = require('../config')

module.exports = async () => {
  const api = await Prismic.getApi(prismicEndpoint)
  const { results } = await api.query('', { pageSize: 100 })

  const landingPages = results.filter((p) => p.type === 'landing_pages')
  const marketUrlsList = landingPages.map(({ uid }) => `/${uid}`)

  const contentPages = results.filter((p) => p.type === 'contents')
  const contentUrlsList = contentPages.map(({ uid }) => `/contents/${uid}`)

  return [...marketUrlsList, ...contentUrlsList]
}
