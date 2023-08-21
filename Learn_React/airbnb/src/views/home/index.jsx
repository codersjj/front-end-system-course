import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionRooms from '@/components/section-rooms'

const Home = memo(() => {
  // 从 redux 中获取数据
  const goodPriceInfo = useSelector(state => state.home.goodPriceInfo)
  const highScoreInfo = useSelector(state => state.home.highScoreInfo)
  const discountInfo = useSelector(state => state.home.discountInfo)

  const dispatch = useDispatch()

  // 在 useEffect 中派发异步的事件，发起网络请求（在组件这里只是发起，具体的网络请求逻辑放到 redux 中完成 -> store 中使用 rtk 的 createAsyncThunk 发起异步请求 -> 调用 services 中封装的请求方法）
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  // 数据的转换
  const tabNames = discountInfo.dest_address?.map(item => item.name)

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">

        <div className="discount">
          <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle} />
          <SectionTabs tabNames={tabNames} />
          <SectionRooms roomList={discountInfo.dest_list?.成都} itemWidth="33.33333%" />
        </div>

        <HomeSectionV1 data={goodPriceInfo} />
        <HomeSectionV1 data={highScoreInfo} />
      </div>
    </HomeWrapper>
  )
})

export default Home