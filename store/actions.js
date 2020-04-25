export default {
  async nuxtServerInit({ commit }, { $prismic, error }) {
    try {
      const subfooterMenu = (await $prismic.api.getSingle('menu_subfooter'))
        .data
      const headerMenu = (await $prismic.api.getSingle('menu_header')).data
      const footerMenu = (await $prismic.api.getSingle('menu_footer')).data
      commit('SET_HEADER_MENU', headerMenu)
      commit('SET_FOOTER_MENU', footerMenu)
      commit('SET_SUBFOOTER_MENU', subfooterMenu)
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  pushMarketingContentIfNotExist({ state, commit }, payload) {
    if (state.marketingContents.some((c) => c.name === payload.name)) return
    commit('PUSH_MARKETING_CONTENT', payload)
  },
  pushLandingContentIfNotExist({ commit, state }, payload) {
    if (state.landingContents.some((c) => c.name === payload.name)) return
    commit('PUSH_LANDING_CONTENT', payload)
  }
}
