<template>
  <div
    class="z-emoji"
    @mouseover.stop="onMouseOver"
    @mouseout.stop="onMouseOut"
    @click="onClick"
  >
    <div
      class="poper"
      :class="`poper-${placement}`"
      v-show="showEmoji"
    >
      <z-emoji-list
        class="poper-list"
        @select="onSelect"
      ></z-emoji-list>
    </div>
    <span>
      <template v-if="$slots.default">
        <slot></slot>
      </template>
      <img
        v-else
        src="./icon/png/1.png"
        alt="表情"
      >
    </span>
  </div>
</template>

<script>
import ZEmojiList from './ZEmojiList'

export default {
  props: {
    placement: {
      type: String,
      default: 'top-start'
    },
    trigger: {
      type: String,
      default: 'hover'
    }
  },

  data() {
    return {
      showEmoji: false
    }
  },

  components: {
    ZEmojiList
  },

  methods: {
    onClick() {
      if (this.trigger === 'click') {
        this.showEmoji = !this.showEmoji
      }
    },

    onMouseOver() {
      if (this.trigger === 'hover') {
        this.showEmoji = true
      }
    },

    onMouseOut() {
      if (this.trigger === 'hover') {
        this.showEmoji = false
      }
    },

    onSelect(code, el) {
      this.$emit('select', code, el)
    }
  }
}
</script>

<style lang="scss" scoped>
.z-emoji {
  display: inline-block;
  position: relative;
  .poper {
    position: absolute;
    z-index: 10;
    &:before {
      position: absolute;
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      transform: rotate(45deg);
      z-index: 1;
      background-color: #fff;
    }
    &-list {
      background-color: #fff;
      border: 1px solid #f0f0f0;
      box-shadow: 0 0 4px rgba(150, 150, 150, 0.5);
    }
    &-top {
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      &:before {
        left: 50%;
        margin-left: -6px;
        bottom: 4px;
        box-shadow: 2px 2px 2px rgba(150, 150, 150, 0.2);
      }
      .poper-list {
        margin-bottom: 8px;
      }
    }
    &-top-start {
      bottom: 24px;
      left: 0;
      &:before {
        left: 7px;
        bottom: 4px;
        box-shadow: 2px 2px 2px rgba(150, 150, 150, 0.2);
      }
      .poper-list {
        margin-bottom: 8px;
      }
    }
    &-top-end {
      bottom: 24px;
      right: 0;
      &:before {
        right: 7px;
        bottom: 4px;
        box-shadow: 2px 2px 2px rgba(150, 150, 150, 0.2);
      }
      .poper-list {
        margin-bottom: 8px;
      }
    }
    &-bottom {
      top: 24px;
      left: 50%;
      transform: translateX(-50%);
      &:before {
        left: 50%;
        margin-left: -6px;
        top: 4px;
        box-shadow: -2px -2px 2px rgba(150, 150, 150, 0.2);
      }
      .poper-list {
        margin-top: 8px;
      }
    }
    &-bottom-start {
      top: 24px;
      left: 0;
      &:before {
        left: 7px;
        top: 4px;
        box-shadow: -2px -2px 2px rgba(150, 150, 150, 0.2);
      }
      .poper-list {
        margin-top: 8px;
      }
    }
    &-bottom-end {
      top: 24px;
      right: 0;
      &:before {
        right: 7px;
        top: 4px;
        box-shadow: -2px -2px 2px rgba(150, 150, 150, 0.2);
      }
      .poper-list {
        margin-top: 8px;
      }
    }
    &-left {
      right: 24px;
      top: 50%;
      transform: translateY(-50%);
      &:before {
        top: 50%;
        margin-top: -6px;
        right: 4px;
        box-shadow: 2px -2px 2px rgba(150, 150, 150, 0.2);
      }
      .poper-list {
        margin-right: 8px;
      }
    }
    &-left-start {
      right: 24px;
      top: 0;
      &:before {
        top: 7px;
        right: 4px;
        box-shadow: 2px -2px 2px rgba(150, 150, 150, 0.2);
      }
      .poper-list {
        margin-right: 8px;
      }
    }
    &-left-end {
      right: 24px;
      bottom: 0;
      &:before {
        bottom: 7px;
        right: 4px;
        box-shadow: 2px -2px 2px rgba(150, 150, 150, 0.2);
      }
      .poper-list {
        margin-right: 8px;
      }
    }
    &-right {
      left: 24px;
      top: 50%;
      transform: translateY(-50%);
      &:before {
        top: 50%;
        margin-top: -6px;
        left: 4px;
        box-shadow: -2px 2px 2px rgba(150, 150, 150, 0.2);
      }
      .poper-list {
        margin-left: 8px;
      }
    }
    &-right-start {
      left: 24px;
      top: 0;
      &:before {
        top: 7px;
        left: 4px;
        box-shadow: -2px 2px 2px rgba(150, 150, 150, 0.2);
      }
      .poper-list {
        margin-left: 8px;
      }
    }
    &-right-end {
      left: 24px;
      bottom: 0;
      &:before {
        bottom: 7px;
        left: 4px;
        box-shadow: -2px 2px 2px rgba(150, 150, 150, 0.2);
      }
      .poper-list {
        margin-left: 8px;
      }
    }
  }
}
</style>
