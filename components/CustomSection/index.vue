<template>
  <section class="custom-section" :class="{ 'bg-light': bgLight }">
    <div :class="{ container: !noContainer }">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'CustomSection',
  props: {
    bgColor: { type: String, default: 'white' },
    bgLight: { type: Boolean, default: false },
    noContainer: { type: Boolean, default: false }
  },
  computed: {
    bgStyle() {
      return {
        backgroundColor: this.color
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-section {
  padding: 100px 0;
}
</style>
