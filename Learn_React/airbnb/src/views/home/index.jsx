import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyObj } from '@/utils'

const Home = memo(() => {
  // 从 redux 中获取数据
  const goodPriceInfo = useSelector(state => state.home.goodPriceInfo)
  const highScoreInfo = useSelector(state => state.home.highScoreInfo)
  const discountInfo = useSelector(state => state.home.discountInfo)
  const recommendInfo = useSelector(state => state.home.recommendInfo)

  const dispatch = useDispatch()

  // 在 useEffect 中派发异步的事件，发起网络请求（在组件这里只是发起，具体的网络请求逻辑放到 redux 中完成 -> store 中使用 rtk 的 createAsyncThunk 发起异步请求 -> 调用 services 中封装的请求方法）
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {!isEmptyObj(discountInfo) && <HomeSectionV2 data={discountInfo} />}
        {!isEmptyObj(recommendInfo) && <HomeSectionV2 data={recommendInfo} />}
        {/* 拿到数据后再做渲染，不然会渲染两次 */}
        {!isEmptyObj(goodPriceInfo) && <HomeSectionV1 data={goodPriceInfo} />}
        {!isEmptyObj(highScoreInfo) && <HomeSectionV1 data={highScoreInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default Home