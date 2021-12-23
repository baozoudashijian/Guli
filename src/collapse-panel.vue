<template>
  <div class="collapse-panel">
    <div class="title" @click="btnClick">
      {{title}}
    </div>
    <div class="content" v-if="isShow">
      <slot></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "collapse-panel",
    inject: ['EventBus'],
    props: {
      title: String,
      name: String
    },
    data() {
      return {
        isShow: false
      }
    },
    mounted() {
      this.EventBus.$on('update:selected', (selected) => {
        // console.log(selected, 'selected')
        if(selected.includes(this.name)) {
          this.isShow = true
        } else {
          this.isShow = false
        }
      })
    },
    methods: {
      btnClick() {
        this.EventBus.$emit('add:selected', this.name)
      }
    }
  }
</script>

<style scoped lang="sass">
  .collapse-panel
    &:first-child > .title
      padding-top: 0
    &:last-child > .title
      padding-bottom: 0
      border-bottom: none
    .title
      padding: 10px 0
      border-bottom: 1px solid #ccc
      cursor: pointer
</style>