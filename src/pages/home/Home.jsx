import React from "react";
import Navbar from "../../components/layout/header/Navbar";
import HomeHero from "../../components/home-hero/HomeHero";
import HomeAbout from "../../components/home-about/HomeAbout";
import HomeShop from "../../components/home-shopping/HomeShop";
import HomeChose from "../../components/home-chose/HomeChose";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeAbout />
      <HomeShop />
      <HomeChose />
    </div>
  );
};

export default Home;
