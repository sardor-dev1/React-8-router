import { useState } from "react";
import "./app.scss";

import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Shop from "./pages/shop/Shop";
import Home from "./pages/home/Home";
import Navbar from "./components/layout/header/Navbar";
import Footer from "./components/layout/footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
