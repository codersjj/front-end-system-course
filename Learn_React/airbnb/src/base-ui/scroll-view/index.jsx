import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'

const ScrollView = memo((props) => {
  // 定义内部的状态
  const [showRightBtn, setShowRightBtn] = useState(false)
  const [posIndex, setPosIndex] = useState(0)

  const scrollContentRef = useRef()
  // 只需要记录值（而不需要重新渲染页面），但要求在重新渲染之后仍能保留之前记录的值，可以使用 useRef 实现，而无需使用 useState，因为 setState 会导致重新渲染
  const overflowDistanceRef = useRef()
  // 每次渲染完成后传入 useEffect 的函数会被执行 https://react.dev/reference/react/useEffect#:~:text=When%20your%20component%20is%20added%20to%20the%20DOM%2C%20React%20will%20run%20your%20setup%20function.%20After%20every%20re%2Drender%20with%20changed%20dependencies%2C%20React%20will%20first%20run%20the%20cleanup%20function%20(if%20you%20provided%20it)%20with%20the%20old%20values%2C%20and%20then%20run%20your%20setup%20function%20with%20the%20new%20values.
  useEffect(() => {
    /* 组件渲染完毕，判断是否显示右侧的按钮 */
    // 获取滚动区域的宽度
    const scrollWidth = scrollContentRef.current.scrollWidth
    // 获取元素内部的宽度（padding 两边之间的距离）
    const clientWidth = scrollContentRef.current.clientWidth

    overflowDistanceRef.current = scrollWidth - clientWidth
    setShowRightBtn(overflowDistanceRef.current > 0)
  }, [props.children])

  function handleRightBtnClick() {
    // 注意：不要写成 posIndex++，因为这样做是在直接修改 posIndex
    const newPosIndex = posIndex + 1
    const nextEl = scrollContentRef.current.children[newPosIndex]
    // 获取当前元素左上角相对于 HTMLElement.offsetParent（最邻近的定位祖先元素）节点的左边界偏移的像素值 https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetLeft
    const offsetLeft = nextEl.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${offsetLeft}px)`
    setPosIndex(newPosIndex)
    // 是否继续显示右侧的按钮
    setShowRightBtn(overflowDistanceRef.current > offsetLeft)
  }

  return (
    <ViewWrapper>
      <button>左边按钮</button>
      {showRightBtn && <button onClick={handleRightBtnClick}>右边按钮</button>}
      <div ref={scrollContentRef} className="scroll-content">
        {props.children}
      </div>
    </ViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView