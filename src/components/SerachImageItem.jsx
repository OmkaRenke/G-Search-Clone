import React from 'react'

import "../style/SerachImageItem.css"
const SerachImageItem = ({data}) => {
  return (
    <div className='SerachImageItem' onClick={()=>window.open(data.image.contextLink)}>
      <div className='image'>
          <img className='singleImage' src={data.link} alt="" />
      </div>
      <div className='displayLink'>
        {data.displayLink}
      </div>
      <div className='title'>
      {data.title}
      </div>
    </div>
  )
}

export default SerachImageItem