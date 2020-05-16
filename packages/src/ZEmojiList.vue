<template>
  <div class="z-emoji-list" :style="{ width: listWidth, height: listHeight }">
    <z-emoji-item
      v-for="item in emojiList"
      :key="item.text"
      :text="item.text"
      @select="onSelect"
    >
    </z-emoji-item>
  </div>
</template>

<script>
import { emojiList } from "./emoji";
import ZEmojiItem from "./ZEmojiItem";

export default {
  name: "ZEmojiList",

  components: {
    ZEmojiItem,
  },

  props: {
    width: {
      type: [String, Number],
      default: "275px",
    },
    height: {
      type: [String, Number],
      default: "200px",
    },
  },

  data() {
    return {
      emojiList: emojiList,
    };
  },

  computed: {
    listWidth() {
      if (typeof this.width === "number") {
        return `${this.width}px`;
      }
      return this.width;
    },
    listHeight() {
      if (typeof this.height === "number") {
        return `${this.height}px`;
      }
      return this.height;
    },
  },

  methods: {
    onSelect(code, el) {
      this.$emit("select", code, el);
    },
  },
};
</script>

<style lang="scss" scoped>
.z-emoji-list {
  overflow: auto;
  padding: 10px;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
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
}
</style>
