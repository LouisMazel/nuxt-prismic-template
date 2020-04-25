<template>
  <nav class="nav-bar" :class="{ 'has-background': hasBackground }">
    <div class="container flex">
      <div class="flex align-center flex-fixed">
        <nuxt-link
          :to="localePath('index')"
          class="nav-bar__logo p-2 flex-fixed"
        >
          <div class="nav-bar__logo__container">
            <img src="~/assets/svg/logo.svg" class="flex-fixed" alt="logo" />
          </div>
        </nuxt-link>
      </div>
      <div class="flex-1" />
      <div class="menu flex">
        <nuxt-link
          v-for="({ label, link }, i) in headerMenu"
          :key="i"
          :to="localePath(`/${link.uid}`)"
          class="menu__items px-3 flex align-center"
          >{{ label[0].text | capitalize }}</nuxt-link
        >
      </div>
      <div class="flex align-center">
        <nuxt-link class="btn btn--primary mx-3" :to="localePath('contact')"
          >Contact us</nuxt-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavBar',
  data() {
    return {
      hasBackground: false
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
    position: relative;

    &__container {
      height: 100%;
      max-width: 100%;
      padding: 4px;

      &:hover {
        border-radius: $border-radius;
        background-color: $hover-color;
      }

      img {
        height: 100%;
        max-width: 100%;
        color: $primary-color;
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
