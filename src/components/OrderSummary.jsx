function OrderSummary({
  cart,
  handlePlaceOrder,
}) {
  const subtotal = cart.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  const deliveryCharge =
    cart.length > 0 ? 40 : 0;

  const total = subtotal + deliveryCharge;

  return (
    <div className="summary-container">
      <h2>Order Summary</h2>

      {cart.map((item) => (
        <div
          className="summary-item"
          key={item.id}
        >
          <span>
            {item.name} × {item.quantity}
          </span>

          <span>
            ₹{item.price * item.quantity}
          </span>
        </div>
      ))}

      <hr />

      <div className="summary-item">
        <span>Subtotal</span>
        <span>₹{subtotal}</span>
      </div>

      <div className="summary-item">
        <span>Delivery</span>
        <span>₹{deliveryCharge}</span>
      </div>

      <div className="summary-item total">
        <span>Total</span>
        <span>₹{total}</span>
      </div>

      <button
        className="order-btn"
        disabled={cart.length === 0}
        onClick={handlePlaceOrder}
      >
        Place Order
      </button>
    </div>
  );
}

export default OrderSummary;