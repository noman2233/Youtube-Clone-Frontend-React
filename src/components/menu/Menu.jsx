import React from "react";
import "./menu.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsBaseballOutlinedIcon from "@mui/icons-material/SportsBaseballOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from "react-router-dom";


const Menu = () => {


  return (
    <div className="menu">
      <div className="wrapper">
        <div className="logo_name">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4XU3mfOwTGgVcpPG9t70XVpU7NIVGpcsGTW4sv4Ode5nzdHUOubPSKXJDtbtSmnk-7pc&usqp=CAU" alt="" className="logo" />
          <p className="youtube_name">Youtube</p>
        </div>
        <div className="items_wrapper">
          <div className="item">
            <HomeOutlinedIcon />
            Home
          </div>
          <div className="item">
            <ExploreOutlinedIcon />
            Explore
          </div>
          <div className="item">
            <SubscriptionsOutlinedIcon />
            Subscription
          </div>
          <hr className="hr" />
          <div className="item">
            <LibraryAddOutlinedIcon />
            Library
          </div>
          <div className="item">
            <HistoryOutlinedIcon />
            History
          </div>{" "}
          <hr className="hr" />
          <div className="text_button">
            <p className="line">SignIn to Like , Comment , and Share</p>
            <Link to="/signin" style={{textDecoration:"none"}}>
            <button className="signin_button">
              <AccountCircleOutlinedIcon /> Sign In
            </button>
            </Link>
          </div>
          <hr className="hr" />
          <p className="line">Best of Youtube</p>
          <div className="item">
            <SportsBaseballOutlinedIcon />
            Sports
          </div>
          <div className="item">
            <LibraryMusicOutlinedIcon />
            Music
          </div>
          <div className="item">
            <SportsEsportsOutlinedIcon />
            Gaming
          </div>
          <div className="item">
            <MovieCreationOutlinedIcon />
            Movie
          </div>
          <div className="item">
            <NewspaperOutlinedIcon />
            News
          </div>
          <div className="item">
            <LiveTvOutlinedIcon />
            Live
          </div>
          <hr className="hr" />
          <div className="item">
            <SettingsOutlinedIcon />
            Settings
          </div>
          <div className="item">
            <FlagOutlinedIcon />
            Report
          </div>
          <div className="item">
            <ContactSupportOutlinedIcon />
            Help
          </div>
          <div className="item">
            <SettingsBrightnessOutlinedIcon  />
            Dark Mode 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
