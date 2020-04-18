<template>
  <ul class="list" :class="[listType]">
    <li>{{ data.text }}</li>
  </ul>
</template>

<script>
export default {
  name: 'List',
  props: {
    data: { type: Object, required: true }
  },
  computed: {
    listType() {
      return this.data.type
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  padding-left: 20px;

  &.o-list-item {
    list-style-type: decimal;
  }
}
</style>
