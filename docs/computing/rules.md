# 记录下来的数量，怎样继续用？

已回来三只羊，又回来一只。记录也要从 3 更新为 4。

## 数量怎样增加？

加 1 表示在已有数量上增加一个单位。继续增加，到 9 再加 1 时，十进制把十个一换成一个十，写作 10。

[试试计数与进位](https://kub3682.github.io/embedded-computing-atlas/#carry)

## 数量怎样变成判断？

出栏四只，回来三只，还少一只。回来四只，数量对上。比较把两个数量变成「相等」或「不相等」的判断。

## 两个判断怎样组合？

设 A 表示甲群数量对上，B 表示乙群数量对上。

| 规则 | 什么时候成立 |
| --- | --- |
| 且 AND | A、B 都成立 |
| 或 OR | A、B 至少一项成立 |
| 非 NOT | 反转 A 的判断 |

[打开布尔开关实验](https://kub3682.github.io/embedded-computing-atlas/#carry)

19 世纪，布尔用代数表达逻辑。1937 年，香农把布尔代数用于分析继电器电路。串联触点都闭合才能导通，对应「且」。并联支路至少一条导通，对应「或」。

[计算机历史博物馆 · 布尔与香农](https://www.computerhistory.org/revolution/digital-logic/12/269)

## 从操作到步骤

要核对多群羊，还需要安排先后、重复和停止条件。这会引出算法。

[继续在实验室核对三群羊](https://kub3682.github.io/embedded-computing-atlas/#algorithm)
