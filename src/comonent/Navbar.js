import React from "react";
import "./Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCartAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <Link to="/s">
        <img className="Logo" src="hat-anime.gif" />
      </Link>

      <div className="search_bar">
        <input className="search_barInput" type="text" />
        <AiOutlineSearch className="Navbar_searchIcon" />
      </div>
      <div className="Navbar_2">
        <div className="Option">
          <span className="Navbar_optionl1">Hello!!!</span>
          <span className="Navbar_optionl2">Sign In</span>
        </div>
        <div className="Option">
          <span className="Navbar_optionl1">Return</span>
          <span className="Navbar_optionl2">&Orders</span>
        </div>
        <div className="Option">
          <span className="Navbar_optionl1">Your</span>
          <span className="Navbar_optionl2">Subscription</span>
        </div>
        <Link to ="/Checkout">
          <div className="navbar_optionBasket">
            <BiCartAlt />
            <span className="Navbar_optionl2 Basketcount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
