<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
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
      source: Array,
      selected: Array
    },
    data() {
      return {
        
      }
    },
    components: {
      'cacader-x': CascaderX
    },
    methods: {
      onUpdateSelected(copy) {
        this.$emit('update:selected', copy)
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