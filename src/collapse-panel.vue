<template>
  <div class="collapse-panel">
    <div class="title" @click="btnClick">
      {{title}}
      <g-icon class="iconClass" :icon="iconName"></g-icon>
    </div>
    <div class="content" v-if="isShow">
      <slot></slot>
    </div>

  </div>
</template>

<script>
  import Icon from './icon.vue'
  export default {
    name: "collapse-panel",
    inject: ['EventBus'],
    props: {
      title: String,
      name: String
    },
    components: {
      'g-icon': Icon
    },
    data() {
      return {
        isShow: false,
        iconName: 'arrow-right'
      }
    },
    mounted() {
      this.EventBus.$on('update:selected', (selected) => {
        // console.log(selected, 'selected')
        if(selected.includes(this.name)) {
          this.isShow = true
          this.iconName = "arrow-down"
        } else {
          this.isShow = false
          this.iconName = "arrow-right"
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
      /*padding-bottom: 0*/
      /*border-bottom: none*/
    .title
      display: flex
      align-items: center
      padding: 10px 0
      border-bottom: 1px solid #ccc
      cursor: pointer
      .iconClass
        margin-left: auto
    .content
      transition: all 1s
</style>