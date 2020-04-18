<template>
  <nav class="nav-bar" :class="{ 'has-background': hasBackground }">
    <div class="container flex">
      <nuxt-link :to="localePath('index')" class="nav-bar__logo p-2">
        <img
          src="~/assets/img/logo.png"
          class="nav-bar__logo"
          alt="white bird logo"
        />
      </nuxt-link>
      <div class="flex-1" />
      <div class="menu flex">
        <nuxt-link
          :to="localePath('index')"
          class="menu__items px-3 flex align-center"
        >
          Accueil
        </nuxt-link>
        <nuxt-link
          v-for="({ uid, data }, i) in marketingPages"
          :key="i"
          :to="localePath(`/${uid}`)"
          class="menu__items px-3 flex align-center"
        >
          {{ data.title[0].text | capitalize }}
        </nuxt-link>
      </div>
      <div class="flex align-center">
        <nuxt-link
          class="btn btn--primary btn--md mx-3"
          :to="localePath('contact')"
        >
          Contactez-nous
        </nuxt-link>
        <a href="tel:+33123456789" class="fs-16 fw-400 flex align-center">
          <i class="material-icons mr-2">
            phone
          </i>
          01 46 20 95 48
        </a>
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
    ...mapGetters(['marketingPages'])
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.manageNavBar()
    })
    this.manageNavBar()
  },
  methods: {
    manageNavBar() {
      if (window.scrollY > 50) this.hasBackground = true
      else this.hasBackground = false
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  height: 80px;
  // background-color: $bg-color;
  // border-bottom: 1px solid $hover-color;
  // background-color: rgba($bg-color, .3);
  transition: all 300ms ease-in-out;
  z-index: 1;

  &.has-background {
    background-color: $bg-color;
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
  }

  .container {
    height: 100%;
  }

  &__logo {
    height: 100%;

    img:hover {
      border-radius: $border-radius;
      background-color: $hover-color;
    }
  }

  .menu {
    &__items {
      transition: all 0.3s ease-in-out;
      text-decoration: none;
      font-weight: 400;

      &.nuxt-link-exact-active {
        border-bottom: 2px solid $primary;
      }

      &:hover {
        background-color: $hover-color;
      }
    }
  }
}
</style>
