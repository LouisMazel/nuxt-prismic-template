<template>
  <div
    class="profile-avatar flex flex-center flex-fixed"
    :style="[pictureSize, borderStyle]"
    :class="{
      'has-link': !!avatarUrl,
      editable,
      square
    }"
  >
    <router-link
      v-if="avatarUrl"
      :to="{ path: avatarUrl }"
      class="profile-avatar__avatar-link flex flex-center"
    >
      <img
        v-lazy="picturePath"
        alt="creator profile picture"
        class="profile-avatar__picture"
      />
    </router-link>
    <img
      v-else
      v-lazy="picturePath"
      alt="creator profile picture"
      class="profile-avatar__picture"
      @click="editable ? $emit('edit', $event) : null"
    />
    <button
      v-if="editable"
      type="button"
      class="profile-avatar__editable-layer flex flex-center"
      @click="$emit('edit', $event)"
    >
      <i class="material-icons" aria-hidden="true">
        edit
      </i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ProfileAvatar',
  props: {
    pictureSrc: { type: String, default: null },
    avatarUrl: { type: String, default: null },
    size: { type: Number, default: 80 },
    bordered: { type: Boolean, default: false },
    editable: { type: Boolean, default: false },
    square: { type: Boolean, default: false }
  },
  computed: {
    picturePath() {
      return this.pictureSrc || require('./svg/default-profile.svg')
    },
    pictureSize() {
      const { size } = this
      return {
        width: `${size}px`,
        height: `${size}px`
      }
    },
    borderStyle() {
      return this.bordered ? { border: '5px solid white' } : null
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-avatar {
  border-radius: 50%;
  overflow: hidden;
  text-align: center;
  position: relative;
  box-shadow: 3px 3px 14px 0 rgba(0, 0, 0, 0.2);

  img {
    transition: all 0.4s ease-in-out;
  }

  &__avatar-link {
    height: 100%;
  }

  $this: &;

  &.editable {
    #{$this}__editable-layer {
      position: absolute;
      opacity: 0;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      border: none;
      outline: none;
      border-radius: 100%;
      background-color: transparent;
      transition: all 0.3s ease-in-out;
      transform: scale(0);
      cursor: pointer;

      i {
        color: white;
      }
    }

    &:hover {
      img {
        filter: blur(1.5px);
      }

      #{$this}__editable-layer {
        opacity: 1;
        transform: scale(1);
        background-color: rgba(#5270ed, 0.4);
      }
    }
  }

  &.has-link {
    cursor: pointer;
  }

  &__picture {
    vertical-align: middle;
    height: 100%;
  }

  &.square {
    border-radius: 8px;
  }
}
</style>
