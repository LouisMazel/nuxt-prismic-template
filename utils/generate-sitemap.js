const Prismic = require('prismic-javascript')
const { prismicEndpoint } = require('../config')

module.exports = async () => {
  const api = await Prismic.getApi(prismicEndpoint)
  const { results } = await api.query('', { pageSize: 100, lang: '*' })

  const landingPages = results.filter(
    (p) => p.type === 'landing_pages'
  )
  const marketUrlsList = landingPages.map(({ lang, uid }) =>
    lang === 'fr-fr' ? `/${uid}` : `/${lang.substring(0, 2)}/${uid}`
  )

  const contentPages = results.filter((p) => p.type === 'contents')
  const contentUrlsList = contentPages.map(({ lang, uid }) =>
    lang === 'fr-fr' ? `/contents/${uid}` : `${lang.substring(0, 2)}/contents/${uid}`
  )

  return [...marketUrlsList, ...contentUrlsList]
}
