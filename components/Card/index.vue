<template>
  <div class="content-container p-4">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ContentContainer'
}
</script>

<style lang="scss" scoped>
.content-container {
  background-color: $bg-color;
  border-radius: $border-radius;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
}
</style>
