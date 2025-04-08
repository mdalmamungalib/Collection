import { useState } from 'react';

function OrderConfirmation({ orderDetails, onClose }) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleOkay = () => {
    if (isConfirmed) {
      onClose();
    } else {
      setIsConfirmed(true);
    }
  };

  return (
    <div className="invoice" style={isConfirmed ? { height: '180px' } : {}}>
      <div className="order-details">
        {isConfirmed ? (
          <em className="thanks">Thanks for shopping with us</em>
        ) : (
          <>
            <em>your order has been placed</em>
            <p>Your order-id is : <span>{orderDetails.orderId}</span></p>
            <p>your order will be delivered to you in 3-5 working days</p>
            <p>
              you can pay <span>₹ {orderDetails.total}</span> by card or any online 
              transaction method after the products have been delivered to you
            </p>
          </>
        )}
      </div>
      <button onClick={handleOkay} className="btn-ok">
        {isConfirmed ? 'continue' : 'okay'}
      </button>
    </div>
  );
}

export default OrderConfirmation;