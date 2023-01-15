import React from 'react'
import "./card.css"
const Card = () => {
  return (
    <div className="card">
      <div className="image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="" className="card_image"/>
      </div>
      <div className="card_info_logo">
        <img src="./images/logo.png" alt="" className='card_logo'/>
        <div className="card_info">
          <p className="card_title">Learn react from lama dev to become web developer ...</p>
          <p className="card_channel">Lama dev</p>
          <span className="views_time">10000 views - 1 day ago</span>
        </div>
      </div>
    </div>
  )
}

export default Card