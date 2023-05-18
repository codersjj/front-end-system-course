# Day01 作业布置

## 一. 完成课堂所有的代码

见 `Learn_JavaScript_Basics`

## 二. 简单聊聊JavaScript的历史(自己的话术来总结)

`JavaScript` 的历史是相当有趣和丰富多彩的。

- 1994 年，网景公司发布了 Navigator 浏览器 0.9 版；
  - 这是历史上第一个比较成熟的网络浏览器，轰动一时；
  - 但是这个版本的浏览器只能用来浏览，不具备和访问者互动的能力；
  - 网景公司急需一种网页脚本语言，使得浏览器可以与网页交互；
- 网景公司当时想要选择一种语言来嵌入到浏览器中；
  - 采用现有的语言，比如 `Perl`、`Python`、`Tcl`、`Scheme` 等等，允许它们直接嵌入网页；
  - 1995 年，网景公司招募了程序员 Brendan Eich，目标是把 Scheme 语言嵌入到 Navigator 浏览器中；
- 就在这时，发生了一件大事，1995 年，Sum 公司将 Oak 语言重命名为 Java，正式向市场推出；
  - Java 一经推出就在市场上引起了轰动，Java 当初有一个口号："write once, run anywhere"；
  - 网景公司动了心，决定与 Sum 公司合作，希望将 Java 嵌入到网页中来运行；
  - 当时，Brendan Eich 本人十分热衷于 Scheme 语言，但管理层更倾向于将 Java，希望可以简化 Java 来适应网页脚本的需求；
- Brendan Eich 对 Java 并不感兴趣，为了应付上级的命令，他用 10 天时间设计出了 JavaScript，并且也得到了管理层的肯定；
  - 最初这门语言的名字是 Mocha，在 Navigator 2.0 beta 版本更名为了 LiveScript，后来为了蹭 Java 的热度，在 Navigator 2.0 beta 3 版本正式重命名为 JavaScript；
  - JavaScript 最初更像是多种语言的大杂烩；
    - 借鉴了 C 语言的基本语法；
    - 借鉴了 Java 语言的数据类型和内存管理；
    - 借鉴了 Scheme 语言，将函数提升到第一等公民的地位；
    - 借鉴了 Self 语言，采用基于原型的继承机制；
  - 在这么短的时间里设计出 JavaScript，足以说明 Brendan Eich 是个天才，但由于时间紧迫，很多问题最初并没有被考虑到，所以 JavaScript 最初存在很多缺陷，包括 Brendan Eich 本人也说过：“与其说我爱 JavaScript，不如说我恨它，它是 C 语言和 Self 语言一夜情的产物。18 世纪英国文学家约翰逊博士说得好：’它的优秀之处并非原创，它的原创之处并不优秀‘”。
- 1995 年，微软公司为了和网景公司竞争，推出了 Internet Explorer 浏览器；
  - 微软公司对 Navigator 浏览器的解释器进行了逆向工程，创建了 JScript，于是当时就存在两种语言可以编写网页脚本，这对开发者来说是一个噩耗，因为对不同的浏览器需要进行不同的适配；
- 所以在 1996 年 11 月，网景公司以 JavaScript 语言为基础向 ECMA（欧洲计算机制造商协会）提交了语言标准；
  - 1997 年 6 月，ECMA 以 JavaScript 为基础制定了 ECMAScript 语言规范 ECMA-262；
  - ECMA-262 是一个标准，定义了 ECMAScript 语言规范，JavaScript 是这一标准的一种实现；

以上，就是关于 JavaScript 的一些历史。

## 三. 说说你对JS引擎的理解(自己的话术总结)

JS 引擎是一种解释和执行 JavaScript 代码的软件组件或程序。它负责将 JavaScript 代码转换为可执行的指令，并在运行时执行这些指令。JS 引擎的主要目标是高效地执行 JavaScript 代码，并提供必要的环境支持和功能。

我们知道，高级编程语言最终都是需要转成机器指令来执行的，也就是说我们编写的 `JavaScript` 代码无论是交给浏览器还是 `Node` 执行，最后都是需要被 CPU 执行的，但是 CPU 只认识自己的指令集，也就是机器语言才能被 CPU 执行，所以我们需要将 JavaScript 代码翻译成 CPU 指令来执行，而 JS 引擎就能帮助我们完成这件事。

一些著名的 JS 引擎包括 V8、SpiderMonkey、JavaScriptCore（微信小程序中用的就是它）、Chakra 等等。

## 四. JavaScript的交互方式有哪些？

- `alert()`
- `console.log()`
- `document.write()`
- `prompt()`

## 五. 定义一些你日常生活或者在某些程序中见到的变量(10个)

```js
var userName = 'wy'
var sex = '男'
var age = 20
var password = '0A321942DCBF9'
var phone = '18888888888'
var bookName = '《诗经》'
var price = 23.8
var beginDate = '2023-01-01'
var endDate = '2024-01-01'
var licenseNumber = '12412341234'
```

## 六. 说出JavaScript中的常见数据类型以及它们代表的含义(预习)

- `Number`：表示数值；
- `String`：表示字符串；
- `Boolean`：表示布尔值；
- `Undefined`：表示未定义；
- `Null`：表示没有值；
- `Object`：表示对象；
- `Symbol`：表示符号；
- `BigInt`：表示大整数；

