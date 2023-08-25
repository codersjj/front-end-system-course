import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import { RoomsWrapper } from './style'
import RoomItem from '@/components/room-item'

const EntireRooms = memo(() => {
  // 从 redux 中获取 roomList 数据
  const roomList = useSelector(state => state.entire.roomList)
  const totalCount = useSelector(state => state.entire.totalCount)

  return (
    <RoomsWrapper>
      {!!totalCount && <h2 className="title">{totalCount} 多处住所</h2>}
      <div className="room-list">
        {
          roomList.map(room => <RoomItem key={room.id} itemData={room} />)
        }
      </div>
    </RoomsWrapper>
  )
})

export default EntireRooms