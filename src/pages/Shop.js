import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import products from '../components/productList';

function Shop() {
  const [productDisplay, setProductDisplay] = useState(products);
  const [isLoaded, setIsLoaded] = useState(false);
  const isMovile = useMediaQuery({
    query: '(max-width: 786px)',
  });

  const handleDisplay = (e) => {
    const { category } = e.target.dataset;
    if (category === 'all') {
      setProductDisplay(products);
      return;
    }
    const newList = products.filter((elem) => (elem.type === category));
    setProductDisplay(newList);
  };

  const load = () => {
    setIsLoaded(true);
  };
  return (
    <section aria-labelledby="shop" className="shop">
      {isMovile ? (
        <div className="categorySelect">
          <button type="button" data-category="all" onClick={handleDisplay}>All our products</button>
          <button type="button" data-category="gpu" onClick={handleDisplay}>Graphic cards</button>
          <button type="button" data-category="processor" onClick={handleDisplay}>Processors</button>
          <button type="button" data-category="ram" onClick={handleDisplay}>Memory</button>
          <button type="button" data-category="motherboard" onClick={handleDisplay}>Motherboards</button>
          <button type="button" data-category="case" onClick={handleDisplay}>Computer cases</button>
        </div>
      )
        : (
          <div className="categoryList">
            <ul>
              <li><button type="button" data-category="all" onClick={handleDisplay}>All our products</button></li>
              <li><button type="button" data-category="gpu" onClick={handleDisplay}>Graphic cards</button></li>
              <li><button type="button" data-category="processor" onClick={handleDisplay}>Processors</button></li>
              <li><button type="button" data-category="ram" onClick={handleDisplay}>Memory</button></li>
              <li><button type="button" data-category="motherboard" onClick={handleDisplay}>Motherboards</button></li>
              <li><button type="button" data-category="case" onClick={handleDisplay}>Computer cases</button></li>
            </ul>
          </div>
        )}
      <div className="productContainer">
        {productDisplay.map((product) => (
          <Link to={`/shop/${product.shortName}`} key={product.shortName} className="productCard">
            <div>
              <img
                onLoad={load}
                src={product.img}
                alt={product.type}
                style={isLoaded ? { display: 'block' } : { display: 'none' }}
              />

              {isLoaded
                ? null
                : <div className="loading"><div className="spinner" /></div>}
              <div className="imgText">
                <h3>{product.shortName}</h3>
                <p>
                  $
                  {product.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
export default Shop;
