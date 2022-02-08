<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>基础组件</p>
    <g-row class="row">
      <g-col span="8" class="jay">8</g-col>
      <g-col span="8" class="jay">8</g-col>
      <g-col span="8" class="jay">8</g-col>
    </g-row>
    <g-row>
      <g-col span="6" class="jay">6</g-col>
      <g-col span="6" class="jay">6</g-col>
      <g-col span="6" class="jay">6</g-col>
      <g-col span="6" class="jay">6</g-col>
    </g-row>
    <g-row>
      <g-col span="12" class="jay">12</g-col>
      <g-col span="12" class="jay">12</g-col>
    </g-row>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Row from "../../../src/grid/row";
  import Col from "../../../src/grid/col";

  export default {
    components: {
      'g-row': Row,
      'g-col': Col
    },
    data () {
      return {
        content: `
          <g-row class="row">-->
            <g-col span="8" class="jay">8</g-col>
            <g-col span="8" class="jay">8</g-col>
            <g-col span="8" class="jay">8</g-col>
          </g-row>
          <g-row>
            <g-col span="6" class="jay">6</g-col>
            <g-col span="6" class="jay">6</g-col>
            <g-col span="6" class="jay">6</g-col>
            <g-col span="6" class="jay">6</g-col>
          </g-row>
          <g-row>
            <g-col span="12" class="jay">12</g-col>
            <g-col span="12" class="jay">12</g-col>
          </g-row>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
<style lang="sass">
  .jay
    box-sizing: border-box
    border: 1px solid #40a9ff
</style>