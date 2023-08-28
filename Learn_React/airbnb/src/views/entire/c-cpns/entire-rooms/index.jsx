import React, { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RoomsWrapper } from './style'
import RoomItem from '@/components/room-item'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo(() => {
  // 从 redux 中获取 roomList 数据
  const roomList = useSelector(state => state.entire.roomList)
  const totalCount = useSelector(state => state.entire.totalCount)
  const isLoading = useSelector(state => state.entire.isLoading)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleItemClick = useCallback((itemData) => {
    dispatch(changeDetailInfoAction(itemData))
    navigate('/detail')
  }, [dispatch, navigate])

  return (
    <RoomsWrapper>
      {!!totalCount && <h2 className="title">{totalCount} 多处住所</h2>}
      <div className="room-list">
        {
          roomList.map(room => (
            <RoomItem
              key={room._id}
              itemData={room}
              onClick={handleItemClick}
            />
          ))
        }
      </div>
      {isLoading && <div className='cover'></div>}
    </RoomsWrapper>
  )
})

export default EntireRooms