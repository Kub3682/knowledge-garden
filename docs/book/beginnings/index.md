---
description: 跟随牧人清点羊群，理解记录、符号、规则与计算。
outline: [2, 2]
---

<script setup>
import RepresentationFigure from '../../.vitepress/theme/components/RepresentationFigure.vue'
import ChapterImage from '../../.vitepress/theme/components/ChapterImage.vue'
</script>

# 第一篇 · 人为什么需要计算

天快黑了，羊群沿着小路回来。

牧人站在入口，看着它们一只只走过。有几只挤作一团，刚数到这里，后面的又赶上来。他总觉得少了一只，重新看，却又拿不准。

天再暗些，就不好找了。

我们从这个想象的场景讲起。一个人需要知道自己的羊有没有少。计算，先有这样一个用处。

<ChapterImage file="beginnings-scene.png" alt="牧人在羊群附近摆放石子，远处是村落与山地" caption="羊要放出去，也要收回来。数量得有个准数。" eager />

*本篇插图为 AI 生成的教学想象。点击可查看原图。*

## 羊有没有少？ {#羊都回来了吗}

自己的羊，牧人当然熟悉。可是，羊多了，在山上待了一整天，再混着走回来，熟悉也未必管用。何况有时还得请同伴来接。

“我看都回来了。”同伴这样说，他仍不放心。总得有个办法，让早晨出去的和傍晚回来的对得上。

第二天，他在门边挂了一只空袋。出去一只羊，就往里放一颗石子。羊群走远，袋子留在门边。

傍晚，回来一只，他就取出一颗。

<ChapterImage file="sheep-pairing.png" alt="左右两幅图对照清晨出栏时放入石子与傍晚归来时取出石子" caption="出去一只，放入一颗；回来一只，取出一颗。" />

羊都进了栏，袋子也恰好空了，数量便对上了。若还剩一颗，就少回来一只。

他甚至不必先说出总共有多少只。把羊和石子逐个配起来，就能查出数量有没有少。

每取出一颗，袋里剩下的石子就少一颗。最后看袋子是否空了，便能作出数量有没有对上的判断。

这个取放的过程，已经在计算了。羊群的数量由石子表示，牧人按固定办法改变石子，再从剩下的石子读出答案。

## 怎样记住数量？ {#羊走远了-怎样记住数量}

用过石子，牧人又想到木片。每出去一只，就划一道。若已经会写数字，还可以数过以后记下“羊，十二只”。

一袋石子、一排刻痕、一行数字，都能帮他记住同一个数量。

<RepresentationFigure />

*同一个数量，可以用不同的记法留下来。*

记号没有羊的模样，也不会叫，却能用来清点羊群。

牧人只留下眼下要用的数量，暂时略去了毛色、大小和叫声。我们把这种取舍叫作抽象。原本各不相同的羊，在这次计数里，每只都算一个。

事情经过这一步，就方便多了。要知道放出多少只，可以看记录；要告诉同伴，也可以把记录交给他。

<details class="reading-note">
<summary>历史旁读 · 泥板上的账目</summary>

牧人的故事是为说明问题而构造的。美索不达米亚乌鲁克出土的早期泥板账目，则是实物证据。人们用物资符号和数量记号保存收支，以便日后查核。记录的用处，也随协作的规模扩大了。[1]

</details>

## 一颗算几只？ {#一颗石子-究竟算几只羊}

有一天，牧人托同伴接羊，指了指门边的袋子。

同伴拿起来，却先问了一句：“这是今天放出去的？一颗算一只？”

牧人才发现，自己天天做的事，别人未必知道。

这袋石子记的是哪群羊，哪天放出去的，一颗代表几只，都得先说清楚。否则，两个人拿着同一袋石子，也可能各有各的理解。

<ChapterImage file="sheep-agreement.png" alt="两位牧人面对一只羊，用手中的一颗石子说明一颗代表一只的约定" caption="交出记录，也要交代记法。一颗石子，在这里代表一只羊。" />

给记号定下共同的含义，记录才能传下去。我们也可以把这种记法看作最简单的编码。换成文字和数字，仍要约定“羊”指哪类东西，“12”表示多少。

荀子在《正名》中说过：

> 名無固宜，約之以命，約定俗成謂之宜。

名称的使用，有赖于共同的约定。《正名》还涉及治理与名实秩序。这里借它来看牧人的难处，就很具体了。自己明白的记号，得让接手的人也明白。[2]

两人说定了。下次羊回来，同伴就知道该怎样核对。

## 只数羊，够吗？ {#只数羊-够不够}

同伴还有一个问题。

“回来十二只，就是早晨出去的那十二只吗？”

牧人想了想。自家的走失一只，邻家的又混进来一只，石子也能全部取完。

数目一样，羊却换了。

<ChapterImage file="sheep-identity.png" alt="左右各三只羊和三颗石子，右侧第三只的标记由绿色变成黄色，数量相同而个体不同" caption="取三只作对照。两边数量相同，第三只的标记却变了。" />

