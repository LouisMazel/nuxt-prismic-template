<template>
  <div class="about">
    <CustomSection bg-light>
      <RichText :content="title" class="text-center" />
      <RichText :content="subtitle" class="text-center" />
    </CustomSection>
    <CustomSection>
      <RichText :content="mainParagraph" />
      <ComponentsHandler :components="components" />
    </CustomSection>
    <CustomSection v-if="contents.length" bg-light>
      <RichText
        v-for="(content, i) in contents"
        :key="`content-${i}`"
        :content="content.content"
      />
    </CustomSection>
    <div v-for="(slice, i) in slices" :key="`slice-${i}`" class="slices">
      <LinksHandler
        v-if="slice.slice_type === 'list_of_articles' && slice.items.length"
        :links="slice.items"
      />
      <TeamHandler
        v-if="slice.slice_type === 'team' && slice.items.length"
        :profiles="slice.items"
      />
      <ContactForm
        v-if="slice.slice_type === 'contact_form_section' && slice.items.length"
        :title="slice.primary.contact_title"
      />
    </div>
  </div>
</template>

<script>
import CustomSection from '@/components/CustomSection'
import TeamHandler from '@/components/CMSModules/TeamHandler'
import ContactForm from '@/components/CMSModules/ContactForm'
import LinksHandler from '@/components/CMSModules/LinksHandler'
import RichText from '@/components/CMSModules/RichText'
import ComponentsHandler from '@/components/CMSModules/ComponentsHandler'

export default {
  name: 'MarketPage',
  components: {
    CustomSection,
    TeamHandler,
    ContactForm,
    LinksHandler,
    RichText,
    ComponentsHandler
  },
  async asyncData({ $prismic, error, app, params, store }) {
    try {
      const linkData = store.getters.headerMenu.find(
        (m) => m.link.uid === params.marketUid
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
    components() {
      const { data } = this
      const prefix = 'main_'
      const params = [
        'link',
        'date',
        'time',
        'number',
        'keytext',
        'embed',
        'geo',
        'image'
      ]
      const allowedComponents = [`number`, `keytext`]
      const mapComponents = params.map((p) => ({
        type: p,
        data: data[`${prefix}${p}`]
      }))
      return mapComponents.filter(
        (c) =>
          c.data !== null &&
          (allowedComponents.includes(c.type) || Object.keys(c.data).length > 2)
      )
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

<style lang="scss" scoped>
.about {
  h1 {
    margin-bottom: 50px;
  }
}
</style>
