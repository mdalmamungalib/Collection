import { useState } from 'react';

function ShopCard({ product, onAddToCart, cartItems }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const cartItem = cartItems.find(item => item.name === product.name);
  const isOutOfStock = product.qty <= 0;
  const isLowStock = product.qty > 0 && product.qty <= 5;

  return (
    <div className={`card ${isOutOfStock ? 'out-of-stock' : ''}`}>
      <div className="top-bar">
        <i className="fab fa-apple"></i>
        {isOutOfStock ? null : (
          <em className="stocks" style={{ color: isLowStock ? 'orange' : 'lightgreen' }}>
            {isLowStock ? 'Only Few Left' : 'In Stock'}
          </em>
        )}
      </div>
      <div className="img-container">
        <img className="product-img" src={product.imageUrl} alt={product.name} />
        {isOutOfStock && (
          <div className="out-of-stock-cover">
            <span>Out Of Stock</span>
          </div>
        )}
      </div>
      <div className="details">
        <div className="name-fav">
          <strong className="product-name">{product.name}</strong>
          <button 
            className={`heart ${isFavorite ? 'fav' : ''}`}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <i className="fas fa-heart"></i>
          </button>
        </div>
        <div className="wrapper">
          <h5>{product.heading}</h5>
          <p>{product.des}</p>
        </div>
        <div className="purchase">
          <p className="product-price">₹ {product.price}</p>
          {cartItem ? (
            <div className="qty-change">
              <button className="btn-qty" onClick={() => onAddToCart({ ...product, qty: cartItem.qty - 1 })}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <p className="qty">{cartItem.qty}</p>
              <button className="btn-qty" onClick={() => onAddToCart({ ...product, qty: cartItem.qty + 1 })}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          ) : (
            <button 
              className="add-btn" 
              onClick={() => onAddToCart(product)}
              disabled={isOutOfStock}
            >
              Add <i className="fas fa-chevron-right"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShopCard;