# ScrollView 的封装思路

## 传递内容

1. 将列表内容用 ScrollView 包裹，ScrollView 中通过 props.children 获取传入的内容

## 判断 ScrollView 要不要滚动（初始状态下右侧按钮的显示/隐藏）

1. 获取容器的 scrollWidth 和 clientWidth
2. scrollWidth - clientWidth 得到溢出部分的长度 overflowDistance
3. 如果溢出部分的长度大于 0，就显示右侧按钮，否则隐藏右侧按钮

## 点击右侧按钮滚动

1. 点击前先记录当前滚动位置（索引）posIndex，初始值为 0
2. 每次点击右侧按钮，posIndex 加 1
3. 根据新的 posIndex，获取目标项（子元素）：prevOrNextEl = scrollContentRef.current.children[posIndex]
4. 获取该子元素距离容器左侧的距离：offsetLeft = prevOrNextEl.offsetLeft
   1. 由于 offsetLeft 是相对于 offsetParent 的，而 offsetParent 是相对于最邻近的定位祖先元素，所以记得在容器上设置定位
   2. 或者事先设置非 none 值的 transform 也可以，这是利用了 transform 会生成新的层叠上下文（stacking context）的特性，transform 会生成新的包含块，取代元素原来所在的包含块
5. 通过 transform translate 进行位移：scrollContentRef.current.style.transform = `translate(-${offsetLeft}px)`
   1. 可以像上面这样直接修改
   2. 也可以写到样式中，再动态传值
6. 判断是否继续显示右侧按钮
   - 即判断 overflowDistance - offsetLeft 是否大于 0，大于 0 就继续显示，否则隐藏
7. 判断是否继续显示左侧按钮
   - 即判断 offsetLeft 是否大于 0，大于 0 就继续显示，否则隐藏

## 点击左侧按钮滚动

1. 除了每次点击时，posIndex 减 1，其它逻辑和点击右侧按钮一样