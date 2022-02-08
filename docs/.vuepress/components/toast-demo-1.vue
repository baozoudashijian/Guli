<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>基础组件</p>
    <g-button @click="clickHandle2" type="error">error</g-button>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Icon from "../../../src/icon/icon";
  import Button from "../../../src/button/button";
  import {Toast} from '../../../src/toast/plugin.js'

  Vue.use(Toast)

  export default {
    components: {
      'g-icon': Icon,
      'g-button': Button,

    },
    data() {
      return {
        content: `
          import {Toast} from '../../../src/toast/plugin.js'

          Vue.use(Toast)
      `.replace(/^ {8}/gm, '').trim()
      }
    },
    methods: {
      clickHandle2() {
        this.$toast('error', {
          autoClose: true,
          duration: 3,
          closeButtonText: '关闭',
          status: 'error',
          onClose() {
            console.log('你error关闭了toast')
          }
        })
      }
    }
  }
</script>

