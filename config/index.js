module.exports = {
  serverPort: 3000,
  company: {
    name: '<%APP_NAME%>',
    email: '<%APP_EMAIL%>',
    phone: {
      display: '<%APP_PHONE%>',
      prefixed: '<%APP_PHONE_PREFIXED%>'
    }
  },
  apiPath: '/api',
  siteUrl: {
    development: 'http://localhost:3000',
    production: '<%APP_PRODUCTION_URL%>'
  },
  defaultLocale: 'en',
  emailing: {
    sendContactBy: '<%APP_EMAIL%>',
    receiveContactAt: '<%APP_EMAIL%>',
    smtp: {
      host: '<%APP_SMTP_HOST%>',
      port: <%APP_SMTP_PORT%>,
      user: '<%APP_SMTP_USER%>',
      pass: '<%APP_SMTP_PASS%>'
    },
    mailgun: {
      domain: '<%APP_MAILGUN_DOMAIN%>',
      apiKey: '<%APP_MAILGUN_APIKEY%>'
    },
    clientEmail: '<%APP_CLIENT_EMAIL%>' // or 'smtp'
  },
  ga: {
    id: 'UA-XXXXXXX-X'
  },
  ui: {
    primaryColor: <%APP_PRIMARY_COLOR%>,
    primaryColor: <%APP_SECONDARY_COLOR%>,
    hasDarkTheme: <%APP_DARK_THEME%>
  },
  prismicEndpoint: 'https://<%APP_PRISMIC_REPO%>.cdn.prismic.io/api/v2'
}
