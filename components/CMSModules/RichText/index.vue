<template>
  <PrismicRichText class="rich-text" :field="content" />
</template>

<script>
export default {
  name: 'RichText',
  props: {
    content: { type: Array, required: true }
  }
}
</script>

<style lang="scss">
.rich-text {
  p {
    margin-bottom: 15px;
  }
}
</style>
