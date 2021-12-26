<template>
  <div class="cascader">
    <div class="trigger" @click="visible = !visible">
      <slot></slot>
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
    components: {
      'cacader-x': CascaderX
    },
    methods: {
      onUpdateSelected(copy) {
        this.selected = copy
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