原来的记法能查出数量少没少。要认清回来的究竟是哪只，还得给羊作标记，再把标记记下来。

| 想查什么 | 需要记什么 |
| --- | --- |
| 回来多少只 | 已归数量 |
| 比早晨少不少 | 出栏数和已归数 |
| 是不是原来的羊 | 各只羊的标记 |
| 哪只还没检查 | 每只羊的检查结果 |

先想清楚要查什么，再决定记什么。一张写着“十二只”的木片，无法告诉人哪只羊受了伤，也无法认出混进来的那一只。

《墨子·小取》提醒读者：

> 夫物有以同而不率遂同。

事物有一处相同，别处未必都相同。同样多、同一类、同一只，得分清楚。后期墨家的这些讨论，放到羊群里，仍是切实的问题。[3]

牧人于是给羊作了标记。以后再核对，既查总数，也认具体的羊。

## 怎样算出答案？ {#记下来了-怎么算}

这天，出栏十二只，先回来十一只。同伴沿小路去找，终于把剩下的那只带了回来。

牧人没有重新把十二只羊赶过入口。他知道先前回来十一只，又添一只，便算出现在是十二只。

眼前还没有重新清点，答案却已经能从记录中得出。十一加一，便是十二。

再看早晨的记录，也写着十二。两边一比，数量相等。

<ChapterImage file="sheep-operations.png" alt="一只羊刚到入口，牧人把石子合拢并在木板上更新刻痕" caption="又回来一只，记录也跟着加一。" />

他先后做了加法和比较。前者算出新数量，后者判断两个数量是否相等。已有的记录，经过操作，给出了新的答案。

<div class="record-calculation" role="group" aria-label="原先十一只，新归一只，合计十二只">
  <div><span>原先</span><strong>11</strong></div>
  <div><span>新归</span><strong>1</strong></div>
  <div><span>合计</span><strong>12</strong></div>
</div>

收羊时还要查看有没有受伤。他把数量核对和健康检查分开记，免得忙中漏掉一项。

| 已经知道的事 | 怎样处理 | 得出什么 |
| --- | --- | --- |
| 已归 11，又回来 1 | 11 + 1 | 现在已归 12 |
| 出栏 12，已归 12 | 比较两数 | 数量对上 |
| 数量对上，健康检查也完成 | 两项都满足 | 今天的清点与检查完成 |

最后一行把两件事合在一起判断。数量对上，检查还没做完，就继续检查；检查做完，数量没对上，就继续寻找。“两项都满足”可以用逻辑运算中的“且”来表达。

这些都是规则。规则说明，拿到什么信息以后，该怎样得到结果。

只写两个“12”，还不够。要合计两群羊，就相加；要查出栏和已归是否一样多，就比较。数放在那里，怎样用它，要由眼前的问题来定。

<details class="reading-note">
<summary>多想一步 · 数怎么写，又怎么算</summary>

十二可以写成十进制的 12，也可以写成二进制的 1100。进制规定数量的写法，加法和比较规定怎样处理它。十一加一，用二进制写成 1011 + 1 = 1100，算的仍是同一个数量关系。

</details>

## 还要核对什么？ {#算对了-事情就对了吗}

记录上已有十二只，牧人还是去看了羊。

万一记重了一只呢？万一把邻家的认成自家的呢？

十一加一确实等于十二，可最初的十一若记错了，后面的加法就帮不了忙。

<ChapterImage file="sheep-verification.png" alt="一位牧人拿着刻痕板，另一位查看羊的个体标记，将记录与实物核对" caption="记录要算得对，也要同眼前的羊对得上。" />

还有另一种错法。记录没错，推断却走岔了。

假设栏里的羊都已检查，这只羊也在栏里，那么它已检查，可以确定。可是，只知道一只羊已检查，却不能断定它就在栏里。检查过的羊，也可能正在栏外。

亚里士多德在《前分析篇》中讨论的，正包括这类问题。前提给定以后，什么结论能够必然推出？[4]

牧人核对时，便有两件事要分开查。**一是记录靠不靠谱，二是结论推得对不对。**

前者要去清点、辨认，发现不符就重查。后者要把理由展开，看看少了什么条件，有没有把前后关系倒过来。

<details class="reading-note">
<summary>思想旁读 · 苏格拉底怎样追问答案</summary>

柏拉图《美诺篇》中，一名少年起初以为，正方形面积加倍，边长也该加倍。苏格拉底接着提问、作图。把边长从 2 加到 4，面积却从 4 变成 16，达到原来的四倍。[5]

原先觉得很有把握的答案，经过画图和核对，就显出了问题。对话还涉及柏拉图的知识与回忆学说，可沿原文继续读。

</details>

<details class="reading-note">
<summary>思想旁读 · 写下了，就懂了吗？</summary>

《斐德若篇》里，苏格拉底讲了一则文字发明的寓言。国王担心，人会依赖外在记号，得到知道的表象。文字被追问时，也不会自己解释理由。[6]

