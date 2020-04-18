<template>
  <div id="app" class="flex direction-column">
    <NavBar class="nav-bar flex-fixed" />
    <nuxt class="main-content flex-1" />
    <FooterBar class="flex-fixed" />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'
import FooterBar from '~/components/FooterBar'

export default {
  name: 'Default',
  components: {
    NavBar,
    FooterBar
  },
  created() {
    this.$moment.locale(this.$i18n.locale)
  }
}
</script>

<style lang="scss" scoped>
#app {
  .nav-bar {
    position: fixed;
    width: 100%;
  }

  // .main-content {
  //   padding-top: 80px;
  // }
}
</style>
