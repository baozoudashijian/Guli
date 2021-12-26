<template>
  <div>
    <!--  <div class="component-group">-->
    <!--        <div class="section">-->
    <!--            <g-button>按钮</g-button>-->
    <!--            <g-button icon="setting">按钮</g-button>-->
    <!--            <g-button icon="setting" iconPosition="left">按钮</g-button>-->
    <!--            <g-button icon="setting" iconPosition="right">按钮</g-button>-->
    <!--            <g-button icon="setting" iconPosition="right" :loading="loading" @click="btnClick">按钮</g-button>-->
    <!--        </div>-->
    <!--        <div class="section">-->
    <!--            <g-button-group>-->
    <!--                <g-button icon="arrow-left">上一页</g-button>-->
    <!--                <g-button icon="loading" @click="btnClick">全部</g-button>-->
    <!--                <g-button icon="arrow-right" :loading="loading" icon-position="right">下一页</g-button>-->
    <!--            </g-button-group>-->
    <!--        </div>-->
    <!--        <div class="section">-->
    <!--            <g-button>-->
    <!--                <g-icon icon="setting"></g-icon>-->
    <!--            </g-button>-->
    <!--        </div>-->
    <!--        <div class="section">-->
    <!--            <g-button type="primary">Primary</g-button>-->
    <!--            <g-button type="success">Success</g-button>-->
    <!--            <g-button type="info">Info</g-button>-->
    <!--            <g-button type="warning">Warning</g-button>-->
    <!--            <g-button type="danger">Danger</g-button>-->
    <!--        </div>-->
    <!--    </div>-->
    <!--    <div class="component-group">-->
    <!--        <div class="section">-->
    <!--            <g-input :value="message"-->
    <!--                     :error="errMsg"-->
    <!--                     @input="handleInput"-->
    <!--                     @change="handleChange"-->
    <!--                     @focus="handleFocus"-->
    <!--                     @blur="handleBlur"-->
    <!--            ></g-input>-->
    <!--            <g-input value="只读" readonly ></g-input>-->
    <!--            <g-input value="disabled" disabled ></g-input>-->
    <!--        </div>-->
    <!--    </div>-->
    <!--    <div class="component-group">-->
    <!--      <g-row class="row">-->
    <!--        <g-col span="8" class="jay">8</g-col>-->
    <!--        <g-col span="8" class="jay">8</g-col>-->
    <!--        <g-col span="8" class="jay">8</g-col>-->
    <!--      </g-row>-->
    <!--      <g-row>-->
    <!--        <g-col span="6" class="jay">6</g-col>-->
    <!--        <g-col span="6" class="jay">6</g-col>-->
    <!--        <g-col span="6" class="jay">6</g-col>-->
    <!--        <g-col span="6" class="jay">6</g-col>-->
    <!--      </g-row>-->
    <!--      <g-row>-->
    <!--        <g-col span="12" class="jay">12</g-col>-->
    <!--        <g-col span="12" class="jay">12</g-col>-->
    <!--      </g-row>-->
    <!--      <g-row>-->
    <!--        <g-col span="20" class="jay">20</g-col>-->
    <!--        <g-col span="4" class="jay">4</g-col>-->
    <!--      </g-row>-->
    <!--      <g-row>-->
    <!--        <g-col span="7" class="jay">7</g-col>-->
    <!--        <g-col span="3" class="jay">3</g-col>-->
    <!--        <g-col span="14" class="jay">13</g-col>-->
    <!--      </g-row>-->
    <!--      <g-row gutter="20">-->
    <!--          <g-col span="6" offset="6" class="jay">-->
    <!--            <div style="width: 100%;height: 100%; border: 1px solid green"></div>-->
    <!--          </g-col>-->
    <!--          <g-col span="6" offset="6" class="jay">-->
    <!--            <div style="width: 100%;height: 100%; border: 1px solid green"></div>-->
    <!--          </g-col>-->
    <!--      </g-row>-->
    <!--      <g-row justify="start">-->
    <!--        <g-col span='8' class="jay">7</g-col>-->
    <!--        <g-col span='4' class="jay">3</g-col>-->
    <!--      </g-row>-->
    <!--      <g-row justify="end">-->
    <!--        <g-col span='8' class="jay">7</g-col>-->
    <!--        <g-col span='4' class="jay">3</g-col>-->
    <!--      </g-row>-->
    <!--      <g-row justify="center">-->
    <!--        <g-col span='8' class="jay">7</g-col>-->
    <!--        <g-col span='4' class="jay">3</g-col>-->
    <!--      </g-row>-->
    <!--      <g-row>-->
    <!--        <g-col span='24' :ipad="{span: 20}"  class="jay">7</g-col>-->
    <!--        <g-col span='24' :ipad="{span:20, offset: 2}" class="jay">3</g-col>-->
    <!--      </g-row>-->
    <!--      <g-row>-->
    <!--        <g-col span='20' offset='2' :ipad="{span: 10, offset: 2}" :narrowPc="{span: 6, offset: 2}" :pc="{span: 2, offset: 2}" :widePc="{span: 2, offset: 2}" class="jay">7</g-col>-->
    <!--        <g-col span='20' offset='2' :ipad="{span: 20, offset: 2}" :narrowPc="{span: 12, offset: 2}" :pc="{span: 18, offset: 2}" :widePc="{span: 18, offset: 2}" class="jay">3</g-col>-->
    <!--      </g-row>-->
    <!--    </div>-->
    <!--    <div class="component-group">-->
    <!--      <g-layout>-->
    <!--        <g-header>header</g-header>-->
    <!--        <g-content>content</g-content>-->
    <!--        <g-footer>footer</g-footer>-->
    <!--      </g-layout>-->
    <!--      <g-layout>-->
    <!--        <g-slider>sldier</g-slider>-->
    <!--        <g-layout>-->
    <!--          <g-header>header</g-header>-->
    <!--          <g-content>content</g-content>-->
    <!--          <g-footer>footer</g-footer>-->
    <!--        </g-layout>-->
    <!--      </g-layout>-->
    <!--      <g-layout>-->
    <!--        <g-layout>-->
    <!--          <g-header>header</g-header>-->
    <!--          <g-content>content</g-content>-->
    <!--          <g-footer>footer</g-footer>-->
    <!--        </g-layout>-->
    <!--        <g-slider>sldier</g-slider>-->
    <!--      </g-layout>-->
    <!--      <g-layout>-->
    <!--        <g-layout>-->
    <!--          <g-header>header</g-header>-->
    <!--          <g-layout>-->
    <!--            <g-slider>sldier</g-slider>-->
    <!--            <g-content>content</g-content>-->
    <!--          </g-layout>-->
    <!--        </g-layout>-->
    <!--        <g-footer>footer</g-footer>-->
    <!--      </g-layout>-->
    <!--    </div>-->
    <!--    <div class="component-group">-->
    <!--      <g-button @click="clickHandle" type="success">success</g-button>-->
    <!--      <g-button @click="clickHandle2" type="error">error</g-button>-->
    <!--      <g-button @click="clickHandle3" type="warning">warning</g-button>-->
    <!--    </div>-->
    <!--    <div class="component-group">-->
    <!--      <g-tabs :selected.sync="selectedTab" @update:selected="yyy">-->
    <!--        <g-tab-nav>-->
    <!--          <g-tab-nav-item name="user">用户管理</g-tab-nav-item>-->
    <!--          <g-tab-nav-item name="setting">配置管理</g-tab-nav-item>-->
    <!--          <g-tab-nav-item name="about" disabled>关于我们</g-tab-nav-item>-->
    <!--          <template v-slot:action>-->
    <!--            Header content-->
    <!--          </template>-->
    <!--        </g-tab-nav>-->
    <!--        <g-tab-content>-->
    <!--          <g-tab-content-panel name="user">用户管理</g-tab-content-panel>-->
    <!--          <g-tab-content-panel name="setting">配置管理</g-tab-content-panel>-->
    <!--          <g-tab-content-panel name="about">关于我们</g-tab-content-panel>-->
    <!--        </g-tab-content>-->
    <!--      </g-tabs>-->
    <!--    </div>-->
    <!--    <div class="component-group">-->
    <!--      <div style="overflow: hidden" @click="testClick">-->
    <!--        <div style="height: 200px"></div>-->
    <!--        <g-popover position="left" style="margin-left: 300px">-->
    <!--          <template slot="content">-->
    <!--            left-->
    <!--          </template>-->
    <!--          <g-button type="primary" style="color: #fff">Click me</g-button>-->
    <!--        </g-popover>-->
    <!--        <g-popover>-->
    <!--          <template slot="content">-->
    <!--            一段内容这是段内容这是一段内容这是段内容这是一段内容这是段内容这是一段内容这是段内容这是一段内容这是段内容这是一段内容这是段内容这是一段内容这是段内容这-->
    <!--          </template>-->
    <!--          <g-button type="primary" style="color: #fff">Click me</g-button>-->
    <!--        </g-popover>-->
    <!--        <g-popover position="bottom">-->
    <!--          <template slot="content">-->
    <!--            bottom-->
    <!--          </template>-->
    <!--          <g-button type="primary" style="color: #fff">Click me</g-button>-->
    <!--        </g-popover>-->
    <!--        <g-popover position="right">-->
    <!--          <template slot="content">-->
    <!--            right-->
    <!--          </template>-->
    <!--          <g-button type="primary" style="color: #fff">Click me</g-button>-->
    <!--        </g-popover>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <div class="component-group">-->
    <!--      <g-collapse @select="zzz">-->
    <!--        <g-collapse-panel title="一致性 Consistency" name="Consistency">-->
    <!--          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>-->
    <!--          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>-->
    <!--        </g-collapse-panel>-->
    <!--        <g-collapse-panel title="反馈 Feedback" name="Feedback">-->
    <!--          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>-->
    <!--          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>-->
    <!--        </g-collapse-panel>-->
    <!--        <g-collapse-panel title="效率 Efficiency" name="Efficiency">-->
    <!--          <div>简化流程：设计简洁直观的操作流程；</div>-->
    <!--          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>-->
    <!--          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>-->
    <!--        </g-collapse-panel>-->
    <!--        <g-collapse-panel title="可控 Controllability" name="Controllability">-->
    <!--          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>-->
    <!--          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>-->
    <!--        </g-collapse-panel>-->
    <!--      </g-collapse>-->
    <!--    </div>-->
    <div class="component-group">
      <g-cascader :source="source" >
        <g-input></g-input>
      </g-cascader>
    </div>

  </div>