牧人的木片上可以写下“十二只”。后来的人仍得问，记的是哪一天、哪群羊，又是怎样核对的。

</details>

## 我们在算什么？ {#我们究竟在算什么}

回头看，牧人的办法已经变了许多。

起初，他只想知道羊有没有少。后来，他用石子留下数量，和同伴说定记法，又添上个体标记。有了记录，便能加一、比较，再作判断。算出结果以后，还要拿它去核对羊群。

羊群一直是那群羊，牧人手里处理的，却是关于羊的记录。

<div class="calculation-summary">
  <p><strong>提问</strong><span>该回来的羊，都回来了吗？</span></p>
  <p><strong>记录</strong><span>留下数量与个体标记</span></p>
  <p><strong>运算</strong><span>加一、比较，按条件判断</span></p>
  <p><strong>核实</strong><span>查记录，也查推断</span></p>
</div>

这让我们摸到了计算的一个起点。

**把要解决的事记成可以操作的符号，按明确的规则处理，再读出结果。**

结果要用到现实里，还得再问一句，记下的东西够不够，处理的办法合不合适，得出的答案能不能经得起核对。

羊群之外，分配物资、测量土地、安排路程，也会遇到类似的需要。人先选出与问题有关的信息，再用合适的规则处理，求得原先还不知道的结果。

计数与记账，早在古希腊和先秦思想家留下著作以前，就已进入人的生活。后来的思想家从各自关心的问题出发，讨论名称、同异、知识与推理。把这些讨论带回牧人的故事，我们更容易看清，每一步究竟需要什么。

现在，牧人想把整套办法教给同伴。先做什么，后做什么，同一步要重复到什么时候，怎样才算完成，都得说明白。

如果一个人能够照着做，能不能让装置也来帮忙？

[继续阅读第二篇 · 怎样让机器代劳](/book/machines/)

<details class="chapter-sources">
<summary>原典、史料与进一步阅读</summary>

牧人与羊群是为解释机制构造的故事。文中的古代思想取自以下文本，古文保留繁体，现代解释为本书释义。

1. **早期记录**。Ira Spar，*The Origins of Writing*，大都会艺术博物馆。 [泥板实物与历史背景](https://www.metmuseum.org/essays/the-origins-of-writing)
2. **荀子《正名》第二十二篇**。见命名与“名无固宜”所在段，同时留意其治理背景。 [原文](https://zh.wikisource.org/zh/荀子/正名篇)
3. **《墨子·小取》**。见类推边界与同异的讨论。 [原文](https://zh.wikisource.org/wiki/墨子/小取) · [后期墨家学术导读](https://plato.stanford.edu/entries/mohist-canons/)
4. **亚里士多德《前分析篇》第一卷，第 1—2 章**。A. J. Jenkinson 英译。 [前提与推断](https://classics.mit.edu/Aristotle/prior.1.i.html)
5. **柏拉图《美诺篇》82b—85b**。Benjamin Jowett 英译。 [几何问答](https://classics.mit.edu/Plato/meno.html)
6. **柏拉图《斐德若篇》274c—277a**。Benjamin Jowett 英译。 [文字寓言](https://classics.mit.edu/Plato/phaedrus.html)

</details>

<details class="reading-note">
<summary>动手试试配对、表示与逻辑</summary>

- [石子怎样核对数量](/computing/counting)
- [符号怎样留下记录](/computing/representation)
- [加法、比较与逻辑](/computing/rules)

</details>

<style scoped>
.record-calculation {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  max-width: 380px;
  margin: 24px auto;
  padding-block: 16px;
  border-block: 1px solid var(--vp-c-divider);
}
.record-calculation div { text-align: center; }
.record-calculation div + div { border-left: 1px solid var(--vp-c-divider); }
.record-calculation span { display: block; font-size: 12px; color: var(--vp-c-text-2); }
.record-calculation strong { display: block; margin-top: 6px; font-size: 24px; line-height: 1.4; font-weight: 500; }

.reading-note, .chapter-sources {
  margin: 24px 0;
  padding: 14px 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  font-size: .94em;
}
.reading-note summary, .chapter-sources summary {
  cursor: pointer;
  font-weight: 500;
  line-height: 1.7;
}
.calculation-summary {
  margin: 28px 0;
  border-block: 1px solid var(--vp-c-divider);
}
.calculation-summary p {
  display: grid;
  grid-template-columns: 4em minmax(0, 1fr);
  gap: 12px;
  margin: 0;
  padding: 12px 0;
}
.calculation-summary p + p {
  border-top: 1px solid var(--vp-c-divider);
}
.calculation-summary strong { font-weight: 500; color: var(--vp-c-brand-1); }
.calculation-summary span { color: var(--vp-c-text-2); }
@media(max-width:420px) {
  .reading-note, .chapter-sources { padding: 12px; }
  .calculation-summary p { gap: 4px; }
}
</style>
