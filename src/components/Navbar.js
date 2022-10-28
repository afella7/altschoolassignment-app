import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinkStyles = ({ isActive }) => {
    return {
      color : isActive ? "white" : "blue",
      
    };
  };
  return (
    <nav className="primary-nav">
      <NavLink  to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="/users">
        Users
      </NavLink>
      <NavLink style={navLinkStyles} to="/products">
        Products
      </NavLink>
    </nav>
  );
}

export default Navbar;
