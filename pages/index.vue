<template>
  <div ref="home" class="home">
    <div ref="header" class="header flex flex-center">
      <img
        :src="data.main_image.url"
        :alt="data.main_image.alt"
        class="header__illu"
      />
      <div class="container">
        <RichText :content="data.main_title" class="header__title" />
        <RichText :content="data.second_title" class="header__subtitle" />
        <RichText :content="data.third_title" class="header__subsubtitle" />
        <MazBtn
          v-scroll-to="'#home-content'"
          size="lg"
          class="mt-4"
          color="default"
          >{{ data.button_show_more_text }}</MazBtn
        >
      </div>
    </div>
    <CustomSection
      id="home-content"
      bg-light
    >
      <RichText :content="data.main_content" />
    </CustomSection>
    <SlicesSection v-if="slices.length" :slices="slices" />
  </div>
</template>

<script>
import CustomSection from '@/components/CustomSection'
import RichText from '@/components/CMSModules/RichText'
import SlicesSection from '@/components/CMSModules/SlicesSection'

export default {
  name: 'Home',
  components: { RichText, CustomSection, SlicesSection },
  async asyncData({ $prismic, error, app, store }) {
    try {
      const { data } = await $prismic.api.getSingle('homepage')
      return {
        data
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  computed: {
    slices() {
      return this.data.body
    }
  },
  head() {
    return {
      title: 'Home'
    }
  }
}
</script>

<style lang="scss">
.home {
  .header {
    height: 880px;
    position: relative;
    overflow: hidden;

    .container {
      z-index: 1;
      position: relative;
      top: -100px;
    }

    @media only screen and (max-width: $breakpoint-tablet) {
      // padding: 160px 10px 0 10px;
    }

    &__illu {
      width: 100%;
      position: absolute;
      bottom: -350px;
    }

    &__title > * {
      color: $default-color !important;

      > * {
        color: $primary-color;
      }
    }

    &__subtitle > * {
      color: $default-color;
    }

    &__subsubtitle > * {
      color: $primary-color;
      font-size: 1.3em;
    }
  }
}
</style>
