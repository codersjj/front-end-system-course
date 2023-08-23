import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'

const LongForItem = memo((props) => {
  const { city, price, picture_url } = props.itemData

  return (
    <ItemWrapper width={props.itemWidth ?? '20%'}>
      <div className="inner">
        <img className="cover" src={picture_url} alt={`${city} pic`} />
        <div className="mask"></div>
        <div className="info">
          <p className='city'>{city}</p>
          <p className='price'>均价 {price}</p>
        </div>
      </div>
    </ItemWrapper>
  )
})

LongForItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string
}

export default LongForItem