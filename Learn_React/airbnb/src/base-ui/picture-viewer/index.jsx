import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { ViewerWrapper } from './style'
import IconClose from '@/assets/svg/icon-close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const PictureViewer = memo((props) => {
  const { onClose, pictureUrls = [] } = props

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isValidClick, setIsValidClick] = useState(true)
  const [isNext, setIsNext] = useState(true)

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

  return (
    <ViewerWrapper isNext={isNext}>
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
      <div className="preview"></div>
    </ViewerWrapper>
  )
})

PictureViewer.propTypes = {
  pictureUrls: PropTypes.array,
  onClose: PropTypes.func
}

export default PictureViewer