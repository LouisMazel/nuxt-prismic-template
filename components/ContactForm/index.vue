<template>
  <CustomSection
    class="contact-form"
    :class="{
      'bg-light': bgLight
    }"
  >
    <form class="form-container" @submit.prevent="submitForm">
      <h2 class="mb-4 text-center">
        {{ title }}
      </h2>
      <div class="display-grid">
        <MazInput v-model="lastname" label="Nom" class="flex-1" required />
        <MazInput v-model="firstname" label="Prénom" class="flex-1" required />
        <MazInput
          v-model="email"
          label="E-mail"
          type="email"
          class="flex-1"
          required
        />
        <MazPhoneNumberInput
          v-model="phoneNumber"
          :translations="{
            countrySelectorLabel: 'Code pays',
            countrySelectorError: 'Choisir un pays',
            phoneNumberLabel: 'Numéro de téléphone',
            example: 'Exemple :'
          }"
          label="Numéro de téléphone"
          class="flex-1"
        />
      </div>
      <MazInput
        v-model="message"
        label="Message"
        textarea
        class="flex-1"
        required
      />

      <div class="text-center mt-2">
        <MazBtn
          type="submit"
          size="lg"
          color="default"
          :loading="$wait.is('contact adding')"
        >
          Envoyez
        </MazBtn>
      </div>
    </form>
    <MazDialog v-model="successDialog" success no-footer>
      <p slot="title">
        Succès
      </p>
      <p>
        Demande de contact envoyée avec succès
      </p>
    </MazDialog>
    <MazDialog v-model="errorDialog" danger no-footer>
      <p slot="title">
        Erreur
      </p>
      <p>
        Une erreur est survenue pendant l'envoie de la demande de contact,
        veuillez recommencer ultérieurement
      </p>
    </MazDialog>
  </CustomSection>
</template>

<script>
import { MazInput, MazPhoneNumberInput, MazDialog } from 'maz-ui'
import CustomSection from '~/components/CustomSection'

export default {
  name: 'ContactForm',
  components: { CustomSection, MazInput, MazPhoneNumberInput, MazDialog },
  props: {
    bgLight: { type: Boolean, default: false },
    title: { type: String, default: 'Contactez-nous' }
  },
  data() {
    return {
      lastname: null,
      firstname: null,
      email: null,
      phoneNumber: '',
      message: null,
      successDialog: false,
      errorDialog: false
    }
  },
  methods: {
    async submitForm() {
      try {
        this.$wait.start('contact adding')
        const payload = {
          name: this.lastname,
          first_name: this.firstname,
          email: this.email,
          phone: this.phoneNumber,
          message: this.message
        }
        await this.$axios.post('/api/contacts', payload)
        this.cleanForm()
        this.successDialog = true
      } catch (err) {
        this.errorDialog = true
      } finally {
        this.$wait.end('contact adding')
      }
    },
    cleanForm() {
      this.lastname = this.email = this.phoneNumber = this.message = this.firstname =
        ''
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-form {
  .form-container {
    max-width: 700px;
    margin: 0 auto;

    .display-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
      margin-bottom: 20px;

      @media only screen and (max-width: $breakpoint-laptop-s) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
}
</style>
