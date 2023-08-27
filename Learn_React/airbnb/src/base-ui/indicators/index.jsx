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

    const { offsetLeft, clientWidth } = selectedIndicator
    const containerClientWidth = indicatorsRef.current.clientWidth

    // 计算向左移动的距离
    // 向左移动的距离 = 选中项的 offsetLeft + 选中项的 width 的一半 - 容器的 width 的一半
    // 我们这里用乘而不用除，因为计算机算乘法相对来说更快一点
    let offset = offsetLeft + clientWidth * 0.5 - containerClientWidth * 0.5

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