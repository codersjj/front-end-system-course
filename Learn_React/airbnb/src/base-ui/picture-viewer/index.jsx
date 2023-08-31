import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import classNames from 'classnames'
import { ViewerWrapper } from './style'
import IconClose from '@/assets/svg/icon-close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconTriangleDownArrow from '@/assets/svg/icon-triangle-down-arrow'
import IconTriangleUpArrow from '@/assets/svg/icon-triangle-up-arrow'
import Indicators from '../indicators'

const PictureViewer = memo((props) => {
  const { onClose, pictureUrls = [] } = props

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isValidClick, setIsValidClick] = useState(true)
  const [isNext, setIsNext] = useState(true)
  const [isShowList, setIsShowList] = useState(true)
  const [isMouseOut, setIsMouseOut] = useState(false)

  // 当图片浏览器展示出来时，隐藏滚动条
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => document.body.style.overflow = ''
  }, [])

  /* 事件监听的逻辑 */
  const handleClose = () => {
    if (onClose) onClose()
  }

  const handleControlClick = isNext => {
    if (!isValidClick) return

    setIsNext(isNext)
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    const lastIndex = pictureUrls.length - 1
    if (newIndex < 0) newIndex = lastIndex
    if (newIndex > lastIndex) newIndex = 0
    setCurrentIndex(newIndex)
  }

  const handleMouseOver = () => {
    if (isMouseOut) setIsShowList(true)
    setIsMouseOut(false)
  }

  const handleToggleList = () => {
    setIsShowList(!isShowList)
  }

  const handleItemClick = (index) => {
    setIsNext(index > currentIndex)
    setCurrentIndex(index)
  }

  return (
    <ViewerWrapper isNext={isNext} isShowList={isShowList}>
      <div className="top">
        <div className="close" onClick={handleClose}>
          <IconClose />
        </div>
      </div>
      <div className="content">
        <div className="controls">
          <button className="left" onClick={e => handleControlClick()}>
            <IconArrowLeft width="4.8em" height="4.8em" />
          </button>
          <button className="right" onClick={e => handleControlClick(true)}>
            <IconArrowRight width="4.8em" height="4.8em" />
          </button>
        </div>
        <div className="picture">
          <SwitchTransition mode='in-out'>
            <CSSTransition
              key={pictureUrls[currentIndex]}
              classNames="pic"
              timeout={200}
              onEnter={() => {
                console.log('onEnter')
                setIsValidClick(false)
              }}
              onExited={() => {
                console.log('onExited')
                setIsValidClick(true)
              }}
            >
              <img src={pictureUrls[currentIndex]} alt="房间图片" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview"
        onMouseOut={e => setIsMouseOut(true)}
        onMouseOver={handleMouseOver}
      >
        <div className="preview-content">
          <div className="info">
            <div className="count">
              <span>{currentIndex + 1}/{pictureUrls.length}：room apartment图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={handleToggleList}>
              <span>{isShowList ? '隐藏' : '显示'}照片列表</span>
              {isShowList ? <IconTriangleDownArrow /> : <IconTriangleUpArrow />}
            </div>
          </div>
          <div className="list">
            <Indicators selectedIndex={currentIndex}>
              {pictureUrls.map((url, index) => {
                return (
                  <div
                    key={url}
                    className={classNames('item', { active: currentIndex === index })}
                    onClick={e => handleItemClick(index)}
                  >
                    <img src={url} alt="房间图片" />
                  </div>
                )
              })}
            </Indicators>
          </div>
        </div>
      </div>
    </ViewerWrapper>
  )
})

PictureViewer.propTypes = {
  pictureUrls: PropTypes.array,
  onClose: PropTypes.func
}

export default PictureViewer