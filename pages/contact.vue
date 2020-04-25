<template>
  <div class="contact">
    <CustomSection bg-light>
      <h1 class="text-center">
        Contact us
      </h1>
    </CustomSection>
    <CustomSection>
      <div class="flex direction-column flex-center">
        <h2 class="mb-3">
          By e-mail
        </h2>
        <MazBtn
          :href="`mailto:${company.email}`"
          size="lg"
          target="_blank"
          class="flex align-center"
        >
          <i class="material-icons mr-3">mail</i>
          {{ company.email }}
        </MazBtn>
      </div>
    </CustomSection>
    <div>
      <ContactForm bg-light title="Directement ici" />
    </div>
  </div>
</template>

<script>
import ContactForm from '~/components/CMSModules/ContactForm'
import CustomSection from '~/components/CustomSection'
import { company } from '@/config'

export default {
  name: 'Contact',
  components: {
    ContactForm,
    CustomSection
  },
  data() {
    return {
      company
    }
  }
}
</script>
