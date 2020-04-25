<template>
  <div class="landing-page">
    <CustomSection bg-light>
      <RichText :content="title" class="text-center" />
      <RichText :content="subtitle" class="text-center" />
    </CustomSection>
    <CustomSection>
      <RichText :content="mainParagraph" />
    </CustomSection>
    <CustomSection v-if="contents[0].content.length" bg-light>
      <RichText
        v-for="(content, i) in contents"
        :key="`content-${i}`"
        :content="content.content"
      />
    </CustomSection>
    <SlicesSection v-if="slices.length" :slices="slices" />
  </div>
</template>

<script>
import CustomSection from '@/components/CustomSection'
import RichText from '@/components/CMSModules/RichText'
import SlicesSection from '@/components/CMSModules/SlicesSection'

export default {
  name: 'LandingPage',
  components: {
    CustomSection,
    RichText,
    SlicesSection
  },
  async asyncData({ $prismic, error, app, params, store }) {
    try {
      const linkData = store.getters.headerMenu.find(
        (m) => m.link.uid === params.pageUid
      ).link

      const { data } = await $prismic.api.getByID(linkData.id)
      return {
        data
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  computed: {
    title() {
      return this.data.title
    },
    subtitle() {
      return this.data.subtitle
    },
    mainParagraph() {
      return this.data.main_paragraph
    },
    contents() {
      return this.data.contents
    },
    slices() {
      return this.data.body
    }
  },
  head() {
    return {
      title: this.data.title[0].text
    }
  }
}
</script>
