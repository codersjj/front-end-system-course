import PropTypes from 'prop-types'
import React, { memo, useRef } from 'react'
import { Carousel as AntDesignCarousel } from 'antd'
import { CarouselWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const Carousel = memo(({ pictureUrls = [] }) => {
  const carouselRef = useRef()

  const handlePrevClick = () => {
    carouselRef.current.prev()
  }

  const handleNextClick = () => {
    carouselRef.current.next()
  }

  return (
    <CarouselWrapper>
      <div className="controls">
        <div className="prev" onClick={handlePrevClick}>
          <IconArrowLeft width="32" height="32" />
        </div>
        <div className="next" onClick={handleNextClick}>
          <IconArrowRight width="32" height="32" />
        </div>
      </div>
      <div className="indicators">
        my indicators
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