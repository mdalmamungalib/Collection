import { useState, useEffect } from 'react';

import './shopStyles.css';
import { productDetails } from './data';
import OrderConfirmation from './OrderConfirmation';
import CheckoutModal from './CheckoutModal';
import ShoppingCart from './ShoppingCart';
import ShopCard from './ShopCard';

function ShopPage() {
  const [products, setProducts] = useState(productDetails);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  // Calculate total quantity in cart
  const totalQty = cart.reduce((total, item) => total + item.qty, 0);

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.qty), 0);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.name === product.name);
    
    if (existingItem) {
      if (existingItem.qty >= 10) {
        alert("You can only buy 10 items of each product");
        return;
      }
      setCart(cart.map(item => 
        item.name === product.name 
          ? { ...item, qty: item.qty + 1 } 
          : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (productName) => {
    setCart(cart.filter(item => item.name !== productName));
  };

  const updateQty = (productName, newQty) => {
    if (newQty < 1) {
      removeFromCart(productName);
      return;
    }
    
    if (newQty > 10) {
      alert("You can only buy 10 items of each product");
      return;
    }

    setCart(cart.map(item => 
      item.name === productName 
        ? { ...item, qty: newQty } 
        : item
    ));
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleCheckout = () => {
    setIsCheckoutOpen(true);
    setIsCartOpen(false);
  };

  const handleOrder = () => {
    // Update stock levels
    const updatedProducts = products.map(product => {
      const cartItem = cart.find(item => item.name === product.name);
      if (cartItem) {
        return { ...product, qty: product.qty - cartItem.qty };
      }
      return product;
    });

    setProducts(updatedProducts);
    setOrderDetails({
      orderId: Math.floor(Math.random() * 10000),
      total: totalPrice,
      items: [...cart]
    });
    setIsCheckoutOpen(false);
    setIsOrderConfirmed(true);
    setCart([]);
  };

  return (
    <div className="banner">
      {/* Background animation */}
      <ul className="box-area">
        {[...Array(6)].map((_, i) => <li key={i}></li>)}
      </ul>

      {/* Main content */}
      <div className="main-cart">
        {products.map(product => (
          <ShopCard 
            key={product.name}
            product={product}
            onAddToCart={addToCart}
            cartItems={cart}
          />
        ))}
      </div>

      {/* Cart button */}
      <div className="nav">
        <button onClick={() => setIsCartOpen(true)}>
          <i className="fas fa-shopping-cart" style={{ fontSize: '2rem' }}></i>
        </button>
        {totalQty > 0 && <span className="total-qty">{totalQty}</span>}
      </div>

      {/* Shopping cart sidebar */}
      {isCartOpen && (
        <ShoppingCart
          cart={cart}
          totalPrice={totalPrice}
          onClose={() => setIsCartOpen(false)}
          onRemove={removeFromCart}
          onUpdateQty={updateQty}
          onClear={clearCart}
          onCheckout={handleCheckout}
        />
      )}

      {/* Checkout modal */}
      {isCheckoutOpen && (
        <CheckoutModal
          cart={cart}
          totalPrice={totalPrice}
          onClose={() => setIsCheckoutOpen(false)}
          onConfirm={handleOrder}
        />
      )}

      {/* Order confirmation */}
      {isOrderConfirmed && (
        <OrderConfirmation
          orderDetails={orderDetails}
          onClose={() => setIsOrderConfirmed(false)}
        />
      )}

      {/* Overlays */}
      {(isCartOpen || isCheckoutOpen || isOrderConfirmed) && (
        <div className="cover" onClick={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(false);
          setIsOrderConfirmed(false);
        }}></div>
      )}
    </div>
  );
}

export default ShopPage;