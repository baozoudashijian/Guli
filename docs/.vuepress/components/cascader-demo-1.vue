<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>基础组件</p>
    <g-cascader
            :source="source"
    >
    </g-cascader>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>

  import Cascader from "../../../src/cascader/cascader";

  export default {
    components: {
      'g-cascader': Cascader
    },
    data() {
      return {
        content: `
          <g-cascader
            :source="source"
    >
    </g-cascader>
      `.replace(/^ {8}/gm, '').trim(),
        source: [{
          name: '浙江',
          children: [
            {
              name: '杭州',
              children: [
                {name: '上城'},
                {name: '下城'},
                {name: '江干'},
              ]
            },
            {
              name: '嘉兴',
              children: [
                {name: '南湖'},
                {name: '秀洲'},
                {name: '嘉善'},
              ]
            },
          ]
        }, {
          name: '福建',
          children: [
            {
              name: '福州',
              children: [
                {name: '鼓楼'},
                {name: '台江'},
                {name: '仓山'},
              ]
            },
          ]
        }]
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