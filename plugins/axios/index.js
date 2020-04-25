import config from '@/config'

export default ({ $axios }) => {
  $axios.defaults.baseURL = `${config.siteUrl[process.env.NODE_ENV]}${
    config.apiPath
  }`
  $axios.defaults.withCredentials = true
}
