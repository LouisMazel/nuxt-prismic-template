export default {
  SET_LEGAL_MENU(state, payload) {
    state.legalMenu = payload
  },
  SET_HEADER_MENU(state, payload) {
    state.headerMenu = payload
  },
  SET_FOOTER_MENU(state, payload) {
    state.footerMenu = payload
  },
  PUSH_MARKETING_CONTENT(state, payload) {
    state.marketingContents.push(payload)
  },
  PUSH_LANDING_CONTENT(state, payload) {
    state.landingContents.push(payload)
  }
}
