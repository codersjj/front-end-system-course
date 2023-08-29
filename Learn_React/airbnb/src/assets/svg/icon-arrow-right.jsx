import PropTypes from 'prop-types'
import React, { memo } from 'react'
import styleStrToObject from './utils';

const IconArrowRight = memo(({ width = '12px', height = '12px' }) => {
  return (
    <svg viewBox="0 0 18 18" role="img" aria-hidden="false" aria-label="next" focusable="false" style={styleStrToObject(`height: ${height}; width: ${width}; display: block; fill: currentcolor;`)}><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd"></path></svg>
  )
})

IconArrowRight.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default IconArrowRight