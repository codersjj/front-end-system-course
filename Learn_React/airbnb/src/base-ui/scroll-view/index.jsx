import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
  // 定义内部的状态
  const [showLeftBtn, setShowLeftBtn] = useState(false)
  const [showRightBtn, setShowRightBtn] = useState(false)

  const scrollContentRef = useRef()
  // 只需要记录值（而不需要重新渲染页面），但要求在重新渲染之后仍能保留之前记录的值，可以使用 useRef 实现，而无需使用 useState，因为 setState 会导致重新渲染
  const posIndexRef = useRef(0)
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

  // function handleLeftBtnClick() {
  //   posIndexRef.current--
  //   const prevEl = scrollContentRef.current.children[posIndexRef.current]
  //   const offsetLeft = prevEl.offsetLeft
  //   scrollContentRef.current.style.transform = `translate(-${offsetLeft}px)`
  //   setShowLeftBtn(offsetLeft > 0)
  //   // 是否继续显示右侧的按钮
  //   setShowRightBtn(overflowDistanceRef.current > offsetLeft)
  // }

  function handleBtnClick(direction) {
    // 获取预期的 offsetLeft 的方案三：在获取 offsetLeft 之前先设置一下 transform（非 none 值）
    // scrollContentRef.current.style.transform = `translate(0px)`
    // console.log(scrollContentRef.current.children[0].offsetLeft)

    if (direction === 'left') {
      posIndexRef.current--
    } else {
      posIndexRef.current++
    }
    const prevOrNextEl = scrollContentRef.current.children[posIndexRef.current]
    // 获取当前元素左上角相对于 HTMLElement.offsetParent（最邻近的定位祖先元素）节点的左边界偏移的像素值 https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetLeft 忽略应用于元素及其祖先的任何变换 https://drafts.csswg.org/cssom-view/#dom-htmlelement-offsetleft
    // 注意：在获取 offsetLeft 的时候，如果祖先元素上有设置（非 none） transform、perspective、filter 等 CSS 属性，那么 offsetLeft 会相对于有设置这些属性的最邻近的祖先元素进行计算，测试发现，优先级高于设置了 position（非 none）的元素 https://developer.mozilla.org/en-US/docs/Web/CSS/position#:~:text=unless%20any%20ancestor%20has%20transform%2C%20perspective%2C%20or%20filter%20property%20set%20to%20something%20other%20than%20none%20(see%20CSS%20Transforms%20Spec)%2C%20which%20then%20causes%20that%20ancestor%20to%20take%20the%20place%20of%20the%20elements%20containing%20block.
    const offsetLeft = prevOrNextEl.offsetLeft
    // console.log("🚀 ~ file: index.jsx:45 ~ handleBtnClick ~ offsetLeft:", offsetLeft)
    scrollContentRef.current.style.transform = `translate(-${offsetLeft}px)`
    // 是否继续显示左侧的按钮
    setShowLeftBtn(offsetLeft > 0)
    // 是否继续显示右侧的按钮
    setShowRightBtn(overflowDistanceRef.current > offsetLeft)
  }

  return (
    <ViewWrapper>
      {showLeftBtn && (
        <div className='control left' onClick={e => handleBtnClick('left')}>
          <IconArrowLeft />
        </div>
      )}
      {showRightBtn && (
        <div className='control right' onClick={e => handleBtnClick('right')}>
          <IconArrowRight />
        </div>
      )}
      <div className="content">
        <div ref={scrollContentRef} className="scroll-content">
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView