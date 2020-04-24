const nodemailer = require('nodemailer')
const { emailing } = require('./../../../../config')

module.exports = (data) => {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      host: emailing.smtp.host,
      port: emailing.smtp.port,
      // secure: false, // upgrade later with STARTTLS
      auth: {
        user: emailing.smtp.user,
        pass: emailing.smtp.pass
      }
    })
    transporter.sendMail(data, (err, response) => {
      if (err) return reject(err)
      resolve(response)
    })
  })
}
