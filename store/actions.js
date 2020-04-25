export default {
  async nuxtServerInit({ commit }, { $prismic, error, app }) {
    try {
      const currentLocale = (locale = app.i18n.locale) =>
        locale === 'en' ? 'en-us' : 'fr-fr'
      const legalMenu = (
        await $prismic.api.getSingle('menu_subfooter', {
          lang: currentLocale()
        })
      ).data
      const headerMenu = (
        await $prismic.api.getSingle('menu_header', {
          lang: currentLocale()
        })
      ).data
      const footerMenu = (
        await $prismic.api.getSingle('menu_footer', {
          lang: currentLocale()
        })
      ).data
      commit('SET_HEADER_MENU', headerMenu)
      commit('SET_FOOTER_MENU', footerMenu)
      commit('SET_LEGAL_MENU', legalMenu)
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  pushMarketingContentIfNotExist({ state, commit, dispatch }, payload) {
    if (state.marketingContents.some((c) => c.name === payload.name)) return
    commit('PUSH_MARKETING_CONTENT', payload)
  },
  pushLandingContentIfNotExist({ commit, state, dispatch }, payload) {
    if (state.landingContents.some((c) => c.name === payload.name)) return
    commit('PUSH_LANDING_CONTENT', payload)
  }
}
