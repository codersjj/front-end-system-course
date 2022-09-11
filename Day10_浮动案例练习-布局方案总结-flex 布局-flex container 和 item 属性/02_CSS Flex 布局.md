## 1. （理解）认识 `flex` 布局及其由来

- `Flexbox` 翻译为弹性盒子
  - **弹性盒子**是一种用于**按行或按列布局元素**的**一维布局方法**；
  - 元素可以**膨胀以填充额外的空间，收缩以适应更小的空间**；
  - 通常我们将使用 `Flexbox` 来进行布局的方案称为 **`flex` 布局**（`flex layout`）；
- `flex` 布局是目前 `Web` 开发中使用最多的布局方案
  - `flex` 布局（`Flexible` 布局，弹性布局）
  - 目前特别是在**移动端**可以说已经完全普及
  - 在 **`PC` 端**也几乎已经完全普及，只有**少数的网站依然在用浮动进行布局**
- 为什么需要 `flex` 布局呢？
  - 长久以来，`CSS` 布局中唯一可靠且跨浏览器兼容的**布局工具只有 `floats` 和 `positioning`**
  - 但是这两种方法本身**存在很大的局限性**，并且它们用于布局实在是无奈之举

### 原先的布局存在的痛点

- 原来的布局存在哪些痛点呢？举例说明：

  - 比如在父元素里面**垂直居中一个块内容**

  ![image-20220906210250225](02_CSS Flex 布局.assets/image-20220906210250225.png)

  - 比如使容器的**所有子项等分可用宽度（高度）**，而**不管有多少宽度（高度）可用**
  - 比如使**多列布局中的所有列采用相同的高度**，**即使它们包含的内容量不同**

### `flex` 布局的出现

- 所以长久以来，大家非常期待一种真正可以用于对元素布局的方案，于是 **`flex` 布局出现了**

  - “Nature and Nature's laws lay hid in night: God said, Let **Newton** be! and all was light.”
  - 自然与自然的法则在黑夜隐藏，于是上帝说，让**牛顿**出现吧！于是世界就明亮了起来。

