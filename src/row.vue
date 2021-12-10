<template>
    <div class="row" :style="rowClass">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        gutter: {
            type: [String, Number]
        }
    },
    computed: {
      rowClass() {
          return {
              marginLeft: -this.gutter/2 + 'px',
              marginRight: -this.gutter / 2 + 'px'
          }
      }
    },
    created() {
    },
    mounted() {
        // 获取子组件
        this.$children.forEach((vm) => {
            // 更新子组件data属性
            vm.gutter = this.gutter
        })
    }
}
</script>
<style lang="sass" scoped>
    .row
        display: flex
</style>