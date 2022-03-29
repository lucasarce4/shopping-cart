import React from 'react';
import homeImg from '../assets/homeImg.png';

function Home() {
  return (
    <main className="home">
      <div className="container">
        <img src={homeImg} alt="" />
      </div>
    </main>
  );
}

export default Home;
