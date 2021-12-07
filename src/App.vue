<template>
<div>
  <div class="component-group">
        <div class="section">
            <g-button>按钮</g-button>
            <g-button icon="setting">按钮</g-button>
            <g-button icon="setting" iconPosition="left">按钮</g-button>
            <g-button icon="setting" iconPosition="right">按钮</g-button>
            <g-button icon="setting" iconPosition="right" :loading="loading" @click="btnClick">按钮</g-button>
        </div>
        <div class="section">
            <g-button-group>
                <g-button icon="arrow-left">上一页</g-button>
                <g-button icon="loading" @click="btnClick">全部</g-button>
                <g-button icon="arrow-right" :loading="loading" icon-position="right">下一页</g-button>
            </g-button-group>
        </div>
        <div class="section">
            <g-button>
                <g-icon icon="setting"></g-icon>
            </g-button>
        </div>
        <div class="section">
            <g-button type="primary">Primary</g-button>
            <g-button type="success">Success</g-button>
            <g-button type="info">Info</g-button>
            <g-button type="warning">Warning</g-button>
            <g-button type="danger">Danger</g-button>
        </div>
    </div>
    <div class="component-group">
        <div class="section">
            <g-input :value="message" @input="handleInput" @change="handleChange" @focus="handleFocus" @blur="handleBlur"></g-input>
            {{message}}
        </div>
    </div>

</div>

</template>

<script>

  import Button from './button.vue'
  import ButtonGroup from './button-group.vue'
  import Icon  from './icon.vue'
  import Input from './input.vue'

  export default {
    name: "App",
    data() {
      return {
        loading: false,
        message: '',
        message2: ''
      }
    },
    methods: {
      btnClick() {
        this.loading = !this.loading
      },
      handleInput(value) {
        this.message = value
      },
      handleChange(value) {
        console.log(value)
      },
      handleFocus(value) {
        console.log(value)
      },
      handleBlur(value) {
        console.log(value)
      }
    },
    components: {
      'g-button': Button,
      'g-button-group': ButtonGroup,
      'g-icon': Icon,
      'g-input': Input
    }
  }

</script>

<style scoped lang="sass">

.component-group
    margin-bottom: 100px
    &:last-child
      margin-bottom: 0
    .section
        margin-bottom: 10px

</style>