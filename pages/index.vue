<template>
  <div ref="home" class="home">
    <div ref="header" class="header flex flex-center">
      <img :src="mainImage.url" :alt="mainImage.alt" class="header__illu" />
      <div class="container">
        <h1 class="header__title">
          {{ mainTitle }}
        </h1>
        <h2 class="header__subtitle">
          {{ secondTitle }}
        </h2>
        <h3 class="header__subsubtitle">
          {{ thirdTitle }}
        </h3>
        <MazBtn
          v-scroll-to="'#benefits'"
          size="lg"
          class="mt-4"
          color="default"
        >
          {{ buttonShowMore }}
        </MazBtn>
      </div>
    </div>
    <BenefitsSection id="benefits" />
    <DataSection />
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from '~/components/ContactForm'
import BenefitsSection from '~/components/BenefitsSection'
import DataSection from '~/components/DataSection'

export default {
  name: 'Home',
  components: { ContactForm, BenefitsSection, DataSection },
  async asyncData({ $prismic, error, app }) {
    try {
      const currentLocale = (locale = app.i18n.locale) =>
        locale === 'en' ? 'en-gb' : 'fr-fr'
      const response = await $prismic.api.getSingle('home', {
        lang: currentLocale()
      })
      const document = response.data
      return {
        mainTitle: document.main_title[0].text,
        secondTitle: document.second_title[0].text,
        thirdTitle: document.third_title[0].text,
        buttonShowMore: document.button_show_more_text,
        mainImage: document.main_image
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head() {
    return {
      title: 'Home'
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  .header {
    height: 880px;
    position: relative;
    overflow: hidden;

    .container {
      z-index: 1;
    }

    @media only screen and (max-width: $breakpoint-tablet) {
      // padding: 160px 10px 0 10px;
    }

    &__illu {
      width: 100%;
      position: absolute;
      bottom: -350px;
    }

    &__title,
    &__subtitle,
    &__subsubtitle {
      font-weight: 400;
    }

    &__title {
      color: $secondary;

      span {
        color: $primary;
      }
    }

    &__subtitle {
      color: $secondary;
    }

    &__subsubtitle {
      color: $primary;
      font-size: 1.3em;
    }
  }
}
</style>
