import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'

const RoomItem = memo((props) => {
  const { itemData } = props

  return (
    // https://styled-components.com/releases#v5.1.0:~:text=Note%20the%20dollar%20sign%20(%24)%20prefix%20on%20the%20prop%3B%20this%20marks%20it%20as%20transient%20and%20styled%2Dcomponents%20knows%20not%20to%20add%20it%20to%20the%20rendered%20DOM%20element%20or%20pass%20it%20further%20down%20the%20component%20hierarchy.
    <ItemWrapper $verifyColor={itemData.verify_info.text_color || '#39576a'}>
      <div className="cover">
        <img src={itemData.picture_url} alt="cover" />
      </div>
      <p className="desc">{itemData.verify_info.messages.join('·')}</p>
      <p className="name">{itemData.name}</p>
      <p className="price">¥{itemData.price}/晚</p>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem