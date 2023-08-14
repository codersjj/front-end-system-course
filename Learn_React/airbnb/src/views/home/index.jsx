import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@mui/material'

import { fetchHomeDataAction } from '@/store/modules/home'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'

const Home = memo(() => {
  const [sectionOrder, setSectionOrder] = useState(['goodPrice', 'highScore'])

  // 从 redux 中获取数据
  const goodPriceInfo = useSelector(state => state.home.goodPriceInfo)
  const highScoreInfo = useSelector(state => state.home.highScoreInfo)

  const dispatch = useDispatch()

  // 在 useEffect 中派发异步的事件，发起网络请求（在组件这里只是发起，具体的网络请求逻辑放到 redux 中完成 -> store 中使用 rtk 的 createAsyncThunk 发起异步请求 -> 调用 services 中封装的请求方法）
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  const sections = {
    goodPrice: <HomeSectionV1 data={goodPriceInfo} />,
    highScore: <HomeSectionV1 data={highScoreInfo} />
  }

  function handleShuffle() {
    const newSectionOrder = shuffleArray(sectionOrder)
    setSectionOrder(newSectionOrder)
  }

  function shuffleArray(array) {
    const shuffledArray = [...array]
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      if (i !== j) {
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
      }
    }
    return shuffledArray
  }

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <Button variant='contained' onClick={handleShuffle}>随机排序</Button>
        {
          sectionOrder.map(sectionName => {
            const section = sections[sectionName]
            return (
              <div key={sectionName}>
                {section}
              </div>
            )
          })
        }
      </div>
    </HomeWrapper>
  )
})

export default Home