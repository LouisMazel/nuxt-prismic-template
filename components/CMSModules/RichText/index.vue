<template>
  <div class="rich-text">
    <component
      :is="getComponent(item.type)"
      v-for="(item, i) in content"
      :key="`content-${i}`"
      :data="item"
    />
  </div>
</template>

<script>
import Title from '../Title'
import Paragraph from '../Paragraph'
import Preformatted from '../Preformatted'
import List from '../List'

export default {
  name: 'RichText',
  components: { Title, Paragraph, Preformatted, List },
  props: {
    content: { type: Array, required: true }
  },
  methods: {
    getComponent(t) {
      if (t.includes('heading')) return 'Title'
      if (t.includes('list-item')) return 'List'
      if (t === 'paragraph') return 'paragraph'
      if (t === 'preformatted') return 'preformatted'
      return 'Paragraph'
    }
  }
}
</script>
