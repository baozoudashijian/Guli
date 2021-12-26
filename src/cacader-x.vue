<template>
  <div class="cascaderX" >
    <div class="left">
      <div v-for="(sourceItem,index) in items" :key="index" @click="onClickLabel(sourceItem)">
        {{sourceItem.name}}
        <div class="icon">
          <g-icon icon="arrow-right" v-if="sourceItem.children"></g-icon>
        </div>
      </div>
    </div>
    <div class="right" v-if="rightItems">
        <cascader-x :level="level+1" :selected="selected"  :items="rightItems" @update:selected="onUpdateSelected"></cascader-x>
      </div>
  </div>

</template>

<script>
  import Icon from './icon.vue'
  export default {
    name: "cascader-x",
    props: {
      items: {
        type: Array
      },
      selected: {
        type: Array,
        default: () => []
      },
      level: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        leftSelected: null
      }
    },
    computed: {
      rightItems() {
        // if(this.selected[this.level] && this.selected[this.level].children) {
          return this.selected[this.level] && this.selected[this.level].children || null
        // } else {
        //   return null
        // }
      }
    },
    components: {
      'g-icon': Icon
    },
    methods: {
      onClickLabel(sourceItem) {
        // selected: 选中的数据
        // 一般我们使用深拷贝
        let copy = JSON.parse(JSON.stringify(this.selected))
        copy[this.level] = sourceItem
        this.$emit('update:selected', copy)
      },
      onUpdateSelected(copy) {
        // 其实他和cascader.vue中的文件的方法一样。
        this.$emit('update:selected', copy)
      }
    }
  }
</script>

<style scoped lang="sass">
  .cascaderX
    display: flex
    cursor: pointer
    .left 
      padding: 10px
      border: 1px solid #cc0000
      > div
        display: flex
        justify-content: center
        align-items: center
        padding: .5em 0
        .icon 
          display: flex
          justify-content: center
          align-items: center
          margin-left: 1em
          transform: scale(1.5)
    .right
      margin-left: -1px

</style>