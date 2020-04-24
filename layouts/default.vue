<template>
  <div id="app" class="flex direction-column pos-r">
    <NavBar class="nav-bar flex-fixed" />
    <nuxt class="main-content flex-1" />
    <FooterBar class="flex-fixed" />
    <LoadingLayer v-if="$wait.is('app-loader')" />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'
import FooterBar from '~/components/FooterBar'
import LoadingLayer from '~/components/LoadingLayer'

// import config from '@/config'

// const getRouteName = (name) => {
//   if (!name) return 'home'
//   if (name.includes('index')) return 'home'
//   if (name.includes('contact')) return 'contact'
//   if (name.includes('about')) return 'about'
// }

export default {
  name: 'Default',
  components: {
    NavBar,
    FooterBar,
    LoadingLayer
  },
  created() {
    this.$moment.locale(this.$i18n.locale)
  }
  // head() {
  //   const siteUrl = config.siteUrl[process.env.NODE_ENV]
  //   const path = this.$route.path.includes('/en')
  //     ? this.$route.path.slice(3)
  //     : this.$route.path
  //   const link = [
  //     { rel: 'canonical', href: `${siteUrl}${this.$route.path}` },
  //     { rel: 'alternate', hreflang: 'fr', href: `${siteUrl}${path}` },
  //     { rel: 'alternate', hreflang: 'en', href: `${siteUrl}/en${path}` }
  //   ]
  //   link.forEach((l) => {
  //     if (l.href.slice(-1) !== '/') {
  //       l.href = l.href + '/'
  //     }
  //   })
  //   const meta = [
  //     {
  //       hid: 'description',
  //       name: 'description',
  //       content: this.$t(
  //         `meta.pages.${getRouteName(this.$route.name)}.description`
  //       )
  //     },
  //     {
  //       property: 'og:title',
  //       content: this.$t(`meta.pages.${getRouteName(this.$route.name)}.title`)
  //     },
  //     { property: 'og:url', content: `${siteUrl}${this.$route.path}` },
  //     {
  //       property: 'og:description',
  //       content: this.$t(
  //         `meta.pages.${getRouteName(this.$route.name)}.description`
  //       )
  //     },
  //     { name: 'twitter:site', content: `${siteUrl}${this.$route.path}` },
  //     {
  //       name: 'twitter:title',
  //       content: this.$t(`meta.pages.${getRouteName(this.$route.name)}.title`)
  //     },
  //     {
  //       name: 'twitter:description',
  //       content: this.$t(
  //         `meta.pages.${getRouteName(this.$route.name)}.description`
  //       )
  //     },
  //     {
  //       itemprop: 'name',
  //       content: this.$t(`meta.pages.${getRouteName(this.$route.name)}.title`)
  //     },
  //     {
  //       itemprop: 'description',
  //       content: this.$t(
  //         `meta.pages.${getRouteName(this.$route.name)}.description`
  //       )
  //     }
  //   ]
  //   return {
  //     title: this.$t(`meta.pages.${getRouteName(this.$route.name)}.title`),
  //     titleTemplate: '%s - Loïc Mazuel',
  //     link,
  //     meta
  //   }
  // }
}
</script>
