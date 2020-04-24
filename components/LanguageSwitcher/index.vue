<template>
  <div class="language-switcher flex align-center" :class="{ 'is-dark': dark }">
    <button
      ref="button-open"
      class="btn btn--icon btn--blank btn--mini btn--white flex flex-center"
      @click="toggleMenu"
    >
      <i
        class="flag-icon mr-2"
        :class="`flag-icon-${getFlag(userLocale.code)}`"
      />
      <span v-if="!flagged">
        {{ userLocale.name }}
      </span>
      <i class="arrow-icon material-icons ml-1" :class="{ rotate: open }">
        {{ position === 'top' ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}
      </i>
    </button>
    <transition name="slide">
      <div
        v-if="open"
        v-closable="{
          exclude: ['button-open'],
          handler: 'toggleMenu'
        }"
        class="language-switcher-collapse flex direction-column br-8"
        :class="[position]"
      >
        <button
          v-for="({ code, name }, i) in availableLocales"
          :key="`${code}-${i}`"
          class="language-switcher-collapse__items dots-text"
          @click="switchLocalePath(code)"
        >
          <i class="flag-icon mr-2" :class="`flag-icon-${getFlag(code)}`" />
          {{ name | capitalize }}
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import closable from '@/directives/VClosable'
import '@/assets/css/flag-icon-css/flag-icon.min.css'

export default {
  name: 'LanguageSwitcher',
  directives: {
    closable
  },
  props: {
    position: { type: String, default: 'bottom left' },
    dark: { type: Boolean, default: false },
    flagged: { type: Boolean, default: false }
  },
  data() {
    return {
      open: false
    }
  },
  computed: {
    currentLocaleCode() {
      return this.$i18n.locale
    },
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.currentLocaleCode)
    },
    userLocale() {
      return this.$i18n.locales.filter(
        (i) => i.code === this.currentLocaleCode
      )[0]
    }
  },
  methods: {
    toggleMenu() {
      this.open = !this.open
    },
    getFlag(code) {
      return code === 'en' ? 'gb' : 'fr'
    },
    switchLocalePath(code) {
      const locale = code === 'fr' ? '' : `${code}`
      this.$wait.start('app-loader')
      window.location.href = `/${locale}`
    }
  }
}
</script>

<style lang="scss" scoped>
.language-switcher {
  position: relative;

  .btn {
    background-color: transparent;
    color: black;
    border: none;
    padding-right: 10px;

    &:hover {
      background-color: #f2f2f2;
    }

    .arrow-icon {
      transition: all 300ms ease-in-out;
      color: $text-color;

      &.rotate {
        transform: rotate(180deg);
      }
    }
  }

  &-collapse {
    background-color: white;
    position: absolute;
    overflow: hidden;
    box-shadow: 0 0 8px 0 rgba(black, 0.1);
    z-index: 999;

    &.right {
      right: 0;
    }

    &.left {
      left: 0;
    }

    &.top {
      bottom: 100%;
    }

    &.bottom {
      top: 100%;
    }

    &__items {
      padding: 10px 20px;
      text-decoration: none;
      color: black;
      border: none;
      cursor: pointer;
      text-align: left;
      font-size: 1em;

      &.active {
        background-color: var(--main-blue-color);
        color: white;
        font-weight: 600;
      }

      &:hover:not(.active),
      &:focus:not(.active) {
        background-color: #eaeaea;
        outline: none;
      }
    }
  }
}
</style>
