function ShoppingCart({ cart, totalPrice, onClose, onRemove, onUpdateQty, onClear, onCheckout }) {
    return (
      <div className="side-nav">
        <button onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <h2>Cart</h2>
        <div className="cart-items">
          {cart.length === 0 ? (
            <span className="empty-cart">Looks Like You Haven't Added Any Product In The Cart</span>
          ) : (
            cart.map(item => (
              <div className="cart-item" key={item.name}>
                <div className="cart-img">
                  <img src={item.imageUrl} alt={item.name} />
                </div>
                <strong className="name">{item.name}</strong>
                <div className="qty-change">
                  <button className="btn-qty" onClick={() => onUpdateQty(item.name, item.qty - 1)}>
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <p className="qty">{item.qty}</p>
                  <button className="btn-qty" onClick={() => onUpdateQty(item.name, item.qty + 1)}>
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
                <p className="price">₹ {item.price * item.qty}</p>
                <button onClick={() => onRemove(item.name)}>
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            ))
          )}
        </div>
        <div className="final">
          <strong>Total: ₹ <span className="total">{totalPrice}</span>.00/-</strong>
          <div className="action">
            <button onClick={onCheckout} className="btn buy" disabled={cart.length === 0}>
              Purchase <i className="fas fa-credit-card" style={{ color: '#6665dd' }}></i>
            </button>
            <button onClick={onClear} className="btn clear" disabled={cart.length === 0}>
              Clear Cart <i className="fas fa-trash" style={{ color: '#bb342f' }}></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ShoppingCart;