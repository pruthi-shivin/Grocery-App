import { useState } from "react";
import products from "./data/products";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import OrderSummary from "./components/OrderSummary";
import FilterBar from "./components/FilterBar";
import "./styles/app.css";

function App() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  const categories = [
    "All",
    ...new Set(products.map((item) => item.category)),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (item) => item.category === selectedCategory
        );

  const addToCart = (product) => {
    const existingItem = cart.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handlePlaceOrder = () => {
    setCart([]);
    setOrderPlaced(true);

    setTimeout(() => {
      setOrderPlaced(false);
    }, 4000);
  };

  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      <header>
        <h1>Fresh Grocery Store</h1>

        <div className="header-right">
          <div className="cart-count">
            Cart Items:
            {cart.reduce(
              (acc, item) => acc + item.quantity,
              0
            )}
          </div>

          <button
            className="dark-mode-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>
        </div>
      </header>

      {orderPlaced && (
        <div className="success-message">
          Order placed successfully!
        </div>
      )}

      <FilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="main-layout">
        <ProductList
          products={filteredProducts}
          addToCart={addToCart}
        />

        <div className="right-section">
          <Cart
            cart={cart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeItem={removeItem}
          />

          <OrderSummary
            cart={cart}
            handlePlaceOrder={handlePlaceOrder}
          />
        </div>
      </div>
    </div>
  );
}

export default App;