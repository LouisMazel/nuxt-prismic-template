/**
 * Exposes a locale list for the app and the tests.
 * This list is the source of truth for the supported locales.
 * @constant supportedLocales
 */

const { defaultLocale } = require('./../config')

const supportedLocales = [
  {
    code: 'fr',
    name: 'Français',
    iso: 'fr-fr'
  },
  {
    code: 'en',
    name: 'English',
    iso: 'en-us'
  }
]

/**
 * Exposes a list of supported files for each locale.
 * This list is the source of truth for the supported files.
 * @constant supportedFiles
 */
const supportedFiles = ['app', 'meta', 'validator']

const jsonConcat = (o1, o2) => {
  for (const key in o2) {
    o1[key] = o2[key]
  }
  return o1
}

const messages = {}

supportedLocales.forEach(({ code }) => {
  const translations = {}
  supportedFiles.forEach((file) => {
    messages[code] = jsonConcat(
      translations,
      require('./translations/' + file + '/' + code + '.json')
    )
  })
})

module.exports = {
  supportedLocales,
  supportedFiles,
  messages,
  defaultLocale
}
