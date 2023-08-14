import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { Rating } from '@mui/material'
import { ItemWrapper } from './style'

const RoomItem = memo((props) => {
  const { itemData, itemWidth } = props

  return (
    // https://styled-components.com/releases#v5.1.0:~:text=Note%20the%20dollar%20sign%20(%24)%20prefix%20on%20the%20prop%3B%20this%20marks%20it%20as%20transient%20and%20styled%2Dcomponents%20knows%20not%20to%20add%20it%20to%20the%20rendered%20DOM%20element%20or%20pass%20it%20further%20down%20the%20component%20hierarchy.
    <ItemWrapper
      $verifyColor={itemData.verify_info.text_color || '#39576a'}
      width={itemWidth}
    >
      <div className="cover">
        <img src={itemData.picture_url} alt="cover" />
      </div>
      <p className="desc">{itemData.verify_info.messages.join('·')}</p>
      <p className="name">{itemData.name}</p>
      <p className="price">¥{itemData.price}/晚</p>

      <div className="bottom">
        <div className="rating">
          <Rating
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{
              color: '#00848A',
              fontSize: 12
            }}
          />
        </div>
        <span className="review-count">{itemData.reviews_count}</span>
        {
          itemData.bottom_info?.content && <span className="extra">· {itemData.bottom_info.content}</span>
        }
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string
}

export default RoomItem