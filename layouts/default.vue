<template>
  <div
    id="app"
    class="flex direction-column pos-r"
    :class="{ 'is-dark': hasDarkTheme }"
  >
    <NavBar class="nav-bar flex-fixed" />
    <nuxt class="main-content flex-1" />
    <FooterBar class="flex-fixed" />
    <LoadingLayer v-if="$wait.is('app-loader')" />
  </div>
</template>

<script>
import { ui, siteUrl, company } from '@/config'
import NavBar from '~/components/NavBar'
import FooterBar from '~/components/FooterBar'
import LoadingLayer from '~/components/LoadingLayer'

export default {
  name: 'Default',
  components: {
    NavBar,
    FooterBar,
    LoadingLayer
  },
  data() {
    return {
      hasDarkTheme: ui.hasDarkTheme
    }
  },
  created() {
    this.$moment.locale(this.$i18n.locale)
  },
  head() {
    const link = [
      {
        rel: 'canonical',
        href: `${siteUrl[process.env.NODE_ENV]}${this.$route.path}`
      }
    ]
    const meta = [
      {
        itemprop: 'name',
        content: this.$route.name
      }
    ]
    return {
      title: this.$route.name,
      titleTemplate: `%s - ${company.name}`,
      link,
      meta
    }
  }
}
</script>
