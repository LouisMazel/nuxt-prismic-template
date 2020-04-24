<template>
  <CustomSection class="benefits-section" no-container>
    <h2 class="text-center">
      Nos 3 piliers pour un objectif :
      <span class="color-secondary fw-400">Vous statisfaire</span>
    </h2>
    <div class="benefits-section__items">
      <div class="content-container flex">
        <div class="content flex-50 flex direction-column justify-center p-5">
          <h3>Valoriser votre patrimoine</h3>
          <p class="color-secondary">
            Notre premier souci est de valoriservotre bien.
          </p>
          <p class="text-muted">
            Cela implique pour nous de méler une vision long terme patrimoniale
            et une optimisation des charges
          </p>
        </div>
        <div class="image flex-50 flex flex-center">
          <img v-lazy="images[0]" alt="" />
        </div>
      </div>
      <div class="content-container bg-light flex">
        <div class="image flex-50 flex flex-center">
          <img v-lazy="images[1]" alt="" />
        </div>
        <div class="content flex-50 flex direction-column justify-center p-5">
          <h3>Valoriser l'humain</h3>
          <p class="color-secondary">
            Au coeur de notre stratégie l'épanouissement de nos équipes.
          </p>
          <p class="text-muted">
            Les collaborateurs de White Bird et nos partenaires se tiennent à
            votre disposition pour rémuXXX le métier. 100% des appels et email
            sont satisfaits XXXX grâce à des outils et process clairs
          </p>
        </div>
      </div>
      <div class="content-container flex">
        <div class="content flex-50 flex direction-column justify-center p-5">
          <h3>Valoriser les informations qui comptent</h3>
          <p class="color-secondary">
            Notre ambition est un partage de l'information pour une entière
            transparence
          </p>
          <p class="text-muted">
            Grâce à sa plateforme technologique, White Bird fluidifie et grantit
            la transmission et la remontée d'information.
          </p>
        </div>
        <div class="image flex-50 flex flex-center">
          <img v-lazy="images[2]" alt="" />
        </div>
      </div>
    </div>
  </CustomSection>
</template>

<script>
import CustomSection from '@/components/CustomSection'

export default {
  name: 'BenefitsSection',
  components: {
    CustomSection
  },
  data() {
    return {
      images: [
        '/img/illustration-home.jpg',
        '/img/woman-at-window-whitebird.jpg',
        '/img/woman-at-window.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.benefits-section {
  overflow: hidden;
  padding: 0 !important;

  h2 {
    font-size: 40px;
    padding: 100px 0;
  }

  &__items {
    .content-container {
      height: 400px;
      overflow: hidden;

      @media only screen and (max-width: $breakpoint-laptop-s) {
        height: auto;
        flex-direction: column;

        &:nth-child(2) {
          flex-direction: column-reverse;
        }
      }

      .content {
        h3 {
          margin-bottom: 20px;
          font-size: 30px;
        }

        p {
          font-size: 20px;
        }

        @media only screen and (max-width: $breakpoint-tablet) {
          padding: 20px 10px;
        }
      }

      .image {
        overflow: hidden;
        min-height: 0;

        img {
          width: 100%;
          max-width: 100%;
          // max-height: 100%;
        }
      }
    }
  }
}
</style>
