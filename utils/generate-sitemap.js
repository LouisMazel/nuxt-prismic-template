const Prismic = require('prismic-javascript')
const { prismicEndpoint } = require('../config')

module.exports = async () => {
  const api = await Prismic.getApi(prismicEndpoint)
  const { results } = await api.query('', { pageSize: 100, lang: '*' })

  const landingPages = results.filter(
    (p) => p.type === 'landing_page_marketing_pages'
  )
  const marketUrlsList = landingPages.map(({ lang, uid }) =>
    lang === 'fr-fr' ? `/${uid}` : `/${lang.substring(0, 2)}/${uid}`
  )

  const legalPages = results.filter((p) => p.type === 'content_page_legal_page')
  const legalUrlsList = legalPages.map(({ lang, uid }) =>
    lang === 'fr-fr' ? `/legal/${uid}` : `${lang.substring(0, 2)}/legal/${uid}`
  )

  return [...marketUrlsList, ...legalUrlsList]
}
