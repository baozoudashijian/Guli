<template>
   <div class="cascader">
     <cacader-x v-for="item in source" :source-item="item"></cacader-x>
   </div>

</template>

<script>
  import CascaderX from './cacader-x.vue'
  export default {
    name: "cascader",
    props: {
      source: Array
    },
    components: {
      'cacader-x': CascaderX
    },
    mounted() {
      console.log(this.source, 'source')
    }
  }
</script>

<style scoped lang="sass">

</style>