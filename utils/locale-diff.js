const path = require('path')
const fs = require('fs')
const keysDiff = require('keys-diff')
const flatten = require('array-flatten')

const { supportedLocales, supportedFiles } = require('../locales')

const translationsDir = path.resolve(__dirname, '../locales/translations')

supportedFiles.forEach((dir) => {
  const source = path.join(translationsDir, dir, 'fr.json')
  if (!fs.existsSync(source)) {
    throw new Error(`The source file "${source}" does not exists.`)
  }
  const sourceContent = JSON.parse(fs.readFileSync(source, 'utf-8'))

  supportedLocales.forEach(({ code }) => {
    const src = path.join(translationsDir, dir, `${code}.json`)
    if (!fs.existsSync(src)) {
      throw new Error(`The translation file "${src}" does not exists.`)
    }

    const content = JSON.parse(fs.readFileSync(src, 'utf-8'))
    const diff = keysDiff(sourceContent, content)
    if (diff[0].length > 0 || diff[1].length > 0) {
      const diffs = flatten.depth(diff, 5)
      throw new Error(
        `Some keys are missing or differences where found in ${src}: \n\n${diffs.join(
          '\n'
        )}\n`
      )
    }

    /**
     * Checks for empty string in each key
     */
    const emptyKeys = Object.keys(content).filter(
      (key) => content[key].length === 0
    )
    if (emptyKeys.length > 0) {
      throw new Error(
        `Some translation keys are empty for the "${code}" locale. \nEmpty keys are:\n${emptyKeys.join(
          '\n'
        )}`
      )
    }
  })
})
