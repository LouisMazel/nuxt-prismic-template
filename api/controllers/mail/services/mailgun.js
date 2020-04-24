const mailgun = require('mailgun-js')
const { emailing } = require('./../../../../config')

module.exports = (data) => {
  return new Promise((resolve, reject) => {
    const mg = mailgun({
      apiKey: emailing.mailgun.apiKey,
      domain: emailing.mailgun.domain
    })
    mg.messages().send(data, (error, body) => {
      if (error) return reject(error)
      resolve(body)
    })
  })
}
