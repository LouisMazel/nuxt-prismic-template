export default {
  SET_SUBFOOTER_MENU(state, payload) {
    state.subfooterMenu = payload
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
