<template>
  <div class="cascaderX" >
    <div class="left" v-if="items.length">
      <div v-for="(sourceItem,index) in items" :key="index" @click="onClickLabel(sourceItem)">
        {{sourceItem.name}}
        <div class="icon">
          <template v-if="arrowVisible(sourceItem) && sourceItem.name === loadItem.name">
            <g-icon class="loading" icon="loading"></g-icon>
          </template>
          <template v-else>
            <g-icon icon="arrow-right" v-if="arrowVisible(sourceItem)" ref="leaf"></g-icon>
          </template>
        </div>
      </div>
    </div>
    <div class="right" v-if="rightItems">
        <cascader-x :load-item="loadItem" :level="level+1" :selected="selected"  :items="rightItems" @update:selected="onUpdateSelected" @update:leaf="onUpdateLeaf"></cascader-x>
      </div>
  </div>

</template>

<script>
  import Icon from '../icon/icon.vue'
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
      },
      loadItem: {
        type: Object,
        default: () => ({})
      }
    },
    data() {
      return {
        leftSelected: null
      }
    },
    computed: {
      rightItems() {
        if(this.selected[this.level]) {
          let selected = this.items.filter((item) => item.name === this.selected[this.level].name)
          if(selected && selected[0].children && selected[0].children.length > 0) {
            return selected[0].children
          }
        }
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
        copy.splice(this.level)
        copy[this.level] = sourceItem
        this.$emit('update:selected', copy)
        this.$emit('update:leaf', this.$refs.leaf)
      },
      onUpdateSelected(copy) {
        // 其实他和cascader.vue中的文件的方法一样。
        this.$emit('update:selected', copy)
      },
      onUpdateLeaf(leaf) {
        this.$emit('update:leaf', leaf)
      },
      arrowVisible(sourceItem) {
        return (sourceItem.isLeaf !== undefined && !sourceItem.isLeaf) || (sourceItem.children && sourceItem.children.length > 0)
      }
    }
  }
</script>

<style scoped lang="sass">
  @keyframes spin
      0%
        transform: rotate(0deg)
      100%
        transform: rotate(360deg)
  .cascaderX
    display: flex
    cursor: pointer
    .left
      padding: 10px
      border: 1px solid #cc0000
      max-height: 180px
      overflow-y: scroll
      > div
        display: flex
        justify-content: flex-start
        align-items: center
        padding: .5em 0
        .icon 
          display: flex
          justify-content: center
          align-items: center
          margin-left: 1em
          transform: scale(1.5)
          .loading
            animation: spin 2s infinite linear
            transform: scale(0.1)
    .right
      margin-left: -1px

</style>