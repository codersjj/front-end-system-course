import PropTypes from 'prop-types'
import React, { memo } from 'react'
import styleStrToObject from './utils'

const IconTriangleDownArrow = memo(({ width = '10px', height = '10px' }) => {
  return (
    <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={styleStrToObject(`height: ${height}; width: ${width}; fill: currentcolor;`)}><path d="m23.85 6.86-11.5 11a .5.5 0 0 1 -.69 0l-11.5-11a .5.5 0 0 1 .34-.86h23a .5.5 0 0 1 .35.86z" fillRule="evenodd"></path></svg>
  )
})

IconTriangleDownArrow.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default IconTriangleDownArrow