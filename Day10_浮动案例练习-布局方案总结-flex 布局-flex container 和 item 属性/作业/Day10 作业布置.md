# Day10 作业布置

## 一. 完成课堂所有的代码

* 边框可以不做

见 `Learn_HTML_CSS`

## 二. 说出为什么需要清除浮动以及如何清除浮动

- 为什么需要清除浮动？

  - 因为浮动元素会脱离标准流，不再向父元素汇报高度，父元素在计算总高度时就不会把浮动子元素的高度计算在内，而很多时候父元素的高度会由内容撑开，我们不会给父元素设置高度，这就可能导致父元素的高度塌陷，后面的元素会出现顶上来的现象；
  - 所以通常需要清除浮动，也就是解决浮动后父元素高度塌陷的问题，让父元素计算总高度的时候，把浮动子元素的高度算进去。

- 如何清除浮动？

  - 方案一：给父元素设置固定高度

    - 需要计算，扩展性不好（不推荐）
    - 实际开发中，高度很有可能是不固定的

  - 方案二：使用 `clear` 属性

    - 方法一：在父元素中的最后添加一个空的块级子元素，给这个块级子元素设置 `clear: both;`

      - 会增加无意义的空标签，不利于维护
      - 通过增加 `HTML` 元素来解决 `CSS` 中产生的问题，违反了结构和样式分离的原则（不推荐）

    - 方法二：给父元素添加伪元素

      - 纯 `CSS` 样式解决，结构和样式分离（推荐）
      - 一次编写，多处使用

      ```css
      .clearfix::after {
        content: "";
        display: block;
        clear: both;
      
        /* 浏览器兼容 */
        visibility: hidden;
        height: 0;
      }
      
      .clearfix {
        /* 兼容 IE6/7 */
        *zoom: 1;
      }
      ```
      

## 三. 利用浮动完成如下布局结构（完成结构即可）(选做)

![image-20220408012538662](https://tva1.sinaimg.cn/large/e6c9d24egy1h11o5003wxj20xf0djgpi.jpg)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    body {
      background-color: #f5f5f5;
    }

    .content {
      box-sizing: border-box;
      margin: 150px auto 0;
      padding-bottom: 10px;
      width: 1190px;
      height: 480px;
      /* background: #B0D5DF; */
    }

    .content > .left,
    .content > .right {
      float: left;
      width: 190px;
      height: 100%;
    }

    .content > .left {
      background-color: #66C18C;
    }

    .content > .right {
      background-color: #F0A1A8;
    }

    .content > .center {
      float: left;
      box-sizing: border-box;
      padding: 0 10px;
      width: 800px;
      height: 100%;
      /* background: #253D24; */
    }

    .content > .center .carousel {
      float: left;
      margin-right: 10px;
      width: 590px;
      height: 100%;
      background-color: #f66;
    }

    .content > .center .item-box {
      float: left;
      width: 180px;
      height: 100%;
      /* background-color: #ff6; */
    }

    .center .item-box .item {
      margin-bottom: 10px;
      height: 150px;
      background-color: skyblue;
    }
  </style>
</head>
<body>

  <div class="content">
    <div class="left"></div>
    <div class="center">
      <div class="carousel"></div>
      <div class="item-box">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>
    <div class="right"></div>
  </div>

</body>
</html>
```

## 四. 总结flex布局container和item的属性以及作用（重要）

- 开启了 `flex` 布局（设置 `display` 属性为 `flex` 或 `inline-flex`）的元素叫做 `flex container`，`flex container` 上可以设置以下属性；
  - `flex-direction`：设置主轴（`main axis`）的方向
    - `row`（初始值）：`flex container` 的主轴被定义为与文本方向相同
    - `row-reverse`：与 `row` 的方向相反
    - `column`：`flex container` 的主轴被定义为与快轴方向相同
    - `column-reverse`：与 `column` 的方向相反

  - `flex-wrap`：设置 `flex container` 是单行还是多行
    - `nowrap`（默认）：不换行，单行显示
    - `wrap`：换行，多行显示
    - `wrap-reverse`：换行，多行显示，和 `wrap` 的行为一样，但是 `cross start` 和 `cross end` 会互换

  - `flex-grow`：`flex-direction` 和 `flex-wrap` 的简写属性
    - `flex-direction` 和 `flex-wrap` 的顺序任意，可以省略其中一个

  - `justify-content`：设置 `flex items` 在主轴（`main axis`）方向上的对齐方式
    - `center`：居中对齐
    - `flex-start`：与 `main start` 一侧对齐
    - `flex-end`：与 `main end` 一侧对齐
    - `space-between`：`flex items` 之间距离相等，同时与 `main start` 和 `main end` 两端对齐
    - `space-around`：`flex items` 之间距离相等，与 `main start` 和 `main end` 之间的距离是 `flex items` 之间距离的一半
    - `space-evenly`：`flex items` 之间距离相等，与 `main start` 和 `main end` 之间的距离等于 `flex items` 之间的距离

  - `align-items`：设置 `flex items` 在交叉轴（`cross axis`）方向上的对齐方式
    - `normal`：在弹性布局中，效果和 `stretch` 一样
    - `stretch`：当 `flex items` 在 `cross axis` 方向上的 `size` 为 `auto` 时，会自动拉伸至行高
    - `flex-start`
    - `flex-start`：与 `cross start` 对齐
    - `flex-end`：与 `cross end` 对齐
    - `center`：居中对齐
    - `baseline`：基线对齐

  - `align-content`：设置多行 `flex items` 在 `cross axis` 上的对齐方式，用法与 `justify-content` 类似
    - `stretch`：与 `align-items` 的 `stretch` 类似
    - `flex-start`：与 `cross start` 对齐
    - `flex-end`：与 `cross end` 对齐
    - `center`：居中对齐
    - `space-between`：`flex items` 之间距离相等，同时与 `cross start` 和 `cross end` 两端对齐
    - `space-around`：`flex items` 之间距离相等，与 `cross start` 和 `cross end` 之间的距离是 `flex items` 之间距离的一半
    - `space-evenly`：`flex items` 之间距离相等，与 `cross  start` 和 `cross end` 之间的距离等于 `flex items` 之间的距离

- `flex container` 中的每个直接子元素都叫做 `flex item`，`flex item` 上可以设置以下属性；
  - `flex-grow`：设置 `flex items` 在主轴方向上的尺寸的增长因子（扩展/拉伸的比例）
    - 可以设置任意非负数字（默认值是 `0`）
    - 当 `flex container` 在 `main axis` 方向上有剩余空间时，`flex-grow` 属性才会有效
    - 如果所有的兄弟 `item` 都有相同的 `flex-grow` 系数，那么所有的 `item` 将剩余空间按相同比例分配，否则将根据不同的 `flex-grow` 定义的比例进行分配
    - `flex items` 扩展后的最终 `size` 不能超过 `max-width/max-height`

  - `flex-shrink`：设置 `flex items` 如何收缩
    - 可以设置任意非负数字（默认值是 `1`）
    - `flex items` 仅在默认宽度之和大于容器的时候才会发生收缩
    - `flex items` 收缩后的最终 `size` 不能小于 `min-width/min-height`

  - `flex-basis`：设置 `flex items` 在 `main axis` 方向上的初始大小
    - 默认值为 `auto`，还可以设置具体的宽度值（如 `100px`）
    - 使用案例：一段文本中有一个比较长的英文单词时，可能受元素尺寸影响显示不全，此时可以设置 `flex-basis`，拉伸元素尺寸，将该单词显示完整；
    - 决定 `flex items` 最终 `base size` 的因素，优先级从高到低为：
      - `max-width/max-height/min-width/min-height`
      - `flex-basis`
      - `width/height`
      - 内容本身的 `size`

  - `flex`：`flex-grow`、`flex-shrink` 和 `flex-basis` 的简写
    - `none` | [ `<flex-grow>` `<flex-shrink>`? || `<flex-basis>` ]

  - `align-self`：`flex items` 可以通过设置 `align-self` 覆盖 `flex container` 设置的 `align-items` 属性的值
  - `order`：设置 `flex items` 的显示顺序
    - 可以设置任意整数，值越小越排在前面
    - 默认值为 `0`


## 五. 自己找3个案例练习

* 案例一：其中用到元素定位
* 案例二：其中用到浮动布局
* 案例三：其中用到flex布局

三合一举例（淘宝网首页）：

```html

```

















