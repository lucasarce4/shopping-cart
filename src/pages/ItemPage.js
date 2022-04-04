import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../components/productList';

function ItemPage({ updateItems }) {
  const name = useParams();
  const item = products.filter((product) => product.shortName === name.id);
  return (
    <div className="itemPageContainer">
      <img src={item[0].img} alt={item[0].type} />
      <div className="itemDescription">
        <p>{item[0].name}</p>
        <p>
          $
          {item[0].price}
        </p>
        <button type="button" onClick={() => { updateItems(item[0]); }}>Add to cart</button>
      </div>
    </div>
  );
}

export default ItemPage;