- `flexbox` 在使用时，我们最担心的是它的兼容性问题：

  - 我们可以在 [`caniuse`](https://caniuse.com/) 上查询到具体的兼容性

    ![image-20220906211230049](02_CSS Flex 布局.assets/image-20220906211230049.png)

## 2. （掌握）`flex` 布局的重要概念

- 两个重要的概念：

  - 开启了 `flex` 布局的元素叫 **`flex container`**
  - `flex container` 里面的直接子元素叫做 **`flex item`**

  ![image-20220906225957313](02_CSS Flex 布局.assets/image-20220906225957313.png)

- 当 `flex container` 中的子元素变成了 `flex item` 时，具备以下特点：

  - `flex item` 的布局将**受 `flex container` 属性的设置来进行控制和布局**；
  - `flex item` **不再严格区分块级元素和行内级元素**；
  - `flex item` **默认情况下是包裹内容**的，**但是可以设置宽度和高度**；

- 设置 `display` 属性为 `flex` 或者 `inline-flex` 可以成为 `flex container`

  - **`flex`**：`flex container` 以 **`block-level`** 形式存在
  - **`inline-flex`**：`flex container` 以 **`inline-level`** 形式存在

## 3. （掌握）`flex` 布局的模型 - 主轴和交叉轴

![image-20220907074252417](02_CSS Flex 布局.assets/image-20220907074252417.png)

## 4. （掌握）`flex container` 的属性

- 应用在 `flex container` 上的 `CSS` 属性
  - `flex-flow`
  - `flex-direction`
  - `flex-wrap`
  - `justify-content`
  - `align-items`
  - `align-content`

### `flex-direction`

- `flex items` 默认都是沿着 `main axis`（主轴）从 `main start` 开始往 `main end` 方向排布

  - **`flex direction`** 决定了 **`main axis`** 的方向，有 `4` 个取值
    - `row`（默认值）
    - `row-reverse`
    - `column`
    - `column-reverse`

  ![image-20220907123704284](02_CSS Flex 布局.assets/image-20220907123704284.png)

### `flex-wrap`

- `flex-wrap` 决定了 `flex container` 是单行还是多行

  - `nowrap`（默认）：单行
  - `wrap`：多行
  - `wrap-reverse`：多行（和 `wrap` 的行为一样，但是 `cross-start` 和 `cross-end` 互换）

  ![image-20220907225803239](02_CSS Flex 布局.assets/image-20220907225803239.png)

### `flex-flow`

- `flex-flow` 属性是 `flex-direction` 和 `flex-wrap` 的简写

  - 顺序任意，并且可以省略其中一个

  ![image-20220907230013580](02_CSS Flex 布局.assets/image-20220907230013580.png)

### `justify-content`

- `justify-content` 决定了 `flex items` 在 `main axis` 上的对齐方式
  - **`flex-start`**（默认值）：与 `main start` 对齐
  - **`flex-end`**：与 `main end` 对齐
  - **`center`**：居中对齐
  - **`space-between`**：
    - `flex items` 之间的距离相等
    - 与 `main start`、`main end` 两端对齐
  - **`space-around`**：
    - `flex items` 之间的距离相等
    - `flex items` 与 `main start`、`main end` 之间的距离是 `flex items` 之间距离的一半
  - **`space-evenly`**：
    - `flex items` 之间的距离相等
    - `flex items` 与 `main start`、`main end` 之间的距离等于 `flex items` 之间的距离
    - 注：此值兼容性稍差，详见 `caniuse` 网站

![image-20220908204208439](02_CSS Flex 布局.assets/image-20220908204208439.png)

### `align-items`

- `align-items` 决定了 `flex items` 在 `cross axis` 上的对齐方式
  - **`normal`**：**在弹性布局中**，效果和 `stretch` 一样
  - **`stretch`**：当 `flex items` 在 `cross axis` 方向的 `size` 为 `auto` 时，会自动拉伸至填充 `flex container`
  - **`flex-start`**：与 `cross start` 对齐
  - **`flex-end`**：与 `cross end` 对齐
  - **`center`**：居中对齐
  - **`baseline`**：与基线对齐

![image-20220909215444187](02_CSS Flex 布局.assets/image-20220909215444187.png)

### `align-content`

- `align-content` 决定了多行 `flex items` 在 `cross axis` 上的对齐方式，用法与 `justify-content` 类似
  - `stretch`（默认值）：与 `align-items` 的 `stretch` 类似
  - `flex-start`：与 `cross start` 对齐
  - `flex-end`：与 `cross end` 对齐
  - `center`：居中对齐
  - `space-between`：
    - `flex items` 之间距离相等
    - 与 `cross start`、`cross end` 两端对齐
  - `space-around`：
    - `flex items` 之间距离相等
    - `flex items` 与 `cross start`、`cross end` 之间的距离是 `flex items` 之间距离的一半
  - `space-evenly`：
    - `flex items` 之间的距离相等
    - `flex items` 与 `cross start`、`cross end` 之间的距离等于 `flex items` 之间的距离
    - 注：此值兼容性稍差，详见 `caniuse` 网站

![image-20220909223408023](02_CSS Flex 布局.assets/image-20220909223408023.png)

## 5. （掌握）`flex item` 的属性

- 应用在 `flex items` 上的 `CSS` 属性：
  - `flex-grow`
  - `flex-basis`
  - `flex-shrink`
  - `order`
  - `align-self`
  - `flex`

### （了解）`order`

- `order` 决定了 `flex items` 的显示顺序
  - 可以设置**任意整数**（正整数、负整数、`0`），**值越小就越排在前面**
  - 默认值是 `0`

![image-20220910074831627](02_CSS Flex 布局.assets/image-20220910074831627.png)

### （了解）`align-self`

- `flex items` 可以通过 `align-self` 覆盖 `flex container` 设置的 `align-items` 属性的值
  - `auto`（默认值）：通过 `flex container` 的 `align items` 设置
  - `stretch`、`flex-start`、`flex-end`、`center`、`baseline`，效果跟 `align-items` 一致

![image-20220910083541911](02_CSS Flex 布局.assets/image-20220910083541911.png)

### `flex-grow`

- `flex-grow` 决定了 `flex items` 如何扩展（拉伸/成长）

  - 可以设置**任意非负数字（正小数、正整数、0），默认是 `0`**
  - 当 `flex container` 在 `main axis` 方向上**有剩余 `size`** 时，**`flex-grow` 属性才会有效**

- 如果所有 `flex items` 的 `flex-grow` **总和 `sum` 超过 `1`**，每个 `flex item` 扩展的 `size` 为：

  - `flex container` 的剩余 `size` * `flex-grow` / `sum`

  ![image-20220910105705049](02_CSS Flex 布局.assets/image-20220910105705049.png)

- `flex items` 扩展后的最终 `size` 不能超过 `max-width/max-height`

### `flex-shrink`

- `flex-shrink` 决定了 `flex items` 如何收缩（缩小）
  - 可以设置**任意非负数字（正小数、正整数、0），默认值是 `1`**
  - 当 `flex items` 在 `main axis` 方向上超过了 `flex container` 的 `size`，`flex-shrink` 属性才会有效
- 如果所有 `flex items` 的 `flex-shrink` 总和超过 `1`，每个 `flex item` 收缩的 `size` 为：
  - `flex items` 超出 `flex container` 的 `size` * 收缩比例 / 所有 `flex items` 的收缩比例之和
- `flex items` 收缩后的最终 `size` 不能小于 `min-width/min-height`

### `flex-basis`

- `flex-basis` 用来设置 `flex items` 在 `main axis` 方向上的 `base size`（the initial [main size](https://drafts.csswg.org/css-flexbox/#main-size) of the [flex item](https://drafts.csswg.org/css-flexbox/#flex-item)）
  - **`auto`**（默认值）、**具体的宽度数值**（如 `100px`）
- 决定 `flex items` 最终 `base size` 的因素，优先级从高到低为：
  - `max-width`/`max-height`/`min-width`/`min-height`
  - `flex-basis`
  - `width/height`
  - 内容本身的 `size`

### `flex`

- `flex` 是 `flex-grow`、`flex-shrink` 和 `flex-basis` 的简写，`flex` 属性可以指定 `1` 个、`2` 个 或 `3` 个值：

  ![image-20220910172046544](02_CSS Flex 布局.assets/image-20220910172046544.png)

- 单值语法：值必须为以下其中之一：

  - 一个无单位数（`<number>`）：它会被当作 `<flex-grow>` 的值
  - 一个有效的宽度（`width`）值：它会被当作 `<flex-basis>` 的值
  - 关键字 `none`、`auto` 或者 `initial`

- 双值语法：第一个值必须为一个无单位数，并且它会被当作 `<flex-grow>` 的值

  - 第二个值必须为以下之一：
    - 一个无单位数：它会被当作 `<flex-shrink>` 的值
    - 一个有效的宽度值：它会被当作 `<flex-basis>` 的值

- 三值语法：

  - 第一个值必须为一个无单位数，并且它会被当作 `<flex-grow>` 的值
  - 第二个值必须为一个无单位数，并且它会被当作 `<flex-shrink>` 的值
  - 第三个值必须为一个有效的宽度值，并且它会被当作 `<flex-basis>` 的值

## 6. （掌握）思考：如下布局（`justify-content: space-between;`）如何解决最后一行的对齐问题

![image-20220911103044733](02_CSS Flex 布局.assets/image-20220911103044733.png)

- 方案一：不使用 `justify-content`，改用 `margin-right`，通过宽度计算进行布局

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      .container {
        display: flex;
        flex-wrap: wrap;
        /* justify-content: space-between; */
  
        width: 500px;
        background-color: #B0D5DF;
      }
  
      .item {
        /* (500px - 110px * 4) / 3 = 20px */
        margin-right: 20px;
  
        width: 110px;
        height: 150px;
      }
  
      .item:nth-child(4n) {
        margin-right: 0;
      }
    </style>
  </head>
  <body>
  
    <div class="container">
      <div class="item item1">1</div>
      <div class="item item2">2</div>
      <div class="item item3">3</div>
      <div class="item item4">4</div>
      <div class="item item5">5</div>
      <div class="item item6">6</div>
      <div class="item item7">7</div>
      <!-- <div class="item item8">8</div> -->
    </div>
  
    <script src="./js/itemRandomColor.js"></script>
  </body>
  </html>
  ```

  ```js
  function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
  }
  const itemEls = document.querySelectorAll('.item')
  for (const itemEl of itemEls) {
    itemEl.style.backgroundColor = getRandomColor()
  }
  ```

- 方案二（扩展性好，推荐）：使用 `justify-content`，同时根据最大的列数（`n`）在 `HTML` 中添加相应数量（`n-2`）的任意元素用来占位

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
  
        width: 500px;
        background-color: #B0D5DF;
      }
  
      .item {
        width: 110px;
        height: 150px;
      }
  
      .container > span {
        /* align-self: stretch; */
        width: 110px;
        /* height: 50px; */
        /* background-color: #f66; */
      }
    </style>
  </head>
  <body>
  
    <div class="container">
      <div class="item item1">1</div>
      <div class="item item2">2</div>
      <div class="item item3">3</div>
      <div class="item item4">4</div>
      <div class="item item5">5</div>
      <div class="item item6">6</div>
      <div class="item item7">7</div>
      <!-- <div class="item item8">8</div> -->
  
      <!-- 添加 (列数 - 2) 个任意元素 -->
      <span></span>
      <span></span>
    </div>
  
    <script src="./js/itemRandomColor.js"></script>
  </body>
  </html>
  ```

  
