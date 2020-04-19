import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1,
  loading: require('~/assets/svg/loading.svg'),
  error: require('~/assets/img/image-not-found.png')
})
