<template>
  <div class="row" :class="justifyClass" :style="rowClass">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: {
      gutter: {
        type: [String, Number]
      },
      justify: {
        type: String,
        validator(value) {
          let flag = ['start', 'end', 'center'].includes(value)
          if (!flag) {
            console.error('justify只能是start,end,center中其中一种')
            return false
          } else {
            return true
          }
        }
      }
    },
    computed: {
      rowClass() {
        return {
          marginLeft: -this.gutter / 2 + 'px',
          marginRight: -this.gutter / 2 + 'px'
        }
      },
      justifyClass() {
        return [this.justify && `row-${this.justify}`]
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
    flex-wrap: wrap
    @media (min-width: 375px)
      @for $i from 1 through 24
        .col-#{$i}
          width: $i / 24 * 100%
        .col-offset-#{$i}
          margin-left: $i / 24 * 100%
    @media (min-width: 577px)
      @for $i from 1 through 24
        .col-ipad-#{$i}
          width: $i / 24 * 100%
        .col-ipad-offset-#{$i}
          margin-left: $i / 24 * 100%

    @media (min-width: 769px)
      @for $i from 1 through 24
        .col-narrow-#{$i}
          width: $i / 24 * 100%
        .col-narrow-offset-#{$i}
          margin-left: $i / 24 * 100%

    @media (min-width: 993px)
      @for $i from 1 through 24
        .col-pc-#{$i}
          width: $i / 24 * 100%
        .col-pc-offset-#{$i}
          margin-left: $i / 24 * 100%


    @media (min-width: 1201px)
      @for $i from 1 through 24
        .col-widePc-#{$i}
          width: $i / 24 * 100%
        .col-widePc-offset-#{$i}
          margin-left: $i / 24 * 100%

    .row-start
      justify-content: flex-start

    .row-end
      justify-content: flex-end

    .row-center
      justify-content: center

</style>