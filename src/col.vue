<template>
    <div :class="{ [`col-${span}`]: span ? true : false, [`offset-${offset}`]: offset ? true : false}">
        <div class="content" :style="{paddingLeft: gutter ? gutter / 2 + 'px' : 0, paddingRight: gutter ? gutter / 2 + 'px': 0}">
            <slot></slot>
        </div>
    </div>
</template>
<script>
  export default {
    props: {
      span: {
        type: String
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
    created() {
        console.log('col created')
    },
    mounted() {
      console.log('col mounted')
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