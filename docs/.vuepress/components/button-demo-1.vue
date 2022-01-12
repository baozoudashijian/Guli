<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>预览</p>
    <g-button>点击</g-button>
  </div>
</template>
<script>

  import Button from "../../../src/button/button.vue";

  export default {
    components: {
      'g-button': Button
    },
    data () {
      return {
        content: `
          <g-button>默认按钮</g-button>
          <g-button icon="settings">默认按钮</g-button>
          <g-button :loading="true">默认按钮</g-button>
          <g-button disabled>默认按钮</g-button>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>