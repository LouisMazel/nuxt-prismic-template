<template>
  <footer class="footer-bar" role="contentinfo">
    <nav class="container flex align-center space-between py-4">
      <div class="flex align-center">
        <nuxt-link
          :to="localePath('index')"
          class="menu__items px-3 flex align-center"
          >Accueil</nuxt-link
        >
        <nuxt-link
          v-for="({ uid, data }, i) in marketingPages"
          :key="i"
          class="menu__items px-3 flex align-center"
          :to="localePath(`/${uid}`)"
        >
          {{ data.title[0].text | capitalize }}
        </nuxt-link>
        <nuxt-link
          class="menu__items px-3 flex align-center"
          :to="localePath('contact')"
          >Contact</nuxt-link
        >
      </div>
      <div class="footer-bar__logo">
        <img
          src="~/assets/svg/logo.svg"
          alt="logo"
          class="footer-bar__logo__img"
        />
      </div>
    </nav>
    <div class="footer-bar__subs py-2">
      <div class="container flex justify-end">
        <div
          v-for="({ uid, data }, i) in legalPages"
          :key="i"
          class="footer-bar__subs__legals-links mr-2"
        >
          <nuxt-link class="fs-14" :to="localePath(`/legal/${uid}`)">
            {{ data.title[0].text | capitalize }}
          </nuxt-link>
        </div>
        <p class="fs-14 text-white-muted">
          © White bird
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FooterBar',
  computed: {
    ...mapGetters(['legalPages', 'marketingPages'])
  }
}
</script>

<style lang="scss" scoped>
.footer-bar {
  border-top: 1px solid $hover-color;

  &__logo img {
    height: 60px;
  }

  &__subs {
    background-color: $hover-color;

    &__legals-links {
      &::after {
        content: '-';
      }
    }
  }
}
</style>
