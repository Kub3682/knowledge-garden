import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '计算的本质',
  description: '从记录与计算，到学习与行动。',
  base: '/knowledge-garden/',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '全书路线', link: '/' },
      { text: '互动实验室', link: 'https://kub3682.github.io/embedded-computing-atlas/' }
    ],
    sidebar: [
  {
    "text": "序言",
    "link": "/"
  },
  {
    "text": "一 · 计算的起点",
    "collapsed": false,
    "items": [
      {
        "text": "人为什么需要计算",
        "link": "/book/beginnings/"
      },
      {
        "text": "实验 · 核对数量",
        "link": "/computing/counting"
      },
      {
        "text": "实验 · 留下记录",
        "link": "/computing/representation"
      },
      {
        "text": "实验 · 运算与判断",
        "link": "/computing/rules"
      }
    ]
  },
  {
    "text": "二 · 机器代劳",
    "link": "/book/machines/"
  },
  {
    "text": "三 · 程序与 CPU",
    "link": "/book/programs/"
  },
  {
    "text": "四 · 并行与协作",
    "link": "/book/systems/"
  },
  {
    "text": "五 · 从数据中学习",
    "link": "/book/learning/"
  },
  {
    "text": "六 · 语言与模型",
    "link": "/book/language/"
  },
  {
    "text": "七 · 从回答到行动",
    "link": "/book/agents/"
  },
  {
    "text": "八 · 进入物理世界",
    "link": "/book/physical/"
  },
  {
    "text": "附录 · 延伸阅读",
    "link": "/reading"
  }
],
    search: { provider: 'local' },
    outline: { label: '本章', level: [2, 3] },
    docFooter: { prev: '上一节', next: '下一节' },
    lastUpdated: { text: '更新于' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/Kub3682/knowledge-garden' }]
  }
})
