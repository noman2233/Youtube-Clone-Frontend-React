import React from "react";
import "./navbar.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_wrapper">
        <div className="input_wrapper">
          <input type="text" placeholder="Search Here" className="search_bar" />
          <SearchOutlinedIcon />
        </div>
        <Link to="/signin" style={{textDecoration:"none"}}>
          <button className="signIn_button">
            <AccountCircleOutlinedIcon />
            SignIn
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
