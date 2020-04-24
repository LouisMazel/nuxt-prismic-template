<template>
  <CustomSection class="data-section" bg-light>
    <h2 class="text-center">
      White Bird en chiffres
    </h2>
    <div class="data-section__items items flex">
      <ContentContainer class="data-container flex-1 flex flex-center">
        <h3>
          <span class="text-muted"> + de </span><br />
          <span class="number color-secondary"> 100 </span><br />
          <span class="text-muted">
            immeubles en syndic de copropriété
          </span>
        </h3>
      </ContentContainer>
      <ContentContainer class="data-container flex-1 flex flex-center">
        <h3>
          <span class="text-muted"> + de </span><br />
          <span class="number color-secondary"> 200 </span><br />
          <span class="text-muted">
            millions d'actifs en gestion
          </span>
        </h3>
      </ContentContainer>
      <ContentContainer class="data-container flex-1 flex flex-center">
        <h3>
          <span class="number color-secondary"> 15 </span><br />
          <span class="text-muted">
            collaborateurs
          </span>
        </h3>
      </ContentContainer>
    </div>
  </CustomSection>
</template>

<script>
import CustomSection from '~/components/CustomSection'
import ContentContainer from '~/components/ContentContainer'

export default {
  name: 'DataSection',
  components: {
    CustomSection,
    ContentContainer
  }
}
</script>

<style lang="scss" scoped>
.data-section {
  h2 {
    font-size: 40px;
    margin-bottom: 50px;
  }

  &__items {
    flex: 1;

    .data-container {
      margin-right: 30px;

      h3 {
        text-align: center;

        .text-muted {
          font-size: 18px;
        }

        .number {
          font-size: 60px;
        }
      }

      &:last-child {
        margin-right: 0;
      }
    }

    @media only screen and (max-width: $breakpoint-tablet) {
      flex-direction: column;

      .data-container {
        margin-right: 0;
        margin-bottom: 30px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
