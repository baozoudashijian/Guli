<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>基础组件</p>
    <g-tabs :selected.sync="selectedTab" @update:selected="yyy">
      <g-tab-nav>
        <g-tab-nav-item name="user">用户管理</g-tab-nav-item>
        <g-tab-nav-item name="setting">配置管理</g-tab-nav-item>
        <g-tab-nav-item name="about" disabled>关于我们</g-tab-nav-item>
        <template v-slot:action>
          Header content
        </template>
      </g-tab-nav>
      <g-tab-content>
        <g-tab-content-panel name="user">用户管理</g-tab-content-panel>
        <g-tab-content-panel name="setting">配置管理</g-tab-content-panel>
        <g-tab-content-panel name="about">关于我们</g-tab-content-panel>
      </g-tab-content>
    </g-tabs>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Tabs from "../../../src/tab/tabs";
  import TabNav from "../../../src/tab/tab-nav";
  import TabNavItem from "../../../src/tab/tab-nav-item";
  import TabContent from "../../../src/tab/tab-content";
  import TabContentPanel from "../../../src/tab/tab-content-panel";

  export default {
    components: {
      'g-tabs': Tabs,
      'g-tab-nav': TabNav,
      'g-tab-nav-item': TabNavItem,
      'g-tab-content': TabContent,
      'g-tab-content-panel': TabContentPanel,
    },
    data () {
      return {
        content: `
          <g-tabs :selected.sync="selectedTab" @update:selected="yyy">
            <g-tab-nav>
              <g-tab-nav-item name="user">用户管理</g-tab-nav-item>
              <g-tab-nav-item name="setting">配置管理</g-tab-nav-item>
              <g-tab-nav-item name="about" disabled>关于我们</g-tab-nav-item>
              <template v-slot:action>
                Header content
              </template>
            </g-tab-nav>
            <g-tab-content>
              <g-tab-content-panel name="user">用户管理</g-tab-content-panel>
              <g-tab-content-panel name="setting">配置管理</g-tab-content-panel>
              <g-tab-content-panel name="about">关于我们</g-tab-content-panel>
            </g-tab-content>
          </g-tabs>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>