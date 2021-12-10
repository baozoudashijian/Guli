
# Gulu - 一个Vue UI组件
[![Build Status](https://app.travis-ci.com/baozoudashijian/Guli.svg?branch=master)](https://app.travis-ci.com/baozoudashijian/Guli)

## 介绍
这是我在学习封装轮子的时候，做的一个基于Vue的UI框架。希望对你有用。
## 安装

## 开始使用

1.添加CSS样式
使用本框架前，请在CSS中开启border-box

```
*{box-sizing: border-box;}
```

你还需要设置默认颜色等变量
```
html {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
  }

  IE15 及以上浏览器都支持此样式。

```
2. 安装Guli

```
npm i --save Guli

```

3. 引入Guli

```
import {Button, ButtonGroup, Icon} from 'Guli'
import 'Guli/dist/index.css'

export default {
    name: 'app',
    components: {
        'g-button': Button,
        'g-icon': Icon
    }
}

```

4. 引入 Symbols

```
<script src="//at.alicdn.com/t/font_718972_1hhoomwpb69.js"></script>

```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码