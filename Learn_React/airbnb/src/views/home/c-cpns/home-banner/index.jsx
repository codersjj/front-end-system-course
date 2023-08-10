import React, { memo } from 'react'
import { BannerWrapper } from './style'
// import coverImg from "@/assets/img/cover_01.jpeg"

const HomeBanner = memo(() => {
  return (
    <BannerWrapper>
      {/* 直接写路径 Webpack 解析不了 */}
      {/* <img src="../../../../assets/img/cover_01.jpeg" alt="" /> */}
      {/* 有效写法 */}
      {/* <img src={coverImg} alt="" /> */}
    </BannerWrapper>
  )
})

export default HomeBanner