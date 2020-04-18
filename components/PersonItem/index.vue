<template>
  <div
    class="person-item flex direction-column align-center"
    :class="{
      'no-elevation': noElevation,
      'has-name': person.name
    }"
    :style="[maxWidth]"
  >
    <ProfileAvatar
      :picture-src="person.avatar"
      :avatar-url="person.url"
      :size="size"
      bordered
      class="person-item__image"
    />
    <h2
      v-if="person.name"
      class="person-item__name bold-family text-center my-3"
    >
      {{ person.name | uppercase }}
    </h2>
  </div>
</template>

<script>
import ProfileAvatar from '~/components/ProfileAvatar'

export default {
  name: 'PersonItem',
  components: {
    ProfileAvatar
  },
  props: {
    person: { type: Object, required: true },
    noElevation: { type: Boolean, default: false },
    size: { type: Number, default: 80 }
  },
  computed: {
    maxWidth() {
      return {
        maxWidth: `${this.size + 80}px`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.person-item {
  margin-bottom: -15px;
  transition: transform 0.3s;
  padding: 0 20px;

  &.has-name {
    margin-bottom: -5px;
  }

  &:hover:not(.no-elevation) {
    transform: translateY(-5px);
  }

  &__name {
    position: relative;
    top: -5px;
  }
}
</style>
