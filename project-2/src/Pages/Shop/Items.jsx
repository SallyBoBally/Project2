import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Items({ items, addToCart }) {
  const { id } = useParams();
  // Find the item by matching id (converted to string for a safe comparison)
  const item = items.find(item => String(item.id) === id);

  if (!item) {
    return <div>Item not found.</div>;
  }

  return (
    <div className="container">
      <h1>{item.name}</h1>
      <img src={item.image} alt={item.name} className="card-img-top" style={{ maxWidth: '300px' }} />
      <p>{item.fullDescription}</p>
      <p className="card-text"><strong>{item.price}</strong></p>
      <button className="button" onClick={() => addToCart(item.name)}>
        <Link to="/cart">Add to Cart</Link>
      </button>
      <br />
      <Link to="/shop">Back to Shop</Link>
    </div>
  );
}

export default Items;
