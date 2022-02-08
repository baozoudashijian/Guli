<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>基础组件</p>
    <g-icon icon="setting"></g-icon>
    <g-icon icon="arrow-down"></g-icon>
    <g-icon icon="arrow-up"></g-icon>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Icon from "../../../src/icon/icon";

  export default {
    components: {
      'g-icon': Icon
    },
    data () {
      return {
        content: `
          <g-icon icon="setting"></g-icon>
          <g-icon icon="arrow-down"></g-icon>
          <g-icon icon="arrow-up"></g-icon>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>