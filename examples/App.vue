<template>
  <div class="app">
    <z-emoji
      placement="top"
      trigger="click"
      @select="onSelect"
    ></z-emoji>
    選擇項：{{code}} <span v-html="el"></span>
  </div>
</template>

<script>
import ZEmoji from '../packages/src/ZEmoji'

export default {
  components: {
    ZEmoji
  },

  data() {
    return {
      code: '',
      el: ''
    }
  },

  methods: {
    onSelect(code, el) {
      this.code = code
      this.el = el
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  padding: 100px;
}
*,
*:after,
*:before {
  box-sizing: inherit;
}
</style>
