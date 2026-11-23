---
description: 从牧人问 A07 是否归栏出发，了解词元、向量、注意力、生成与证据。
outline: [2, 2]
---

# 第六篇 · 机器怎样回答牧人的话？

「A07 回来了吗？」

如果只给机器看「应归 12，已归 12」两个数，它还少一份证据。牧人把甲栏名单也递过去。出栏表里有 A07，归栏表少了 A07，却多出一个 B07。那件旧事又回来了。

<div class="record-pair">
  <div><span class="visual-label">数量</span><strong>12 = 12</strong><small>出栏与归栏一样多</small></div>
  <div><span class="visual-label">身份</span><strong>A07 缺 · B07 多</strong><small>甲栏的两份名单对不上</small></div>
</div>

## 一句话怎样变成可以算的东西？

模型先把文本切成**词元**。词元可能是一个字、一段词或一个符号，切法由分词器决定。模型把每个词元转成一个向量，一段话就成为一串向量。

<figure class="story-flow" aria-label="文本转换成词元，词元转换成向量，最后计算接下来生成什么">
  <div><span class="visual-label">输入文本</span><strong>A07 回来了吗？</strong></div>
  <span aria-hidden="true">→</span>
  <div><span class="visual-label">内部表示</span><strong>一串词元向量</strong></div>
  <span aria-hidden="true">→</span>
  <div><span class="visual-label">一次生成</span><strong>下一个词元的概率</strong></div>
</figure>

第四篇的向量，每个位置代表哪一栏，是人事先约定的。这里向量里的数值会随训练调整，含义通常体现在许多分量的组合里。Transformer 的**注意力**让模型在处理一个位置时，按计算出的权重利用上下文里其他允许看到的位置。它因此可以把问句里的 A07 和前文的记录联系起来。 [《Attention Is All You Need》](https://arxiv.org/abs/1706.03762)

## 会回答，怎样才能答得有据？

GPT 一类模型会根据已有上下文给出下一个词元的概率，选出一个接回去，再继续生成。它可以把账本里的证据组织成一句话，也可能补出记录里没有的情节。我们可以把两种回答放在一起查。

| 可能的回答 | 手上记录能支持到哪一步 |
| --- | --- |
| 「A07 不在甲栏归栏名单里。」 | 可以核对甲栏名单 |
| 「A07 还在山上。」 | 甲栏名单无法说明它现在在哪里 |

第一篇里，两份总数相等，只能说明数量相等。现在也是如此。**一句话能说到哪一步，要看计算读到了什么证据。** 模型能把缺口讲清楚，接下来得有人或某个工具去找乙栏记录。

牧人原本打算自己走一趟。他问：「你能去查一下吗？」

[继续阅读第七篇 · 回答之后，怎样查证](/book/agents/)

<details class="chapter-sources">
<summary>进一步阅读</summary>

- Transformer 的注意力与序列处理。 [Vaswani 等，2017](https://arxiv.org/abs/1706.03762)
- 以 GPT-3 为例看自回归语言模型和上下文中的任务表现。 [Brown 等，2020](https://arxiv.org/abs/2005.14165)

</details>
