<template>
  <CustomSection class="slices-section">
    <div v-for="(slice, i) in slices" :key="`slice-${i}`" class="slices">
      <RichText
        v-if="slice.slice_type === 'text' && slice"
        :content="slice.primary.rich_text"
      />
      <LinksHandler
        v-if="slice.slice_type === 'list_of_articles' && slice.items.length"
        :links="slice.items"
      />
      <TeamHandler
        v-if="slice.slice_type === 'team' && slice.items.length"
        :profiles="slice.items"
      />
      <ContactForm
        v-if="slice.slice_type === 'contact_form' && slice.items.length"
        :title="slice.primary.contact_title"
      />
    </div>
  </CustomSection>
</template>

<script>
import LinksHandler from './_subs/LinksHandler'
import TeamHandler from './_subs/TeamHandler'
import CustomSection from '@/components/CustomSection'
import RichText from '@/components/CMSModules/RichText'
import ContactForm from '@/components/CMSModules/ContactForm'

export default {
  name: 'SlicesSection',
  components: {
    TeamHandler,
    ContactForm,
    LinksHandler,
    CustomSection,
    RichText
  },
  props: {
    slices: { type: Array, required: true }
  }
}
</script>
