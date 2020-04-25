export default {
  subfooterMenu: (state) =>
    state.subfooterMenu && state.subfooterMenu.menu_links,
  headerMenu: (state) => state.headerMenu && state.headerMenu.menu_links,
  footerMenu: (state) => state.footerMenu && state.footerMenu.menu_links,
  getMarketingContentBySlug: (state) => (slug) =>
    state.marketingContents.find((p) => p.slugs.find((s) => s === slug)),
  getLandingContentByType: (state) => (type) =>
    state.landingContents.find((p) => p.type === type),
}
