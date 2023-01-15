import React from 'react'

const recomendations = () => {
  return (
    <div className="video_recomendations_container">
            <div className="video_recomendations">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                alt="card"
                className="video_reco_card"
              />
              <div className="card_info_reco">
                <p className="card_title_reco">
                  Learn react from lama dev to become
                </p>
                <p className="card_channel_reco">Lama dev</p>
                <span className="views_time_reco">10000 views - 1 day ago</span>
              </div>
            </div>
          
          </div> 
  )
}

export default recomendations