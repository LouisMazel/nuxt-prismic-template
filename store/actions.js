export default {
  async nuxtServerInit({ commit }, { $prismic, error, app }) {
    try {
      const currentLocale = (locale = app.i18n.locale) =>
        locale === 'en' ? 'en-gb' : 'fr-fr'
      const legalPages = await $prismic.api.query(
        $prismic.predicates.at('document.type', 'content_page_legal_page'),
        { lang: currentLocale() }
      )
      commit('SET_LEGAL_PAGES', legalPages.results)
      const marketingPages = await $prismic.api.query(
        $prismic.predicates.at('document.type', 'landing_page_marketing_pages'),
        { lang: currentLocale() }
      )
      commit('SET_MARKETING_PAGES', marketingPages.results)
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
