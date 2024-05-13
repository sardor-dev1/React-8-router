import React from "react";
import "./navbar.scss";

import navLogo from "../../../assets/images/navLogo.svg";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="">
      <nav className="container nav">
        <ul className="nav__list">
          <Link to={"/"}>Home</Link>
          <Link to={"/shop"}>Shop all</Link>
          <Link to={"/blog"}>Blog page</Link>
          <div>
            <img src={navLogo} alt="" />
          </div>
          <Link to={"/about"}>About page</Link>
        </ul>
        <div>
          <input
            className="nav__inp"
            type="text"
            placeholder="Search Product"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
