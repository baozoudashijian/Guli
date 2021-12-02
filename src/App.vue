<template>
    <div>
        <div class="section">
            <g-button></g-button>
            <g-button icon="setting">按钮</g-button>
            <g-button icon="setting" iconPosition="left">按钮</g-button>
            <g-button icon="setting" iconPosition="right">按钮</g-button>
        </div>
        <div class="section">
            <g-button-group>
                <g-button icon="arrow-left">上一页</g-button>
                <g-button>全部</g-button>
                <g-button icon="arrow-right" icon-position="right">下一页</g-button>
            </g-button-group>
        </div>
    </div>
</template>

<script>
  import Button from './button.vue'
  import ButtonGroup from './button-group.vue'

  export default {
    name: "App",
    components: {
      'g-button': Button,
      'g-button-group': ButtonGroup
    }
  }
</script>

<style scoped lang="sass">
    .section
        margin-bottom: 10px

</style>