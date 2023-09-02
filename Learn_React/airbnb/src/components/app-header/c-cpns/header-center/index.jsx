import React, { memo, useState } from 'react'
import { CenterWrapper } from './style'
import IconSearch from '@/assets/svg/icon_search'
import SearchTabs from './c-cpns/search-tabs'
import SearchSections from './c-cpns/search-sections'
import searchInfos from '@/assets/data/search_infos.json'

const HeaderCenter = memo((props) => {
  const [searchSectionInfos, setSearchSectionInfos] = useState(searchInfos[0].searchInfos)

  const tabItems = searchInfos.map(item => ({
    key: item.key,
    label: item.label
  }))

  const onTabClick = (key) => {
    const searchSectionInfos = searchInfos.find(item => item.key === key).searchInfos
    setSearchSectionInfos(searchSectionInfos)
  }

  return (
    <CenterWrapper>
      {/* <div className="search-bar">
        <div className="label">搜索房源和体验</div>
        <div className="icon">
          <IconSearch />
        </div>
      </div> */}
      <div className="search-details">
        <SearchTabs items={tabItems} onTabClick={onTabClick} />
        <SearchSections items={searchSectionInfos} />
      </div>
    </CenterWrapper>
  )
})

export default HeaderCenter