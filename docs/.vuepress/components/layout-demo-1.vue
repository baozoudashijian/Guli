<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>基础组件</p>
    <g-layout>
      <g-slider>sldier</g-slider>
      <g-layout>
        <g-header>header</g-header>
        <g-content>content</g-content>
        <g-footer>footer</g-footer>
      </g-layout>
    </g-layout>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Layout from "../../../src/layout/layout";
  import Header from "../../../src/layout/header";
  import Content from "../../../src/layout/content";
  import Footer from "../../../src/layout/footer";
  import Slider from "../../../src/layout/slider";

  export default {
    components: {
      'g-layout': Layout,
      'g-header': Header,
      'g-content': Content,
      'g-footer': Footer,
      'g-slider': Slider,
    },
    data() {
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
<style lang="sass">
  .g-layout-header
    border: 1px solid pink
    line-height: 64px
    text-align: center

  .g-layout-content
    border: 1px solid slateblue
    text-align: center

  .g-layout-footer
    border: 1px solid greenyellow
    text-align: center

  .g-layout-slider
    display: flex
    align-items: center
    justify-content: center
    border: 1px solid cyan
</style>