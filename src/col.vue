<template>
  <div :class="colClass">
    <div class="content" :style="gutterClass">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      span: {
        type: [Number, String, Object]
      },
      offset: {
        type: [Number, String, Object]
      },
      ipad: {
        type: [Number, String, Object]
      },
      narrowPc: {
        type: [Number, String, Object]
      },
      pc: {
        type: [Number, String, Object]
      },
      widePc: {
        type: [Number, String, Object]
      }
    },
    data() {
      return {
        gutter: 0
      }
    },
    computed: {
      colClass() {
        const {span, offset, ipad, narrowPc, pc, widePc} = this
        let config = []

        if (ipad instanceof Object) {
          config = [
            span && `col-${span.span} col-offset-${span.offset}`,
            ipad && `col-ipad-${ipad.span} col-ipad-offset-${ipad.offset}`,
            narrowPc && `col-narrowPc-${narrowPc.span} col-narrowPc-offset-${narrowPc.offset}`,
            pc && `col-pc-${pc.span} col-pc-offset-${pc.offset}`,
            widePc && `col-widePc-${widePc.span} col-widePc-offset-${widePc.offset}`,
          ]
        } else {
          config = [
            span && `col-${span}`,
            offset && `offset-${offset}`,
            ipad && `col-ipad-${ipad}`,
            narrowPc && `col-narrowPc-${narrowPc}`,
            pc && `col-pc-${pc}`,
            widePc && `col-widePc-${widePc}`,
          ]
        }

        return config
      },
      gutterClass() {
        const {gutter} = this
        return {
          paddingLeft: gutter ? gutter / 2 + 'px' : 0,
          paddingRight: gutter ? gutter / 2 + 'px' : 0
        }
      }
    },
    created() {
    },
    mounted() {
    }
  }
</script>
<style lang="sass" scoped>

    .content
      width: 100%
      height: 100%
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
</style>