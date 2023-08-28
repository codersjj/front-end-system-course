import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { PicturesWrapper } from './style'

const DetailPictures = memo(({ data = {} }) => {
  const { picture_urls = [] } = data

  const pictureItem = (src) => (
    <div className="item">
      <img src={src} alt="room pic" />
      <div className="cover"></div>
    </div>
  )

  return (
    <PicturesWrapper>
      <div className="left">
        {pictureItem(picture_urls[0])}
      </div>
      <div className="right">
        {
          picture_urls.slice(1, 5).map(url => (
            <div className='pic' key={url}>
              {pictureItem(url)}
            </div>
          ))
        }
      </div>
    </PicturesWrapper>
  )
})

DetailPictures.propTypes = {
  data: PropTypes.object
}

export default DetailPictures