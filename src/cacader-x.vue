<template>
  <div class="cascaderX">
    <div>
      {{sourceItem.name}}
    </div>
    <div v-if="sourceItem.children">
      <cascader-x v-for="item in sourceItem.children" :source-item="item"></cascader-x>
    </div>
  </div>

</template>

<script>
  export default {
    name: "cascader-x",
    props: ['sourceItem']
  }
</script>

<style scoped lang="sass">
  .cascaderX
    display: flex
    border: 1px solid #cc0000

</style>