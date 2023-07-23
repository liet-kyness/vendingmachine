import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="navbar">
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/coke">Coke</NavLink>
        <NavLink exact to="/pepsi">Pepsi</NavLink>
        <NavLink exact to="/mountaindew">Mountain Dew</NavLink>
      </nav>
    );
}

export default NavBar;