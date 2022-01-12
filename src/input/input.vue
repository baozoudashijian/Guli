<template>
  <div class="wrapper">
    <input :value="value" type="text"
           :disabled="disabled"
           :readonly="readonly"
           @input="$emit('input', $event.target.value)"
           @change="$emit('change', $event.target.value)"
           @focus="$emit('focus', $event.target.value)"
           @blur="$emit('blur', $event.target.value)"
    >
    <template v-if="error">
      <g-icon icon="error"></g-icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>
<script>

  import Icon from '../icon/icon.vue'

  export default {
    name: 'input',
    props: {
      value: {
        type: String
      },
      error: {
        type: String
      },
      readonly: {
        type: [Boolean, String],
        default: false
      },
      disabled: {
        type: [Boolean, String],
        default: false
      }
    },
    components: {
      'g-icon': Icon
    }
  }
</script>
<style lang="sass" scoped>
  @import "src/var"
  .wrapper
    font-size: $font-size
    display: inline-flex
    align-items: center

    > :not(:last-child)
      margin-right: .5em

    > input
      height: 32px
      border: 1px solid $border-color
      border-radius: $border-radius
      padding: 0 8px
      font-size: inherit
      outline: none

      &:hover
        border-color: $border-color-hover

      &:focus
        box-shadow: inset 0 1px 3px $box-shadow-color
        opacity: .5
        border: 1px solid $border-color-hover

      &[disabled], &[readonly]
        border-color: #bbb
        cursor: not-allowed

    &.error
      > input
        border-color: $red

    .icon-error
      fill: $red

    .errorMessage
      color: $red


</style>
