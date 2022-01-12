<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>基础组件</p>
    <g-button>按钮</g-button>
    <g-button icon="setting">按钮</g-button>
    <g-button icon="setting" iconPosition="left">按钮</g-button>
    <g-button icon="setting" iconPosition="right">按钮</g-button>
    <p>状态按钮</p>
    <g-button type="primary">Primary</g-button>
    <g-button type="success">Success</g-button>
    <g-button type="info">Info</g-button>
    <g-button type="warning">Warning</g-button>
    <g-button type="danger">Danger</g-button>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
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
          <g-button>按钮</g-button>
          <g-button icon="setting">按钮</g-button>
          <g-button icon="setting" iconPosition="left">按钮</g-button>
          <g-button icon="setting" iconPosition="right">按钮</g-button>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>