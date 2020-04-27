<template>
  <div class="content-page">
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
        Last modification: {{ lastModificationDate }}
      </p>
    </CustomSection>
  </div>
</template>

<script>
import CustomSection from '@/components/CustomSection'
import RichText from '~/components/CMSModules/RichText'

export default {
  name: 'ContentPage',
  components: {
    CustomSection,
    RichText
  },
  async asyncData({ $prismic, error, app, params, store }) {
    try {
      const linkData = store.getters.subfooterMenu.filter(
        (m) => m.link.uid === params.pageUid
      )[0].link

      const content = await $prismic.api.getByID(linkData.id)
      const { data } = content
      return {
        data,
        lastPublicationDate: content.last_publication_date
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  computed: {
    lastModificationDate() {
      return this.$moment(this.lastPublicationDate).format('ll')
    }
  }
}
</script>

<style lang="scss" scoped>
.content-page {
  ul {
    padding-left: 20px;
  }
}
</style>
