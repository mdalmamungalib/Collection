function CheckoutModal({ cart, totalPrice, onClose, onConfirm }) {
    return (
      <div className="invoice">
        <div className="shipping-items">
          <div className="item-names">
            {cart.map(item => (
              <span key={item.name}>{item.qty} x {item.name}</span>
            ))}
          </div>
          <div className="items-price">
            {cart.map(item => (
              <span key={item.name}>₹ {item.price * item.qty}</span>
            ))}
          </div>
        </div>
        <hr />
        <div className="payment">
          <em>payment</em>
          <div>
            <p>total amount to be paid:</p>
            <span className="pay">₹ {totalPrice}</span>
          </div>
        </div>
        <div className="order">
          <button onClick={onConfirm} className="btn-order btn">
            Order Now
          </button>
          <button onClick={onClose} className="btn-cancel btn">
            Cancel
          </button>
        </div>
      </div>
    );
  }
  
  export default CheckoutModal;