import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Cart({ cartItems, changeItemCount, showCart }) {
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < cartItems.length; i += 1) {
      total += cartItems[i].cartItem.price * cartItems[i].counter;
    }
    setSubtotal(total.toFixed(2));
  }, [cartItems]);

  return (
    <motion.div
      className="cart"
      key="modal"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        x: '0',
      }}
      exit={{
        opacity: 0,
        x: '30vw',
      }}
    >
      <button type="button" onClick={showCart} className="closeCart">X</button>
      <h2 className="cartTitle">Shopping Cart</h2>
      {cartItems.length === 0
        ? <div className="emptyCart"><p>Your cart is empty</p></div>
        : (
          <ul>
            {cartItems.map((elem) => (
              <li key={elem.cartItem.shortName} className="cartItem">
                <div>{elem.cartItem.shortName}</div>
                <div>
                  $
                  {(parseFloat(elem.cartItem.price) * parseInt(elem.counter, 10)).toFixed(2)}
                </div>
                <div className="counterContainer">
                  <button type="button" onClick={() => changeItemCount(elem, 'add')}>+</button>
                  <div>{elem.counter}</div>
                  <button type="button" onClick={() => changeItemCount(elem, 'sub')}>-</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      <div className="subTotal">
        Subtotal:$
        {' '}
        {subtotal}
        {' '}
      </div>
    </motion.div>
  );
}

export default Cart;
