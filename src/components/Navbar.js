import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Shop</h1>
      <ul>
        <li><NavLink to="/" className="navlink">Home</NavLink></li>
        <li><NavLink to="/shop" className="navlink">Shop</NavLink></li>
        <li>Cart</li>
      </ul>
    </nav>
  );
}

export default Navbar;
