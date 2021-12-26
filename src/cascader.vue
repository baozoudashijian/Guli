<template>
  <div class="cascader">
    <div class="trigger" @click="visible = !visible">
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
      source: Array
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
        this.selected = copy
        console.log(this.$slots)
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