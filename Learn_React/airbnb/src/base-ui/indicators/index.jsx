import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorsWrapper } from './style'

const Indicators = memo((props) => {
  const { selectedIndex } = props

  const indicatorsRef = useRef();

  // 组件渲染完后，根据最新的 selectedIndex 计算选中项要滚动的距离
  useEffect(() => {
    console.log('effect', selectedIndex)
    // 根据 selectedIndex 获取当前选中项
    const selectedIndicator = indicatorsRef.current.children[selectedIndex]

    const { offsetLeft } = selectedIndicator
    // getBoundingClientRect() 返回的 DOMRect 对象的 width 包括 content、padding 和 border https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#:~:text=The%20width%20and%20height%20properties%20of%20the%20DOMRect%20object%20returned%20by%20the%20method%20include%20the%20padding%20and%20border%2Dwidth%2C%20not%20only%20the%20content%20width/height.
    const selectedIndicatorWidth = selectedIndicator.getBoundingClientRect().width
    // clientWidth 包括 content 和 padding https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth#:~:text=It%20includes%20padding%20but%20excludes%20borders%2C%20margins%2C%20and%20vertical%20scrollbars%20(if%20present).
    const containerClientWidth = indicatorsRef.current.clientWidth

    // 计算向左移动的距离
    // （关键）向左移动的距离 = 选中项的 offsetLeft + 选中项的（border box 的）width 的一半 - 容器的 padding box 的 width 的一半
    // 我们这里用乘而不用除，因为计算机算乘法相对来说更快一点
    let offset = offsetLeft + selectedIndicatorWidth * 0.5 - containerClientWidth * 0.5

    // translate 负值时向左移动
    indicatorsRef.current.style.transform = `translate(${-offset}px)`

  }, [selectedIndex])

  return (
    <IndicatorsWrapper>
      <div ref={indicatorsRef} className="indicators">
        {props.children}
      </div>
    </IndicatorsWrapper>
  )
})

Indicators.propTypes = {
  selectedIndex: PropTypes.number
}

export default Indicators