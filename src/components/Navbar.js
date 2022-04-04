import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as CartIcon } from '../assets/shopping-cart.svg';

function Navbar({ showCart, cartItems }) {
  const [itemAmount, setItemAmount] = useState(0);

  useEffect(() => {
    let counter = 0;
    for (let i = 0; i < cartItems.length; i += 1) {
      counter += cartItems[i].counter;
    }
    setItemAmount(counter);
  }, [cartItems]);

  return (
    <nav className="navbar">
      <h1>Computer Cloud</h1>
      <ul>
        <li><NavLink to="/" className="navlink">Home</NavLink></li>
        <li><NavLink to="/shop" className="navlink">Shop</NavLink></li>
        <li>
          <div className="cartIconContainer">
            <button type="button" onClick={showCart}>
              {' '}
              <svg><CartIcon /></svg>
              {itemAmount > 0
                ? <div className="cartCounter">{itemAmount}</div>
                : null}
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
