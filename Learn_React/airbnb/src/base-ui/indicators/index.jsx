import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { IndicatorsWrapper } from './style'

const Indicators = memo((props) => {
  return (
    <IndicatorsWrapper>
      {props.children}
    </IndicatorsWrapper>
  )
})

Indicators.propTypes = {}

export default Indicators