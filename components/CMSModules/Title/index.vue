<template>
  <component :is="getTag(data.type)" class="title">
    {{ data.text }}
  </component>
</template>

<script>
export default {
  name: 'Title',
  props: {
    data: { type: Object, required: true }
  },
  methods: {
    getTag(t) {
      return `h${t.charAt(t.length - 1)}`
    }
  }
}
</script>
