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
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      },
      ipad: {
        type: [Number, String]
      },
      narrowPc: {
        type: [Number, String]
      },
      pc: {
        type: [Number, String]
      },
      widePc: {
        type: [Number, String]
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
        return [
          span && `col-${span}`,
          offset && `offset-${offset}`,
          ipad && `col-ipad-${ipad}`,
          narrowPc && `col-narrowPc-${narrowPc}`,
          pc && `col-pc-${pc}`,
          widePc && `col-widePc-${widePc}`,
        ]
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

    @for $o from 1 through 24
      .offset-#{$o}
        margin-left: $o / 24 * 100%

    .content
      width: 100%
      height: 100%
    @media (min-width: 375px)
      @for $i from 1 through 24
        .col-#{$i}
          width: $i / 24 * 100%
    @media (min-width: 577px)
      @for $i from 1 through 24
        .col-ipad-#{$i}
          width: $i / 24 * 100%

    @media (min-width: 769px)
      @for $i from 1 through 24
        .col-narrow-#{$i}
          width: $i / 24 * 100%

    @media (min-width: 993px)
      @for $i from 1 through 24
        .col-pc-#{$i}
          width: $i / 24 * 100%

    @media (min-width: 1201px)
      @for $i from 1 through 24
        .col-widePc-#{$i}
          width: $i / 24 * 100%
</style>