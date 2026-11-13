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
            "text": "一 · 人为什么需要计算",
            "collapsed": false,
            "items": [
                  {
                        "text": "本篇路线",
                        "link": "/book/beginnings/"
                  },
                  {
                        "text": "少了一只羊吗？",
                        "link": "/computing/counting"
                  },
                  {
                        "text": "还能怎样记下来？",
                        "link": "/computing/representation"
                  },
                  {
                        "text": "记录怎样继续用？",
                        "link": "/computing/rules"
                  }
            ]
      },
      {
            "text": "二 · 怎样让机器代劳",
            "collapsed": true,
            "items": [
                  {
                        "text": "本篇路线",
                        "link": "/book/machines/"
                  }
            ]
      },
      {
            "text": "三 · 一台机器怎样处理不同问题",
            "collapsed": true,
            "items": [
                  {
                        "text": "本篇路线",
                        "link": "/book/programs/"
                  }
            ]
      },
      {
            "text": "四 · 怎样让计算适应更大的任务",
            "collapsed": true,
            "items": [
                  {
                        "text": "本篇路线",
                        "link": "/book/systems/"
                  }
            ]
      },
      {
            "text": "五 · 规则写不完时怎么办",
            "collapsed": true,
            "items": [
                  {
                        "text": "本篇路线",
                        "link": "/book/learning/"
                  }
            ]
      },
      {
            "text": "六 · 机器怎样处理语言与知识",
            "collapsed": true,
            "items": [
                  {
                        "text": "本篇路线",
                        "link": "/book/language/"
                  }
            ]
      },
      {
            "text": "七 · 从生成答案到参与行动",
            "collapsed": true,
            "items": [
                  {
                        "text": "本篇路线",
                        "link": "/book/agents/"
                  }
            ]
      },
      {
            "text": "八 · 当 AI 进入物理世界",
            "collapsed": true,
            "items": [
                  {
                        "text": "本篇路线",
                        "link": "/book/physical/"
                  }
            ]
      }
],
    search: { provider: 'local' },
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一节', next: '下一节' },
    lastUpdated: { text: '更新于' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/Kub3682/knowledge-garden' }]
  }
})
