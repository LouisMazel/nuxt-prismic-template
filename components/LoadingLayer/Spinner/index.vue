<template>
  <div class="spinner flex flex-center py-4" :class="{ overlay: overlay }">
    <img
      :src="svgLoader"
      alt="app loader"
      :style="{
        width: `${size}px`
      }"
    />
  </div>
</template>

<script>
export default {
  name: 'Spinner',
  props: {
    overlay: { type: Boolean, default: false },
    size: { type: Number, default: 100 }
  },
  data() {
    return {
      svgLoader: require('@/assets/svg/loader.svg')
    }
  }
}
</script>
