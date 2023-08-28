import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { Carousel as AntDesignCarousel } from 'antd'
import { CarouselWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicators from '@/base-ui/indicators'
import classNames from 'classnames'

const Carousel = memo(({ pictureUrls = [] }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const carouselRef = useRef()

  const handleControlClick = (type) => {
    let newIndex = 0
    if (type === 'prev') {
      carouselRef.current.prev()
      newIndex = selectedIndex - 1
    } else if (type === 'next') {
      carouselRef.current.next()
      newIndex = selectedIndex + 1
    }
    const lastIndex = pictureUrls.length - 1
    if (newIndex < 0) newIndex = lastIndex
    if (newIndex > lastIndex) newIndex = 0
    setSelectedIndex(newIndex)
  }

  return (
    <CarouselWrapper>
      <div className="controls">
        <div className="prev" onClick={e => handleControlClick('prev')}>
          <IconArrowLeft width="32" height="32" />
        </div>
        <div className="next" onClick={e => handleControlClick('next')}>
          <IconArrowRight width="32" height="32" />
        </div>
      </div>
      <div className="indicators-box">
        <Indicators selectedIndex={selectedIndex}>
          {
            pictureUrls.map((picUrl, index) => {
              return (
                <div key={picUrl} className='indicator'>
                  <span className={classNames('dot', {
                      active: index === selectedIndex,
                      smaller: (
                        (selectedIndex >= 3 && selectedIndex <= pictureUrls.length - 4)
                        && (index === selectedIndex - 3 || index === selectedIndex + 3)
                      )
                    })}>
                  </span>
                </div>
              )
            })
          }
        </Indicators>
      </div>
      <AntDesignCarousel ref={carouselRef} dots={false}>
        {
          pictureUrls.map(picUrl => {
            return (
              <div key={picUrl} className="cover">
                <img src={picUrl} alt="房屋图片" />
              </div>
            )
          })
        }
      </AntDesignCarousel>
    </CarouselWrapper>
  )
})

Carousel.propTypes = {
  pictureUrls: PropTypes.array
}

export default Carousel