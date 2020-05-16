<template>
  <span class="z-emoji-item">
    <img
      :src="item.png"
      :data-png="item.png"
      :data-gif="item.gif"
      :alt="item.text"
      :title="item.title"
      @mouseover="onMouseOver"
      @mouseout="onMouseOut"
      @click="onSelect(item.text)"
    >
  </span>
</template>

<script type="text/javascript">
import { getEmojiEl } from './utils'

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  methods: {
    onMouseOver(e) {
      const { gif } = e.target.dataset
      e.target.src = gif
    },

    onMouseOut(e) {
      const { png } = e.target.dataset
      e.target.src = png
    },

    onSelect(text) {
      this.$emit('select', text, getEmojiEl(text))
    }
  }
}
</script>

<style lang="scss" scoped>
.z-emoji-item {
  display: inline-block;
  vertical-align: top;
  margin: 2px;
  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
}
</style>
