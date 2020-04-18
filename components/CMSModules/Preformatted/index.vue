<template>
  <pre class="preformatted">
    {{ data.text }}
  </pre>
</template>

<script>
export default {
  name: 'Preformatted',
  props: {
    data: { type: Object, required: true }
  }
}
</script>

<style lang="scss" scoped>
.preformatted {
  font-family: monospace, Monaco;
  font-size: 13px;
  line-height: 24px;
  background: #1d2230;
  padding: 10px 12px;
  color: #fff;
  border-radius: 4px;
  margin: 15px 0;
  white-space: pre-wrap;
}
</style>
