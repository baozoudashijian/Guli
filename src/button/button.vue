<template>
  <button class="g-button" :class="{ [`icon-${iconPosition}`]: iconPosition, [`btn-${type}`]: true }"
          @click="$emit('click')">
    <g-icon v-if="loading" class="loading" icon="loading"></g-icon>
    <g-icon v-if="icon &&!loading" :icon="icon"></g-icon>
    <span><slot></slot></span>
  </button>
</template>
<script>

  import Icon from '../icon/icon.vue'

  export default {
    props: {
      icon: {},
      iconPosition: {
        validator(value) {
          return value === "left" || value === "right"
        }
      },
      loading: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: "Primary"
      }
    },
    components: {
      'g-icon': Icon
    }
  }

</script>

<style lang="sass">
  @keyframes spin
    0%
      transform: rotate(0deg)
    100%
      transform: rotate(360deg)

  .g-button
    display: inline-flex
    justify-content: center
    align-items: center
    font-size: var(--font-size)
    height: var(--button-height)
    padding: 0 1em
    border-radius: var(--border-radius)
    border: 1px solid var(--border-color)
    background: var(--button-bg)
    vertical-align: middle
    margin-left: .1em
    outline: none
    -webkit-appearance: button


    &:hover
      border-color: var(--border-color-hover)

    &:active
      background-color: var(--button-active-bg)

    > span
      margin-left: .2em

    .loading
      animation: spin 2s infinite linear

  .icon-left
    > svg
      order: 1

    > span
      order: 2
      margin-left: .2em

  .icon-right
    > svg
      order: 2

    > span
      order: 1
      margin-left: 0
      margin-right: .2em

  .btn-primary
    background-color: var(--primary)

  .btn-primary:active
    background-color: var(--primary)
    opacity: 0.8

  .btn-success
    background-color: var(--success)

  .btn-success:active
    background-color: var(--success)
    opacity: 0.8

  .btn-info
    background-color: var(--info)

  .btn-info:active
    background-color: var(--info)
    opacity: 0.8

  .btn-warning
    background-color: var(--warning)

  .btn-warning:active
    background-color: var(--warning)
    opacity: 0.8

  .btn-danger
    background-color: var(--danger)

  .btn-danger:active
    background-color: var(--danger)
    opacity: 0.8
</style>