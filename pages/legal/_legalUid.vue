<template>
  <div class="legal-page">
    <CustomSection bg-light>
      <RichText class="text-center" :content="data.title" />
    </CustomSection>
    <CustomSection>
      <RichText :content="data.content" />
      <div
        v-for="({ article_title, article_content, list_content },
        i) in data.articles"
        :key="i"
        class="articles"
      >
        <RichText :content="article_title" class="mb-4" />
        <RichText :content="article_content" />
      </div>
      <p class="text-muted mt-4 text-right">
        Dernière modification: {{ lastModificationDate }}
      </p>
    </CustomSection>
  </div>
</template>

<script>
import CustomSection from '@/components/CustomSection'
import RichText from '~/components/CMSModules/RichText'

export default {
  name: 'LegalPage',
  components: {
    CustomSection,
    RichText
  },
  async asyncData({ $prismic, error, app, params, store }) {
    try {
      const linkData = store.getters.legalMenu.filter(
        (m) => m.link.uid === params.legalUid
      )[0].link
      const { data } = await $prismic.api.getByID(linkData.id)
      return {
        data
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  computed: {
    lastModificationDate() {
      return this.$moment(this.content.last_publication_date).format('ll')
    }
  }
}
</script>

<style lang="scss" scoped>
.legal-page {
  ul {
    padding-left: 20px;
  }
}
</style>
