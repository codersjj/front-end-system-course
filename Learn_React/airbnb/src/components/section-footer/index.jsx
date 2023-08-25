import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo((props) => {
  // eslint-disable-next-line no-unused-vars
  const { text, onMoreClick } = props

  const showText = text ? `显示更多${text}房源` : '显示全部'

  // 事件处理的逻辑
  const navigate = useNavigate()
  function handleMoreClick() {
    // 如果点击后的需要做的操作不一样，可以将事件传递出去（调用外面传入的方法）
    // if (onMoreClick) {
    //   onMoreClick()
    // } else {
    //   navigate('/entire')
    // }
    navigate('/entire')
  }

  return (
    <FooterWrapper isThemeColor={text}>
      <div className="left" onClick={handleMoreClick}>
        <div className="text">{showText}</div>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  text: PropTypes.string,
  onMoreClick: PropTypes.func
}

export default SectionFooter