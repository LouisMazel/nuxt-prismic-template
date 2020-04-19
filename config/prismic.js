const config = require('./index')

module.exports = {
  endpoint: `https://${config.primsicRepo}.cdn.prismic.io/api/v2`,
  linkResolver: '@/plugins/link-resolver',
  htmlSerializer: '@/plugins/html-serializer'
}
