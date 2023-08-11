import React, { memo } from 'react'
import { FooterWrapper } from './style'
import footerData from '@/assets/data/footer.json'

const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="wrapper">
        {/* https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element:~:text=This%20example%20also%20uses%20the%20div%20element%20around%20the%20groups%20of%20dt%20and%20dd%20element%2C%20to%20aid%20with%20styling. */}
        <dl className="list">
          {
            footerData.map(item => {
              return (
                <div className="group" key={item.name}>
                  <dt className="term">{item.name}</dt>
                  {
                    item.list.map(value => {
                      return <dd className="item" key={value}>{value}</dd>
                    })
                  }
                </div>
              )
            })
          }
        </dl>
        <p className='copyright'>
          © 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 · 全国旅游投诉渠道 12301
        </p>
      </div>
    </FooterWrapper>
  )
})

export default AppFooter