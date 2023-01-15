import React from "react";
import Card from "../../components/card/Card";
import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <Menu />
      <div className="menu_home">
        <Navbar />
        <div className="home_card">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  );
};

export default Home;
