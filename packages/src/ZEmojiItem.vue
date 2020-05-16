<template>
  <span class="z-emoji-item">
    <img
      :src="png"
      :data-png="png"
      :data-gif="gif"
      :alt="text"
      :title="text"
      @mouseover="onMouseOver"
      @mouseout="onMouseOut"
      @click="onSelect(text)"
    />
  </span>
</template>

<script type="text/javascript">
import { pngMap, gifMap } from "./emoji";
import { getEmojiEl } from "./utils";

export default {
  name: "ZEmojiItem",

  props: {
    text: {
      type: String,
      require: true,
    },
  },

  computed: {
    gif() {
      return gifMap.get(this.text);
    },
    png() {
      return pngMap.get(this.text);
    },
  },

  methods: {
    onMouseOver(e) {
      const { gif } = e.target.dataset;
      e.target.src = gif;
    },

    onMouseOut(e) {
      const { png } = e.target.dataset;
      e.target.src = png;
    },

    onSelect(text) {
      this.$emit("select", text, getEmojiEl(text));
    },
  },
};
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
