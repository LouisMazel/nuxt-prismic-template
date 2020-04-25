<template>
  <CustomSection class="links-handler" bg-light>
    <div v-for="({ articles_to_link }, i) in links" :key="i" class="links">
      <a
        v-if="articles_to_link.link_type === 'Document'"
        :href="articles_to_link.slug"
      >
        {{ articles_to_link.slug }}
      </a>
      <PrismicLink v-else :field="articles_to_link">
        {{
          articles_to_link.link_type === 'Media'
            ? articles_to_link.name
            : articles_to_link.url
        }}
      </PrismicLink>
    </div>
  </CustomSection>
</template>

<script>
import CustomSection from '@/components/CustomSection'

export default {
  name: 'LinksHandler',
  components: { CustomSection },
  props: {
    links: { type: Array, required: true }
  }
}
</script>

<style lang="scss" scoped>
.links-handler {
}
</style>
