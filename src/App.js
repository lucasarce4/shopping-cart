/* eslint-disable max-len */
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './components/Cart';
import ItemPage from './pages/ItemPage';

function App() {
  const [openCart, setOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const showCart = () => {
    setOpenCart(!openCart);
  };

  const updateItems = (cartItem) => {
    const isItemRepeated = cartItems.some((item) => item.cartItem.shortName === cartItem.shortName);
    if (isItemRepeated) {
      const repeatedIndex = cartItems.findIndex((item) => item.cartItem.shortName === cartItem.shortName);
      const updatedCartItems = cartItems;
      updatedCartItems[repeatedIndex].counter += 1;
      setCartItems([...updatedCartItems]);
      return;
    }
    setCartItems([...cartItems, { cartItem, counter: 1 }]);
    setOpenCart(true);
  };

  const changeItemCount = (items, operation) => {
    const itemIndex = cartItems.findIndex((item) => item.cartItem.shortName === items.cartItem.shortName);
    const updatedCartItems = cartItems;
    if (operation === 'add') {
      updatedCartItems[itemIndex].counter += 1;
      setCartItems([...updatedCartItems]);
    }
    if (operation === 'sub') {
      updatedCartItems[itemIndex].counter -= 1;
      setCartItems([...updatedCartItems]);
    }
    if (updatedCartItems[itemIndex].counter === 0) {
      setCartItems([
        ...updatedCartItems.slice(0, itemIndex),
        ...updatedCartItems.slice(itemIndex + 1),
      ]);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar showCart={showCart} cartItems={cartItems} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ItemPage updateItems={updateItems} />} />
        </Routes>
        {openCart ? <Cart cartItems={cartItems} showCart={showCart} changeItemCount={changeItemCount} /> : null}
      </BrowserRouter>
    </div>
  );
}

export default App;
