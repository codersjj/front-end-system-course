import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorsWrapper } from './style'

const Indicators = memo((props) => {
  const { selectedIndex = 0, alwaysCenter } = props

  if (selectedIndex < 0 || selectedIndex > props.children.length - 1) {
    console.error('Indicators: selectedIndex out of bounds')
  }

  const indicatorsRef = useRef();

  // 组件渲染完后，根据最新的 selectedIndex 计算选中项要滚动的距离
  useEffect(() => {
    // 根据 selectedIndex 获取当前选中项
    const selectedIndicator = indicatorsRef.current.children[selectedIndex]

    if (!selectedIndicator) return

    const { offsetLeft } = selectedIndicator
    // getBoundingClientRect() 返回的 DOMRect 对象的 width 包括 content、padding 和 border https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#:~:text=The%20width%20and%20height%20properties%20of%20the%20DOMRect%20object%20returned%20by%20the%20method%20include%20the%20padding%20and%20border%2Dwidth%2C%20not%20only%20the%20content%20width/height.
    const selectedIndicatorWidth = selectedIndicator.getBoundingClientRect().width
    // clientWidth 包括 content 和 padding https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth#:~:text=It%20includes%20padding%20but%20excludes%20borders%2C%20margins%2C%20and%20vertical%20scrollbars%20(if%20present).
    const containerClientWidth = indicatorsRef.current.clientWidth

    // 计算向左移动的距离
    // （关键）向左移动的距离 = 选中项的 offsetLeft + 选中项的（border box 的）width 的一半 - 容器的 padding box 的 width 的一半
    // 我们这里用乘而不用除，因为计算机算乘法相对来说更快一点
    let offset = offsetLeft + selectedIndicatorWidth * 0.5 - containerClientWidth * 0.5

    if (!alwaysCenter) {
      // 左边的特殊情况处理
      if (offset < 0) offset = 0

      // 右边的特殊情况处理
      // scrollWidth 的计算有点问题，它没有包含最后一个子元素的 margin，但不影响我们这里最终的效果
      // https://drafts.csswg.org/cssom-view/#dom-element-scrollwidth
      // https://drafts.csswg.org/cssom-view/#scrolling-area
      // https://github.com/w3c/csswg-drafts/issues/4577
      const scrollWidth = indicatorsRef.current.scrollWidth
      const overflowWidth = scrollWidth - containerClientWidth
      if (offset > overflowWidth) offset = overflowWidth
    }

    // translate 负值时向左移动
    indicatorsRef.current.style.transform = `translate(${-offset}px)`

  }, [selectedIndex, alwaysCenter])

  return (
    <IndicatorsWrapper>
      <div ref={indicatorsRef} className="indicators">
        {props.children}
      </div>
    </IndicatorsWrapper>
  )
})

Indicators.propTypes = {
  selectedIndex: PropTypes.number,
  alwaysCenter: PropTypes.bool
}

export default Indicators