<template>
  <div class="legal-page">
    <CustomSection bg-light>
      <h1 v-if="contentData.title" class="text-center">
        {{ contentData.title[0].text }}
      </h1>
      <h2 v-if="contentData.content" class="text-center">
        {{ contentData.content[0].text }}
      </h2>
    </CustomSection>
    <CustomSection>
      <div
        v-for="({ article_title, article_content, list_content },
        i) in contentData.articles"
        :key="i"
        class="articles"
      >
        <h3 v-if="article_title[0]" class="mb-4">
          {{ article_title[0].text }}
        </h3>
        <p
          v-for="({ text }, pIdx) in article_content"
          :key="`pararaphs-${pIdx}`"
          class="mb-4"
        >
          {{ text }}
        </p>
        <ul class="mb-4">
          <li
            v-for="({ text }, listIdx) in list_content"
            :key="`list-${listIdx}`"
          >
            {{ text }}
          </li>
        </ul>
      </div>
      <p class="text-muted mt-4 text-right">
        Dernière modification: {{ lastModificationDate }}
      </p>
    </CustomSection>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CustomSection from '@/components/CustomSection'

export default {
  name: 'LegalPage',
  components: {
    CustomSection
  },
  validate({ params, store }) {
    const legalUidAllowed = store.getters.legalPages.map((p) => p.uid)
    return legalUidAllowed.includes(params.legalUid)
  },
  computed: {
    ...mapGetters(['legalPages']),
    content() {
      return this.legalPages.filter(
        (p) => p.uid === this.$route.params.legalUid
      )[0]
    },
    contentData() {
      return this.content.data
    },
    lastModificationDate() {
      return this.$moment(this.content.last_publication_date).format('ll')
    }
  }
}
</script>

<style lang="scss" scoped>
.legal-page {
  padding-top: 80px;

  ul {
    padding-left: 20px;
  }
}
</style>
