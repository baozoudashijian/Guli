const path = require('path')
module.exports = {
  base: '/gulidocs/',
  title: '轱辘UI',
  description: '一个好用的UI框架',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/install/'},
      {text: '交流', link: 'https://google.com'},
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button'
        ]
      },

    ]
  },
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@src': path.resolve(__dirname, '../../src'),
  //     }
  //   }
  // }
}