<template>
  <div class="team-handler flex flex--wrap">
    <CustomSection
      v-for="({ first_and_lastname, description, portrait }, i) in profiles"
      :key="`profiles-${i}`"
      class="person-section flex-1 p-5"
      :bg-light="i % 2 == 0"
    >
      <div class="flex flex-center">
        <PersonItem
          :person="{
            avatar: portrait.url,
            name: first_and_lastname[0].text
          }"
          :size="250"
        />
      </div>
      <p>
        {{ description[0].text }}
      </p>
    </CustomSection>
  </div>
</template>

<script>
import CustomSection from '@/components/CustomSection'
import PersonItem from '@/components/PersonItem'

export default {
  name: 'TeamHandler',
  components: { CustomSection, PersonItem },
  props: {
    profiles: { type: Array, required: true }
  }
}
</script>

<style lang="scss" scoped>
.team-handler {
  .person-section {
    padding: 100px;

    @media only screen and (max-width: $breakpoint-tablet) {
      padding: 50px 0;
    }

    img {
      height: 200px;
    }
  }
}
</style>
