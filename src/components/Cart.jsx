function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) {
  return (
    <div className="cart-container">
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <div>
              <h4>{item.name}</h4>
              <p>
                ₹{item.price} × {item.quantity}
              </p>
            </div>

            <div className="cart-buttons">
              <button
                onClick={() =>
                  decreaseQuantity(item.id)
                }
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() =>
                  increaseQuantity(item.id)
                }
              >
                +
              </button>

              <button
                className="remove-btn"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;