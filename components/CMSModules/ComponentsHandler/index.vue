<template>
  <div class="components-handler">
    <div v-for="({ data, type }, i) in components" :key="i">
      <PrismicLink v-if="type === 'link'" :field="data">
        {{ data.name }}
      </PrismicLink>
      <PrismicEmbed v-else-if="type === 'embed'" :field="data" />
      <PrismicImage v-else-if="type === 'image'" :field="data" />
      <p v-else-if="type === 'time' || type === 'date'">
        {{ $moment(data).format(type === 'time' ? 'lll' : 'll') }}
      </p>
      <p v-else-if="type === 'geo'">
        {{ data.latitude }}
        {{ data.longitude }}
      </p>
      <p v-else>
        {{ data }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentsHandler',
  props: {
    components: { type: Array, required: true }
  }
}
</script>

<style lang="scss">
.components-handler {
  p {
    margin-bottom: 15px;
  }
}
</style>
