import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/shopping-cart/shop');
  };

  return (
    <main className="home">
      <div className="container">
        <button type="button" onClick={handleClick} className="buttonToShop">Shop now</button>
      </div>
    </main>
  );
}

export default Home;
