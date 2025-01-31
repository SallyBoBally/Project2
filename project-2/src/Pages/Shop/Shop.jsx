import React from 'react';
import { Link } from 'react-router-dom';

function Shop({ addToCart }) {
  return (
    <div>
      <h1>Shop</h1>
      <div>Selling supplies for users collections</div>
      <div className="col-2 mb-2">
        <div className="card">
          <img
            src="https://images.freeimages.com/image/thumbs/619/sunny-rainbow-png-delight-5690557.png" className="card-img-top" alt="Card Image"/>
          <div className="card-body">
            <h5 className="card-title">Item One</h5>
            <p className="card-text">
              Shop includes supplies and storage for collections.
            </p>
            <button className="button"
              onClick={() => addToCart("Item One")}
            ><Link to="/cart"> Add to Cart</Link>
            </button>
          </div>
        </div>
         
      </div>
    </div>
  );
}

export default Shop;