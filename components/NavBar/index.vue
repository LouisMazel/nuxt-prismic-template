<template>
  <nav class="nav-bar" :class="{ 'has-background': hasBackground }">
    <div class="container flex">
      <div class="flex align-center flex-fixed">
        <nuxt-link
          :to="localePath('index')"
          class="nav-bar__logo p-2 flex-fixed"
        >
          <img
            src="~/assets/img/logo.png"
            class="nav-bar__logo flex-fixed"
            alt="logo"
          />
        </nuxt-link>
        <LanguageSwitcher flagged />
      </div>
      <div class="flex-1" />
      <div class="menu flex">
        <nuxt-link
          v-for="({ label, link }, i) in headerMenu"
          :key="i"
          :to="localePath(`/${link.uid}`)"
          class="menu__items px-3 flex align-center"
        >
          {{ label[0].text | capitalize }}
        </nuxt-link>
      </div>
      <div class="flex align-center">
        <nuxt-link class="btn btn--primary mx-3" :to="localePath('contact')">
          Contactez-nous
        </nuxt-link>
        <a
          :href="`tel:${company.phone.prefixed}`"
          class="fs-16 fw-400 flex align-center"
        >
          <i class="material-icons mr-2">
            phone
          </i>
          {{ company.phone.display }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { company } from '@/config'

export default {
  name: 'NavBar',
  components: { LanguageSwitcher },
  data() {
    return {
      hasBackground: false,
      company
    }
  },
  computed: {
    ...mapGetters(['headerMenu'])
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.manageNavBar()
    })
    this.manageNavBar()
  },
  methods: {
    manageNavBar() {
      if (window.scrollY > 10) this.hasBackground = true
      else this.hasBackground = false
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  height: 80px;
  transition: all 300ms ease-in-out;
  z-index: 2;
  position: sticky;
  top: 0;

  &.has-background {
    background-color: $bg-color;
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
  }

  .container {
    height: 100%;
  }

  &__logo {
    height: 100%;
    width: 133px;
    position: relative;

    img {
      height: 100%;
      max-width: 100%;

      &:hover {
        border-radius: $border-radius;
        background-color: $hover-color;
      }
    }
  }

  .menu {
    &__items {
      transition: all 0.3s ease-in-out;
      text-decoration: none;
      font-weight: 600;
      font-family: inherit;

      &.nuxt-link-exact-active {
        border-bottom: 2px solid $primary-color;
      }

      &:hover {
        background-color: $hover-color;
      }
    }
  }
}
</style>
