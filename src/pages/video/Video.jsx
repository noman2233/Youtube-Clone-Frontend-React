import React from "react";
import "./video.css";
import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";
import Recomendations from "../../components/recomendations/Recomendations"
import Comments from "../../components/comments/Comments";
const Video = () => {
  return (
    <div className="video">
      <Menu />
      <div className="video_container">
        <Navbar />
        <div className="video_wrapper_container">
          <div className="video_wrapper">
            <div className="video_wrapper_video">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                alt="Video"
                className="video_wrapper_video_card"
              />
              <p className="video_card_title">
                Learn react and Node from lama dev to become a full stack web
                developer and state managment system redux and context API
              </p>
              <div className="video_full_info">
                <p className="views_time">10000 views - Jun 22 , 2022</p>
                <div className="video_like_dislike_save">
                  <div className="info_icon">
                    <ThumbUpAltOutlinedIcon />
                    123
                  </div>
                  <div className="info_icon">
                    <ThumbDownOutlinedIcon />
                    Dislike
                  </div>
                  <div className="info_icon">
                    <ReplyOutlinedIcon />
                    Share
                  </div>
                  <div className="info_icon">
                    <BeenhereOutlinedIcon />
                    Save
                  </div>
                </div>
              </div>
              <div className="logo_subscribe">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4XU3mfOwTGgVcpPG9t70XVpU7NIVGpcsGTW4sv4Ode5nzdHUOubPSKXJDtbtSmnk-7pc&usqp=CAU"
                  alt="Logo"
                  className="logo"
                />
                <div className="name_subscribe_desc">
                  <div className="name_subs">
                    <p className="channel_name">Lama Dev</p>
                    <p className="channel_subscriber">120k Subscribers</p>
                  </div>
                  <p className="video_desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    fugit error perferendis dolorem architecto tempora sint quae
                    est esse odio Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quod, exercitationem?
                  </p>
                </div>
                <button className="subscribe_button">Subscribe</button>
              </div>
              <div className="video_comment">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4XU3mfOwTGgVcpPG9t70XVpU7NIVGpcsGTW4sv4Ode5nzdHUOubPSKXJDtbtSmnk-7pc&usqp=CAU"
                  className="logo"
                  alt=""
                />
                <input
                  type="text"
                  placeholder="Add a comment"
                  className="input_comment"
                />
              </div>
              <div>

              <Comments/>
              <Comments/>
              <Comments/>
              </div>
            </div>
            </div>
     
      <div>

      <Recomendations/>
      <Recomendations/>
      <Recomendations/>
      <Recomendations/>
      <Recomendations/>
      </div>
        
        </div>
      </div>
    </div>
  );
};

export default Video;
