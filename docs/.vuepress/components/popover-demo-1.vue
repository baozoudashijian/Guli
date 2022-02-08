<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>基础组件</p>
    <g-popover position="left" >
      <template slot="content">
        left
      </template>
      <g-button type="primary" style="color: #fff">Click me</g-button>
    </g-popover>
    <g-popover>
      <template slot="content">
        一段内容这是段内容这是一段内容这是段内容这是一段内容这是段内容这是一段内容这是段内容这是一段内容这是段内容这是一段内容这是段内容这是一段内容这是段内容这
      </template>
      <g-button type="primary" style="color: #fff">Click me</g-button>
    </g-popover>
    <g-popover position="bottom">
      <template slot="content">
        bottom
      </template>
      <g-button type="primary" style="color: #fff">Click me</g-button>
    </g-popover>
    <g-popover position="right">
      <template slot="content">
        right
      </template>
      <g-button type="primary" style="color: #fff">Click me</g-button>
    </g-popover>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Popover from "../../../src/popover/popover";
  import Button from "../../../src/button/button";

  export default {
    components: {
      'g-popover': Popover,
      'g-button': Button
    },
    data() {
      return {
        content: `
          <g-popover position="left" >
            <template slot="content">
              left
            </template>
            <g-button type="primary" style="color: #fff">Click me</g-button>
          </g-popover>
          <g-popover>
            <template slot="content">
              一段内容这是段内容这是一段内容这是段内容这是一段内容这是段内容这是一段内容这是段内容这是一段内容这是段内容这是一段内容这是段内容这是一段内容这是段内容这
            </template>
            <g-button type="primary" style="color: #fff">Click me</g-button>
          </g-popover>
          <g-popover position="bottom">
            <template slot="content">
              bottom
            </template>
            <g-button type="primary" style="color: #fff">Click me</g-button>
          </g-popover>
          <g-popover position="right">
            <template slot="content">
              right
            </template>
            <g-button type="primary" style="color: #fff">Click me</g-button>
          </g-popover>
      `.replace(/^ {8}/gm, '').trim()
      }
    },
    methods: {
      yyy() {

      }
    }
  }
</script>