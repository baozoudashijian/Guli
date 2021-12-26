<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <div class="content">
        <div class="menu">
          <div class="layer">
            <cacader-x :items="source"></cacader-x>
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
      }
    },
    components: {
      'cacader-x': CascaderX
    },
    methods: {
    },
    mounted() {
      console.log(this.source, 'source')
    }
  }
</script>

<style scoped lang="sass">
  .cascader
    .popover
      .content
        display: flex
        .menu
          border: 1px solid #3eaf7c

</style>