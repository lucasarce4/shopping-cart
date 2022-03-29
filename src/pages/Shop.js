import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import products from '../components/productList';

function Shop() {
  const [productDisplay, setProductDisplay] = useState(products);
  const isMovile = useMediaQuery({
    query: '(max-width: 786px)',
  });

  const handleDisplay = (e) => {
    const category = e.target.dataset.category || e.target.value;
    if (category === 'all') {
      setProductDisplay(products);
      return;
    }
    const newList = products.filter((elem) => (elem.type === category));
    setProductDisplay(newList);
  };

  return (
    <section aria-labelledby="shop" className="shop">
      {isMovile ? (
        <div className="categorySelect">
          <select onChange={handleDisplay} name="category" id="parts">
            <option value="all">All our products</option>
            <option value="gpu" data-category="gpu">Graphic cards</option>
            <option value="processor">Processor</option>
            <option value="ram">Memory</option>
            <option value="motherboard">Motherboard</option>
            <option value="case">Computer cases</option>
          </select>
        </div>
      )
        : (
          <div className="categoryList">
            <ul>
              <li><button type="button" data-category="all" onClick={handleDisplay}>All our products</button></li>
              <li><button type="button" data-category="gpu" onClick={handleDisplay}>Graphic cards</button></li>
              <li><button type="button" data-category="processor" onClick={handleDisplay}>Processor</button></li>
              <li><button type="button" data-category="ram" onClick={handleDisplay}>Memory</button></li>
              <li><button type="button" data-category="motherboard" onClick={handleDisplay}>Motherboard</button></li>
              <li><button type="button" data-category="case" onClick={handleDisplay}>Computer cases</button></li>
            </ul>
          </div>
        )}
      <div className="productContainer">
        {productDisplay.map((product) => (
          <div className="productCard" key={product.shortName}>
            <img src={product.img} alt={product.type} />
            <h3>{product.shortName}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Shop;
