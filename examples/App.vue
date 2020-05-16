<template>
  <div class="app">
    <!-- <div>
      <z-emoji trigger="click" @select="onSelect"> </z-emoji>
      選擇項：{{ code }} <span v-html="el"></span>
    </div> -->
    <!-- <div>
      <z-emoji-list></z-emoji-list>
    </div> -->
    <div>
      <z-emoji-item text="[大哭]"></z-emoji-item>
      <z-emoji-item text="[微笑]"></z-emoji-item>
      <z-emoji-item text="[调皮]"></z-emoji-item>
      <z-emoji-item text="[衰]"></z-emoji-item>
    </div>
  </div>
</template>

<script>
// import ZEmoji from "../packages/src/ZEmoji";
// import ZEmojiList from "../packages/src/ZEmojiList";
import ZEmojiItem from "../packages/src/ZEmojiItem";

export default {
  components: {
    // ZEmoji,
    // ZEmojiList,
    ZEmojiItem,
  },

  data() {
    return {
      code: "",
      el: "",
    };
  },

  methods: {
    onSelect(code, el) {
      this.code = code;
      this.el = el;
    },
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  padding: 300px;
}
*,
*:after,
*:before {
  box-sizing: inherit;
}
</style>
