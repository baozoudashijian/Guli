<template>
    <button class="g-button" :class="{ [`icon-${iconPosition}`]: iconPosition }" @click="$emit('click')">
        <svg v-if="loading" class="g-icon loading">
            <use :xlink:href=`#icon-loading`></use>
        </svg>
        <svg v-if="icon && !loading" class="g-icon">
            <use :xlink:href=`#icon-${icon}`></use>
        </svg>
        <span><slot></slot></span>
    </button>
</template>
<script>
  export default {
    props: {
      icon: {

      },
      iconPosition : {
        validator(value) {
          return value === "left" || value === "right"
        }
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      loading(newV,oldV) {
        // do something
        console.log(newV,oldV)
      }
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


            &:hover
                border-color: var(--border-color-hover)

            &:active
                background-color: var(--button-active-bg)
            .g-icon
                width: 1em
                height: 1em
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
</style>