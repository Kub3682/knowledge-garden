---
description: 按全书的问题寻找原典、教材、交互图解与进一步研究的入口。
outline: [2, 2]
---

# 延伸阅读

读到一个问题，再找一本书、一篇论文把它看深。下面按《计算的本质》的主线列出入口，各篇末尾还会给出更具体的阅读位置。

## 从记录到自动执行

| 对应篇章 | 带着什么问题读 | 从哪里开始 |
| --- | --- | --- |
| [第一篇](/book/beginnings/) | 人怎样留下数量、建立共有的记法 | [大都会博物馆的早期文字与账目](https://www.metmuseum.org/essays/the-origins-of-writing) |
| [第二篇](/book/machines/) | 一条数学规则怎样成为机械操作 | [计算机历史博物馆的巴贝奇展览](https://www.computerhistory.org/babbage/engines/) |
| [第二篇](/book/machines/) | 明确步骤的计算，可以用什么简单模型描述 | [图灵 1936 年论文](https://theory.stanford.edu/~trevisan/cs172-07/turing36.pdf)，第 1、6 节 |

看历史资料时，留意当时的问题、实现条件，以及哪些是设计、哪些实际建成。书中的牧人故事用于解释机制，史料则用来核对实际发生过什么。

## 从指令到计算系统

**Charles Petzold，《Code》**，适合跟着具体部件理解计算机。作者的[交互图解](https://www.codehiddenlanguage.com/)从开关、逻辑、加法逐渐走向存储器与 CPU。阅读第三篇时，可对照第 19—24 章，看看我们简化的存储与执行过程怎样落到更具体的电路上。

**Noam Nisan、Shimon Schocken，《The Elements of Computing Systems》**，及其配套课程 **Nand to Tetris**，适合动手把硬件与软件接起来。[十二个项目](https://www.nand2tetris.org/course)从逻辑门开始，经过存储器、体系结构和汇编器，再进入虚拟机、语言与编译器。第三篇的指令、地址与翻译过程，可以沿项目 4—6 继续实践。

**冯诺依曼，《EDVAC 报告初稿》**，是研究存储程序组织方式的[原始资料](https://web.mit.edu/sts.035/www/PDFs/edvac.pdf)。先读第 2 节，观察运算、控制、存储和输入输出为什么需要分工。

第四篇研究效率时，再进入 [Roofline 模型](https://amcr.lbl.gov/departments/computer-science-department/ppan/roofline-performance-model/)与 [MIT 的深度神经网络加速器教程](https://eyeriss.mit.edu/tutorial.html)。带着数据从哪里来、能复用几次、完整任务怎样计时这些问题去读，硬件名称就容易落到实处。

## 从学习到语言

后续篇章会引入新的问题，模型怎样调整，对新输入是否有效，以及生成的内容如何核实。它们需要在执行机制之外，补上学习与评估的概念。

- **《动手学深度学习》**。[在线书](https://zh.d2l.ai/)与[英文版](https://d2l.ai/)提供文字、数学和可运行代码。第五篇会重点对照模型、损失、优化与泛化，第六篇再走向注意力机制。
- **Vaswani 等，*Attention Is All You Need***。[2017 年论文](https://arxiv.org/abs/1706.03762)是研究 Transformer 的原始入口。阅读时要区分它提出的结构、当时验证的任务，以及后来语言模型的进一步发展。

## 从回答到行动

**Russell、Norvig，《Artificial Intelligence: A Modern Approach》**，可从[全书目录](https://aima.cs.berkeley.edu/contents.html)选择智能体、搜索、规划、概率与决策相关内容。它有助于把“生成一段回答”放回更完整的任务环境中考察。

**Kevin M. Lynch、Frank C. Park，《Modern Robotics》**，及其[配套视频](https://modernrobotics.northwestern.edu/nu-gm-book-resource/)，提供运动学、动力学、规划与控制的基础。第八篇会用这些基础区分，算出动作、执行动作、观察实际结果之间各需要什么。

后四篇目前保留写作路线。这些资料为继续展开提供基础，具体案例与判断仍会随书稿逐章核查。

## 怎样与本书配合阅读

先顺着本书的一段案例读通，再选一个卡住的问题去看原典或实验。回来时，试着用自己的话解释，输入是什么、规则做了什么、状态如何改变、结果怎样验证。

我们会在相应段落标明史料与参考来源。这里列出的是阅读路径，并不意味着每部著作都已逐页研究。本书的故事、教学模型和呈现方式会围绕自己的问题继续推敲。
