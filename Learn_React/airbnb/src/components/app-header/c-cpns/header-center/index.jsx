import React, { memo, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { CenterWrapper } from './style'
import IconSearch from '@/assets/svg/icon_search'
import SearchTabs from './c-cpns/search-tabs'
import SearchSections from './c-cpns/search-sections'
import searchInfos from '@/assets/data/search_infos.json'

const HeaderCenter = memo(({ isSearch, onSearchClick }) => {
  const [searchSectionInfos, setSearchSectionInfos] = useState(searchInfos[0].searchInfos)

  const tabItems = searchInfos.map(item => ({
    key: item.key,
    label: item.label
  }))

  const handleSearchClick = () => {
    if (onSearchClick) onSearchClick()
  }

  const onTabClick = (key) => {
    const searchSectionInfos = searchInfos.find(item => item.key === key).searchInfos
    setSearchSectionInfos(searchSectionInfos)
  }

  return (
    <CenterWrapper>
      {/* {
        !isSearch
          ? (
            <div className="search-bar" onClick={handleSearchClick}>
              <div className="label">搜索房源和体验</div>
              <div className="icon">
                <IconSearch />
              </div>
            </div>
          )
          : (
            <div className="search-details">
              <SearchTabs items={tabItems} onTabClick={onTabClick} />
              <SearchSections items={searchSectionInfos} />
            </div>
          )
      } */}
      <CSSTransition
        in={!isSearch}
        classNames='bar'
        timeout={250}
        unmountOnExit
      >
        <div className="search-bar" onClick={handleSearchClick}>
          <div className="label">搜索房源和体验</div>
          <div className="icon">
            <IconSearch />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        classNames='detail'
        timeout={250}
        unmountOnExit
      >
        <div className="search-detail">
          <SearchTabs items={tabItems} onTabClick={onTabClick} />
          <div className="infos">
            <SearchSections items={searchSectionInfos} />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default HeaderCenter