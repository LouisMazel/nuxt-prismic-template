<template>
  <footer class="footer-bar" role="contentinfo">
    <nav class="container flex align-center space-between py-4">
      <div class="flex align-center">
        <nuxt-link
          v-for="({ label, link }, i) in headerMenu"
          :key="i"
          class="menu__items px-3 flex align-center"
          :to="localePath(`/${link.uid}`)"
        >
          {{ label[0].text | capitalize }}
        </nuxt-link>
        <nuxt-link
          class="menu__items px-3 flex align-center"
          :to="localePath('contact')"
          >Contact us</nuxt-link
        >
      </div>
      <div class="footer-bar__logo">
        <img
          src="~/assets/svg/logo.svg"
          alt="logo-white-bird"
          class="footer-bar__logo__img"
        />
      </div>
    </nav>
    <div class="footer-bar__subs py-2">
      <div class="container flex justify-end">
        <div
          v-for="({ label, link }, i) in subfooterMenu"
          :key="i"
          class="footer-bar__subs__subfooter-links mr-2"
        >
          <nuxt-link class="fs-14" :to="localePath(`/contents/${link.uid}`)">{{
            label[0].text | capitalize
          }}</nuxt-link>
        </div>
        <p class="fs-14 text-white-muted">© {{ company.name | capitalize }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
import { company } from '@/config'

export default {
  name: 'FooterBar',
  data() {
    return {
      company
    }
  },
  computed: {
    ...mapGetters(['subfooterMenu', 'headerMenu', 'footerMenu'])
  }
}
</script>

<style lang="scss" scoped>
.footer-bar {
  border-top: 1px solid $hover-color;

  &__logo img {
    height: 60px;
  }

  .menu__items {
    font-weight: 600;
    font-family: inherit;
  }

  &__subs {
    background-color: $hover-color;

    &__subfooter-links {
      &::after {
        content: ' -';
      }
    }
  }
}
</style>
