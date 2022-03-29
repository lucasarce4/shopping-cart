import React from 'react';
import { useNavigate } from 'react-router-dom';
import homeImg from '../assets/homeImg.png';

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/shop');
  };

  return (
    <main className="home">
      <div className="container">
        <button type="button" onClick={handleClick} className="buttonToShop">Shop now</button>
        <img src={homeImg} alt="pc" />
      </div>
    </main>
  );
}

export default Home;
