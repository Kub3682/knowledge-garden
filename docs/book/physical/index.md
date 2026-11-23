---
description: 从栏门移动后羊又折返回来，理解现实中的反馈、控制和物理 AI。
outline: [2, 2]
---

<script setup>
import ChapterImage from '../../.vitepress/theme/components/ChapterImage.vue'
import GateFeedback from '../../.vitepress/theme/components/GateFeedback.vue'
</script>

# 第八篇 · 栏门动了以后

A07 已经回到甲栏。牧人看见门口空了，准备关门。门刚移动了一点，A07 又转身走回来。半秒前的判断是对的，此刻却该停下。

<ChapterImage file="sheep-gate.png" alt="一只羊停在半开的栏门边，牧人从旁观察" caption="栏门一动，羊也可能跟着动。" />

## 动作会改变下一次看到的世界

人闭上门之前，会继续看羊在哪里。自动装置也要不断读取门口与栏门的状态，根据新观测更新动作。点几次「看下一步」，留意决定是在什么时候改变的。

<GateFeedback />

这就是一个**反馈回路**。系统观测、作出决定、执行动作。动作和环境自身的变化影响下一次观测，系统再根据它调整。最后，系统还要确认门确实关好了。 [《Modern Robotics》 · 控制系统导读](https://modernrobotics.northwestern.edu/nu-gm-book-resource/11-1-control-system-overview/)

## 学习放在哪里？

辨认遮挡中的羊，可以借助学习模型。收到门口有障碍的信号后暂停，可以用明确的控制规则。任务更长时，还可能需要规划先开哪个栏、哪些羊要带去哪里。这些工作对时效、证据和纠错的要求各不相同。

| 环节 | 要验证的事 |
| --- | --- |
| 感知 | 遮挡或换光线时，会漏掉什么？ |
| 控制 | 环境变化后，能不能及时停下并再次确认？ |
| 现场任务 | 换一处羊栏，整个过程还能完成吗？ |

物理 AI 把学习与行动带到会变化的现实环境。研究者已经在试着让模型把视觉、语言指令和动作接起来。阅读研究结果时，可以带着羊栏的三个问题去看：它在哪些条件下做成了，条件改变后怎样，失败时怎样恢复？ [π₀.₅ 研究论文](https://arxiv.org/abs/2504.16054) · [REALM 操作泛化评测](https://arxiv.org/abs/2512.19562)

## 机器能成为牧羊人吗？

在故事结尾，系统能核对数字、给出证据、协助操作栏门。牧人还要发现跛脚的羊，判断该不该暂停归栏，照顾它，再确认剩下的羊都安全。他交出去的每一项工作，都要重新问清楚目的、需要知道什么，以及做成的依据是什么。

再看开篇那袋石子。它把一件真实的事变成了手边能处理的记号。今天的视频也一样，只是保留的东西更多，处理办法有一部分从数据里学来，结果还可能变成一个动作。

**从数羊到牧羊，计算一直在按规则处理表示。工作变难以后，最需要检验的，是我们怎样取得这些表示，又怎样确认计算真的帮人把事情做成了。**

[回到第一篇 · 十二只，都回来了吗？](/book/beginnings/) · [延伸阅读](/reading)

<details class="chapter-sources">
<summary>进一步阅读</summary>

- 从信息和反馈理解持续的控制过程。 [维纳，《控制论》](https://mitpress.mit.edu/9780262355919/cybernetics-or-control-and-communication-in-the-animal-and-the-machine/)
- 对照另一种设计思路，观察机器人怎样直接利用局部感知作出反应。 [布鲁克斯，《Intelligence Without Representation》](https://people.csail.mit.edu/brooks/papers/representation.pdf)

</details>
