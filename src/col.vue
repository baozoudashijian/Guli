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
      }
    },
    data() {
        return {
            gutter: 0
        }
    },
    computed: {
      colClass() {
        const { span, offset } = this
        return [span && `col-${span}`, offset && `offset-${offset}`]
      },
      gutterClass() {
        const { gutter } = this
        return {
          paddingLeft: gutter ? gutter / 2 + 'px' : 0,
          paddingRight: gutter ? gutter / 2 + 'px': 0
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
    @for $i from 1 through 24
        .col-#{$i}
            width: $i / 24 * 100%

    @for $o from 1 through 24
        .offset-#{$o}
            margin-left: $o / 24 * 100%

    .content
        width: 100%
        height: 100%
</style>