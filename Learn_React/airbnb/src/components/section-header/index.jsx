import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HeaderWrapper } from './style'

const SectionHeader = memo((props) => {
  const { title, subtitle = '我是默认的副标题' } = props

  return (
    <HeaderWrapper>
      <h2 className="title">{title}</h2>
      <p className='subtitle'>{subtitle}</p>
    </HeaderWrapper>
  )
})

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default SectionHeader