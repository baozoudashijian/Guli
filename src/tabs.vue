<template>
  <div>
    <slot></slot>
    <button @click="ck">点击</button>
  </div>
</template>

<script>
  export default {
    name: "tabs",
    data() {
      return {
        provideData: {
          foo: '123'
        }
      }
    },
    provide() {
      // 传一个对象才能inject
      return this.provideData
    },
    methods: {
      ck() {
        this.provideData =  {...this.provideData, foo: '456'}
      }
    },
    beforeUpdate() {
      console.log(this.provideData)
    }
  }
</script>

<style scoped>

</style>