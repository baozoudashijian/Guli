<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>基础组件</p>
    <g-collapse @select="zzz">
      <g-collapse-panel title="一致性 Consistency" name="Consistency">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </g-collapse-panel>
      <g-collapse-panel title="反馈 Feedback" name="Feedback">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </g-collapse-panel>
      <g-collapse-panel title="效率 Efficiency" name="Efficiency">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </g-collapse-panel>
      <g-collapse-panel title="可控 Controllability" name="Controllability">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </g-collapse-panel>
    </g-collapse>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>

  import Collapse from "../../../src/collapse/collapse";
  import CollapsePanel from "../../../src/collapse/collapse-panel";

  export default {
    components: {
      'g-collapse': Collapse,
      'g-collapse-panel': CollapsePanel
    },
    data() {
      return {
        content: `
          <g-collapse @select="zzz">
            <g-collapse-panel title="一致性 Consistency" name="Consistency">
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </g-collapse-panel>
            <g-collapse-panel title="反馈 Feedback" name="Feedback">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </g-collapse-panel>
            <g-collapse-panel title="效率 Efficiency" name="Efficiency">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </g-collapse-panel>
            <g-collapse-panel title="可控 Controllability" name="Controllability">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </g-collapse-panel>
          </g-collapse>
      `.replace(/^ {8}/gm, '').trim()
      }
    },
    methods: {
      zzz(value) {
        console.log(value)
      }
    }
  }
</script>

<style lang="sass">
  .box
    width: 100%
    height: 150px
    background-color: rgb(54, 77, 121)
</style>