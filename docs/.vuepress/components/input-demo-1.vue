<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>基础组件</p>
    <g-input></g-input>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Input from "../../../src/input/input";

  export default {
    components: {
      'g-input': Input
    },
    data () {
      return {
        content: `
          <g-input></g-input>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>