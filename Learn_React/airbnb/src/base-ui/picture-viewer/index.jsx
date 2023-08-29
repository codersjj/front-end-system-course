import PropTypes from 'prop-types'
import React, { memo, useEffect } from 'react'
import { ViewerWrapper } from './style'

const PictureViewer = memo((props) => {
  // 当图片浏览器展示出来时，隐藏滚动条
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => document.body.style.overflow = ''
  }, [])

  return (
    <ViewerWrapper>PictureViewer</ViewerWrapper>
  )
})

PictureViewer.propTypes = {}

export default PictureViewer