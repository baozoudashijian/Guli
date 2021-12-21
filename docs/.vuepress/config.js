module.exports = {
  title: 'Hello Guli UI',
  description: 'Just playing around',
  base: '/gulidocs/',
  themeConfig: {
    sidebar: [
      {
        title: '快速上手',   // 必要的
        path: '/guide/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 0,    // 可选的, 默认值是 1
        // children: [
        //   '/'
        // ]
      }
      // {
      //   title: 'Group 2',
      //   children: [ /* ... */],
      //   initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      // }
    ]
    ,
    nav: [
      {text: '首页', link: '/'}
    ]
  }
}