<template>
  <div v-if="active" :class="panelClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "tab-content-panel",
    inject: ['EventBus'],
    props: {
      name: String
    },
    data() {
      return {
        active: false
      }
    },
    created() {
      this.EventBus.$on('update:selected', (name) => {
        this.active = name === this.name
      })
    },
    computed: {
      panelClass() {
        return {
          activeClass: this.active
        }
      }
    },
    methods: {

    }
  }
</script>

<style scoped lang="sass">

  .activeClass


</style>