<template>
  <div class="loading-layer flex align-center justify-center">
    <Spinner class="spinner" :overlay="false" />
  </div>
</template>

<script>
import Spinner from './Spinner'

export default {
  name: 'LoadingLayer',
  components: {
    Spinner
  }
}
</script>

<style lang="scss">
.loading-layer {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(48, 49, 68, 0.7);
  z-index: 999;
}
</style>
