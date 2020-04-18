<template>
  <p class="paragraph">
    {{ data.text }}
  </p>
</template>

<script>
export default {
  name: 'Paragraph',
  props: {
    data: { type: Object, required: true }
  }
}
</script>
