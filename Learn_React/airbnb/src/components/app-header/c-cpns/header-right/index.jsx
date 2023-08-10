import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'

const HeaderRight = memo(() => {
  // 定义组件内部的状态
  const [isShowPanel, setIsShowPanel] = useState(false)

  // 事件处理函数
  function handleProfileClick(e) {
    console.log('click')
    setIsShowPanel(!isShowPanel)
    e.stopPropagation()
  }

  // 副作用代码
  useEffect(() => {
    function hidePanel() {
      setIsShowPanel(false)
    }

    function clickListener() {
      console.log('window clickListener')
      hidePanel()
    }
    function blurListener() {
      console.log('window blurListener')
      hidePanel()
    }

    // window.addEventListener('click', clickListener, true)
    window.addEventListener('click', clickListener)
    window.addEventListener('blur', blurListener)

    return () => {
      // window.removeEventListener('click', clickListener, true)
      window.removeEventListener('click', clickListener)
      window.removeEventListener('blur', blurListener)
    }
  }, [])

  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>
      <div className="profile" onClick={handleProfileClick}>
        <div className="menu">
          <IconMenu />
        </div>
        <div className="avatar">
          <IconAvatar />
        </div>
        {
          isShowPanel && (
            <div className="panel">
              <div className="top">
                <div className="item register">注册</div>
                <div className="item">登录</div>
              </div>
              <div className="divider"></div>
              <div className="bottom">
                <div className="item">出租房源</div>
                <div className="item">开展体验</div>
                <div className="item">帮助</div>
              </div>
            </div>
          )
        }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight