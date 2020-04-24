module.exports = {
  serverPort: 3000,
  company: {
    name: '<%APP_NAME%>',
    email: '<%APP_EMAIL%>',
    phone: {
      display: '<%APP_PHONE%>',
      prefixed: '<%APP_PHONE_PREFIX%>'
    }
  },
  apiPath: '/api',
  siteUrl: {
    development: 'http://localhost:3000',
    production: '<%APP_PRODUCTION_URL%>'
  },
  defaultLocale: 'fr',
  emailing: {
    sendContactBy: '<%APP_EMAIL%>',
    receiveContactAt: '<%APP_EMAIL%>',
    smtp: {
      host: '<%APP_SMTP_HOST%>',
      port: '<%APP_SMTP_PORT%>',
      user: '<%APP_SMTP_USER%>',
      pass: '<%APP_SMTP_PASS%>'
    },
    mailgun: {
      domain: '<%APP_MAILGUN_DOMAIN%>',
      apiKey: '<%APP_MAILGUN_APIKEY%>'
    },
    clientEmail: '<%APP_MAILGUN_APIKEY%>' // or 'smtp'
  },
  ga: {
    id: 'UA-XXXXXXX-X'
  },
  prismicEndpoint: 'https://<%APP_PRISMIC_REPO%>.cdn.prismic.io/api/v2'
}
