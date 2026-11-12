import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Kub 的知识笔记',
  description: '从问题出发，理解计算与系统设计。',
  base: '/knowledge-garden/',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '计算的本质', link: '/computing/' },
      { text: '互动实验室', link: 'https://kub3682.github.io/embedded-computing-atlas/' }
    ],
    sidebar: {
      '/computing/': [
        { text: '计算的本质', items: [
          { text: '阅读路线', link: '/computing/' },
          { text: '少了一只羊吗？', link: '/computing/counting' },
          { text: '还能怎样记下来？', link: '/computing/representation' },
          { text: '记录怎样继续用？', link: '/computing/rules' }
        ] }
      ]
    },
    search: { provider: 'local' },
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '更新于' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/Kub3682/knowledge-garden' }]
  }
})
