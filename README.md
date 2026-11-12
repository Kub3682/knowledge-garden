# Kub 的知识笔记

用 Markdown 编写，VitePress 构建，GitHub Pages 发布。

本地使用 Node.js 22，运行：

```sh
npm ci
npm run docs:dev
```

打开终端输出的本地网址。预览打包结果可运行 npm run docs:build，再运行 npm run docs:preview。

文章放在 docs/computing，图片放在 docs/public/images。Markdown 中引用图片可使用 /images/文件名。

提交到 main 后，Actions 自动构建并部署。增加专题或文章后，在 docs/.vitepress/config.mts 中更新导航。
