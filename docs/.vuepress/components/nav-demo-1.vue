<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>基础组件</p>
    <g-nav :selected.sync="selected">
      <g-nav-item name="process">处理中心</g-nav-item>
      <g-subnav>
        <template slot="title">我的工作台</template>
        <g-nav-item name="logistics">物流管理</g-nav-item>
        <g-nav-item name="complaint">投诉管理</g-nav-item>
        <g-subnav>
          <template slot="title">商品管理</template>
          <g-nav-item name="addGoods">新增商品</g-nav-item>
          <g-nav-item name="removeGoods">下架商品</g-nav-item>
          <g-nav-item name="historyGoods">历史商品</g-nav-item>
        </g-subnav>
      </g-subnav>
      <g-nav-item name="message">消息中心</g-nav-item>
      <g-nav-item name="order">订单管理</g-nav-item>
    </g-nav>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Nav from "../../../src/nav/nav";
  import NavItem from "../../../src/nav/nav-item";
  import SubNav from "../../../src/nav/subnav";

  export default {
    components: {
      'g-nav': Nav,
      'g-nav-item': NavItem,
      'g-subnav': SubNav
    },
    data () {
      return {
        content: `
          <g-icon icon="setting"></g-icon>
          <g-icon icon="arrow-down"></g-icon>
          <g-icon icon="arrow-up"></g-icon>
      `.replace(/^ {8}/gm, '').trim(),
        selected: ['process']
      }
    }
  }
</script>