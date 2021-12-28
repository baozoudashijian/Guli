<template>
  <div class="cascader">
    <div class="trigger" @click="trigger">
      <slot></slot>
      <g-input :value="selectName"></g-input>
    </div>
    <div class="popover" v-if="visible">
      <div class="content">
        <div class="menu">
          <div class="layer">
            <cacader-x :selected="selected" :items="source" @update:selected="onUpdateSelected"></cacader-x>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import CascaderX from './cacader-x.vue'
  import Input from './input.vue'

  export default {
    name: "cascader",
    props: {
      source: Array,
      loadData: {
        type: Function
      }
    },
    data() {
      return {
        selected: [],
        visible: false
      }
    },
    computed: {
      selectName() {
        return this.selected.map(item => item.name).join(' / ')
      }
    },
    components: {
      'cacader-x': CascaderX,
      'g-input': Input
    },
    methods: {
      onUpdateSelected(copy) {
        // selected => ['level1', 'level2', 'level3']
        // 我点击选中的一定是数组的最后一项,因为后面的会被删除掉
        console.log(copy, '=> selected')
        this.selected = copy
        let id = copy[copy.length - 1].id
        this.loadData(id, this.updateSource)
      },
      updateSource(result, parentId) {
        // todo 插入正常后的source
        let copy = JSON.parse(JSON.stringify(this.source))
        console.log(copy, '=> copy')
        if(copy.length > 0) {
          // 根据parentId去找到result该放在哪个位置设置children
          copy.forEach((item) => {
            if(item.id === parentId) {
              item.children = result
            }
          })
        } else {
          copy = JSON.parse(JSON.stringify(result))
        }
        this.$emit('update:source', copy)
      }
      ,
      trigger() {
        this.visible = !this.visible
        if (this.visible) {
          this.loadData(0, this.updateSource)
        }
      }
    },
    mounted() {
    }
  }
</script>

<style scoped lang="sass">
  .cascader
    .popover
      .content
        display: flex

        .menu

</style>