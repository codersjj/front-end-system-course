import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import SectionHeader from '@/components/section-header'
import RoomItem from '@/components/room-item'

const Home = memo(() => {
  // 从 redux 中获取数据
  const goodPriceInfo = useSelector(state => state.home.goodPriceInfo)

  const dispatch = useDispatch()

  // 在 useEffect 中派发异步的事件，发起网络请求（在组件这里只是发起，具体的网络请求逻辑放到 redux 中完成 -> store 中使用 rtk 的 createAsyncThunk 发起异步请求 -> 调用 services 中封装的请求方法）
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title} />
          <ul className='room-list'>
            {
              goodPriceInfo.list?.slice(0, 8).map(item => {
                return <RoomItem itemData={item} key={item.id} />
              })
            }
          </ul>
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home