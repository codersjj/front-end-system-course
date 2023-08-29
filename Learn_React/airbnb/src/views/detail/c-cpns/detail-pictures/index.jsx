import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { PicturesWrapper } from './style'
import PictureViewer from '@/base-ui/picture-viewer'

const DetailPictures = memo(({ data = {} }) => {
  const { picture_urls = [] } = data
  const [show, setShow] = useState(false)

  const pictureItem = (src) => (
    <div className="item" onClick={() => setShow(true)}>
      <img src={src} alt="room pic" />
      <div className="cover"></div>
    </div>
  )

  return (
    <PicturesWrapper>
      <div className="pictures">
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
      </div>
      <button className='show-viewer-btn' onClick={() => setShow(true)}>查看照片</button>
      {show && <PictureViewer onClose={() => setShow(false)} />}
    </PicturesWrapper>
  )
})

DetailPictures.propTypes = {
  data: PropTypes.object
}

export default DetailPictures