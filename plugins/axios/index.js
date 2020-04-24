import config from '@/config'

export default ({ $axios, redirect, store }) => {
  $axios.defaults.baseURL = `${config.siteUrl[process.env.NODE_ENV]}${
    config.apiPath
  }`
  $axios.defaults.withCredentials = true

  $axios.onRequest((config) => {
    if (store.state.token)
      config.headers.common['csrf-token'] = store.state.token
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
