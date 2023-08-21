import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'

const SectionFooter = memo((props) => {
  const { text } = props

  const showText = text ? `显示更多${text}房源` : '显示全部'

  return (
    <FooterWrapper isThemeColor={text}>
      <div className="left">
        <div className="text">{showText}</div>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  text: PropTypes.string
}

export default SectionFooter