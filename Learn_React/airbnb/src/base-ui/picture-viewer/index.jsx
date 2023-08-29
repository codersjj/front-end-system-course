import PropTypes from 'prop-types'
import React, { memo, useEffect } from 'react'
import { ViewerWrapper } from './style'
import IconClose from '@/assets/svg/icon-close'

const PictureViewer = memo((props) => {
  const { onClose } = props

  // 当图片浏览器展示出来时，隐藏滚动条
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => document.body.style.overflow = ''
  }, [])

  /* 事件监听的逻辑 */
  const handleClose = () => {
    if (onClose) onClose()
  }

  return (
    <ViewerWrapper>
      <div className="top">
        <div className="close" onClick={handleClose}>
          <IconClose />
        </div>
      </div>
      <div className="carousel"></div>
      <div className="bottom"></div>
    </ViewerWrapper>
  )
})

PictureViewer.propTypes = {
  onClose: PropTypes.func
}

export default PictureViewer