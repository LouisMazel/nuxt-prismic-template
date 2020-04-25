const fs = require('fs')
const path = require('path')
const handlebars = require('handlebars')

const mailgun = require('./services/mailgun')
const sendinblue = require('./services/sendinblue')

const { company, emailing, siteUrl } = require('./../../../config')

const extractHostname = (url) => {
  let hostname = url.includes('//') ? url.split('/')[2] : url.split('/')[0]
  hostname = hostname.split(':')[0]
  return hostname
}
const readHTMLFile = (path, callback) => {
  fs.readFile(path, { encoding: 'utf-8' }, (err, html) => {
    if (err) throw err
    callback(null, html)
  })
}

const emailSender = (data) => {
  return new Promise((resolve, reject) => {
    const client = emailing.clientEmail === 'mailgun' ? mailgun : sendinblue
    client(data)
      .then((info) => resolve(info))
      .catch((err) => reject(err))
  })
}

const sendContactMail = (payload) => {
  return new Promise((resolve, reject) => {
    const { name, firstName, email, phone, message } = payload

    readHTMLFile(
      path.resolve(__dirname, './templates/new_contact_request.html'),
      (err, html) => {
        if (err) reject(err)
        const template = handlebars.compile(html)
        const replacements = {
          title: 'New contact request',
          name,
          firstName,
          email,
          phone,
          message,
          siteName: company.name,
          siteDomain: extractHostname(siteUrl[process.env.NODE_ENV])
        }
        const htmlToSend = template(replacements)
        const data = {
          from: `${company.name} <${emailing.sendContactBy}>`,
          to: emailing.receiveContactAt,
          subject: `New contact request from ${name} ${firstName}`,
          html: htmlToSend
        }
        emailSender(data)
          .then((info) => resolve(info))
          .catch((err) => reject(err))
      }
    )
  })
}

module.exports = { sendContactMail }
