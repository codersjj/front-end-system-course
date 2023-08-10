import React, { memo } from 'react'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'

const Home = memo(() => {
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        哈哈哈
        {/* <div className="section">
          <div className="title"></div>
          <div className="content"></div>
        </div> */}
      </div>
    </HomeWrapper>
  )
})

export default Home