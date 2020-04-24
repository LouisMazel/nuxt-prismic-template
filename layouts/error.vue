<template>
  <div class="error flex direction-column flex-center">
    <h1>Error {{ error.statusCode }}</h1>
    <h4 class="text-muted mb-3">
      {{ error.message }}
    </h4>
    <p>
      Please verify you have the right link.
    </p>
    <p>
      <a :href="`mailto:${company.email}`">Contact us</a> if this error persists
    </p>
    <MazBtn :href="homePath" class="mt-4">
      Go back home
    </MazBtn>
  </div>
</template>

<script>
import { defaultLocale, company } from '@/config'
export default {
  name: 'Error',
  props: {
    error: { type: Object, required: true }
  },
  data() {
    return {
      company
    }
  },
  computed: {
    homePath() {
      const { locale } = this.$i18n
      return locale === defaultLocale ? '/' : `/${locale}`
    }
  }
}
</script>
