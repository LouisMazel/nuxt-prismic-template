<template>
  <div class="about">
    <CustomSection bg-light>
      <Title :data="contentData.title[0]" class="text-center" />
      <Title :data="contentData.subtitle[0]" class="text-center" />
    </CustomSection>
    <CustomSection>
      <!-- {{ contentData.main_paragraph }} -->
      <RichText :content="contentData.main_paragraph" />

      <div
        v-for="({ content: contentDatas }, i) in contentData.contents"
        :key="`content-${i}`"
      >
        <RichText :content="contentDatas" />
        <p
          v-for="(c, pIdx) in contentDatas.filter(
            (c) => c.type === 'paragraph'
          )"
          :key="`paragraph-${pIdx}`"
          class="mb-3"
        >
          {{ c.text }}
        </p>
        <div
          v-for="(c, iIdx) in contentDatas.filter((c) => c.type === 'image')"
          :key="`image-${iIdx}`"
          class="flex flex-center my-4"
        >
          <img :src="c.url" :alt="c.alt" class="mw-100" />
        </div>
      </div>
    </CustomSection>
    <TeamHandler v-if="profiles && profiles.length" :profiles="profiles" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CustomSection from '~/components/CustomSection'
import TeamHandler from '~/components/CMSModules/TeamHandler'
import RichText from '~/components/CMSModules/RichText'
import Title from '~/components/CMSModules/Title'

export default {
  name: 'About',
  validate({ params, store }) {
    const marketUidAllowed = store.getters.marketingPages.map((p) => p.uid)
    return marketUidAllowed.includes(params.marketUid)
  },
  components: {
    CustomSection,
    TeamHandler,
    RichText,
    Title
  },
  computed: {
    ...mapGetters(['marketingPages']),
    content() {
      return this.marketingPages.filter(
        (p) => p.uid === this.$route.params.marketUid
      )[0]
    },
    contentData() {
      return this.content.data
    },
    profiles() {
      const teamSlices = this.contentData.body.filter(
        (c) => c.slice_type === 'team'
      )[0]
      return teamSlices ? teamSlices.items : null
    }
  },
  head() {
    return {
      title: this.contentData.title[0].text
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  padding-top: 80px;

  h1 {
    margin-bottom: 50px;
  }
}
</style>
