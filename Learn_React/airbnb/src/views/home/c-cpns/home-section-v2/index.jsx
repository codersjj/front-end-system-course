import PropTypes from 'prop-types'
import React, { memo, useState, useCallback } from 'react'

import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const SectionV2 = memo((props) => {
  const { data } = props

  // const initialAddress = Object.keys(data.dest_list ?? {})[0] ?? ''
  const initialAddress = Object.keys(data.dest_list)[0]
  // 传入 useState 的参数只会在初次渲染时有效，之后就会被忽略了 https://react.dev/reference/react/useState#:~:text=This%20argument%20is%20ignored%20after%20the%20initial%20render.
  // （推荐）解决方案 1：（在父组件中）拿到数据后再进行初次渲染
  const [address, setAddress] = useState(initialAddress)

  // 解决方案 2：通过 useEffect 进行赋值，但这会导致组件多渲染一次，总共渲染 3 次
  // useEffect(() => {
  //   setAddress(initialAddress)
  // }, [initialAddress])

  const tabNames = data.dest_address?.map(item => item.name)

  const onTabClick = useCallback((tabName, index) => {
    setAddress(tabName)
  }, [])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={data.title} subtitle={data.subtitle} />
      <SectionTabs tabNames={tabNames} onTabClick={onTabClick} />
      <SectionRooms roomList={data.dest_list?.[address]} itemWidth="33.33333%" />
      <SectionFooter text={address} />
    </SectionV2Wrapper>
  )
})

SectionV2.propTypes = {
  data: PropTypes.object
}

export default SectionV2