import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'

const ScrollView = memo((props) => {
  // 定义内部的状态
  const [showRightBtn, setShowRightBtn] = useState(false)

  const scrollContentRef = useRef()
  // 每次渲染完成后传入 useEffect 的函数会被执行 https://react.dev/reference/react/useEffect#:~:text=When%20your%20component%20is%20added%20to%20the%20DOM%2C%20React%20will%20run%20your%20setup%20function.%20After%20every%20re%2Drender%20with%20changed%20dependencies%2C%20React%20will%20first%20run%20the%20cleanup%20function%20(if%20you%20provided%20it)%20with%20the%20old%20values%2C%20and%20then%20run%20your%20setup%20function%20with%20the%20new%20values.
  useEffect(() => {
    /* 组件渲染完毕，判断是否显示右侧的按钮 */
    // 获取滚动区域的宽度
    const scrollWidth = scrollContentRef.current.scrollWidth
    // 获取元素内部的宽度（padding 两边之间的距离）
    const clientWidth = scrollContentRef.current.clientWidth

    setShowRightBtn(scrollWidth - clientWidth > 0)
  }, [props.children])

  return (
    <ViewWrapper>
      <button>左边按钮</button>
      {showRightBtn && <button>右边按钮</button>}
      <div ref={scrollContentRef} className="scroll-content">
        {props.children}
      </div>
    </ViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView