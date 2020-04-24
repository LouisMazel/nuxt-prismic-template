<template>
  <div class="contact">
    <CustomSection bg-light>
      <h1 class="text-center">
        Nous contacter
      </h1>
    </CustomSection>
    <CustomSection>
      <div class="buttons-section flex flex--wrap">
        <div class="flex-1 flex direction-column align-center">
          <h2 class="mb-3">
            Par téléphone
          </h2>
          <MazBtn
            :href="`tel:${company.phone.prefixed}`"
            color="default"
            size="lg"
            class="flex align-center"
          >
            <i class="material-icons mr-3">phone</i>
            {{ company.phone.display }}
          </MazBtn>
        </div>
        <div class="flex-1 flex direction-column align-center">
          <h2 class="mb-3">
            Par e-mail
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

<style lang="scss" scoped>
.contact {
  &-section {
    padding: 50px 0;
  }

  .buttons-section {
    @media only screen and (max-width: $breakpoint-tablet) {
      flex-direction: column;

      & > div:first-child {
        margin-bottom: 30px;
      }
    }
  }
}
</style>