</template>

<script>

  import Button from './button.vue'
  import ButtonGroup from './button-group.vue'
  import Icon from './icon.vue'
  import Input from './input.vue'
  import Col from './col.vue'
  import Row from './row.vue'
  import Layout from './layout.vue'
  import Header from './header.vue'
  import Content from './content.vue'
  import Footer from './footer.vue'
  import Slider from './slider.vue'
  import Tabs from './tabs.vue'
  import TabNav from './tab-nav.vue'
  import TabNavItem from './tab-nav-item.vue'
  import TabContent from './tab-content.vue'
  import TabContentPanel from './tab-content-panel.vue'
  import Popover from './popover.vue'
  import Collapse from './collapse.vue'
  import CollapsePanel from './collapse-panel.vue'
  import Cascader from './cascader.vue'

  export default {
    name: "App",
    data() {
      return {
        loading: false,
        message: '',
        message2: '',
        errMsg: '',
        selectedTab: 'user',
        source: [{
          name: '浙江',
          children: [
            {
              name: '杭州',
              children: [
                {name: '上城'},
                {name: '下城'},
                {name: '江干'},
              ]
            },
            {
              name: '嘉兴',
              children: [
                {name: '南湖'},
                {name: '秀洲'},
                {name: '嘉善'},
              ]
            },
          ]
        }, {
          name: '福建',
          children: [
            {
              name: '福州',
              children: [
                {name: '鼓楼'},
                {name: '台江'},
                {name: '仓山'},
              ]
            },
          ]
        },{
          name: '北京',
            children: [
              {
                name: '北京',
              },
            ]
          },{
          name: '上海'
          }]
      }
    },
    methods: {
      testClick() {
        console.log('stop')
      },
      zzz(value) {
        console.log(value)
      },
      yyy(value) {
        // console.log(value)
      },
      btnClick() {
        this.loading = !this.loading
      },
      clickHandle() {
        console.log(123)
        this.$toast('hello world', {
          autoClose: false,
          duration: 3,
          closeButtonText: 'exit',
          status: 'success',
          onClose() {
            console.log('你success关闭了toast')
          }
        })
      },
      clickHandle2() {
        this.$toast('error', {
          autoClose: true,
          duration: 3,
          closeButtonText: '关闭',
          status: 'error',
          onClose() {
            console.log('你error关闭了toast')
          }
        })
      },
      clickHandle3() {
        this.$toast('close', {
          autoClose: false,
          duration: 3,
          status: 'warning',
          onClose() {
            console.log('你warning关闭了toast')
          }
        })
      },
      handleInput(value) {
        if (value && Number(value) > 100) {
          this.errMsg = '你填写的信息有误'
        } else {
          this.errMsg = ''
        }
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
      'g-input': Input,
      'g-row': Row,
      'g-col': Col,
      'g-layout': Layout,
      'g-header': Header,
      'g-content': Content,
      'g-footer': Footer,
      'g-slider': Slider,
      'g-tabs': Tabs,
      'g-tab-nav': TabNav,
      'g-tab-nav-item': TabNavItem,
      'g-tab-content': TabContent,
      'g-tab-content-panel': TabContentPanel,
      'g-popover': Popover,
      'g-collapse': Collapse,
      'g-collapse-panel': CollapsePanel,
      'g-cascader': Cascader
    }
  }

</script>

<style scoped lang="sass">
  $col-height: 40px
  $background-even: rgba(0, 146, 255, .75)
  $background-odd: rgba(0, 0, 0, .2)

  .component-group
    margin-bottom: 100px

    &:last-child
      margin-bottom: 0

    .section
      margin-bottom: 10px

    .row
      margin-bottom: 20px

    .jay
      height: $col-height
      line-height: $col-height
      color: white
      text-align: center
      border: 1px solid $background-even

    .g-layout-header
      border: 1px solid pink
      line-height: 64px
      text-align: center

    .g-layout-content
      border: 1px solid slateblue
      text-align: center

    .g-layout-footer
      border: 1px solid greenyellow
      text-align: center

    .g-layout-slider
      display: flex
      align-items: center
      justify-content: center
      border: 1px solid cyan

</style>