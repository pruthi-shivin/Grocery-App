function ProductCard({ product, addToCart }) {
  return (
    <div
      className={`product-card ${
        !product.inStock ? "out-of-stock" : ""
      }`}
    >
      <h3>{product.name}</h3>

      <p>Category: {product.category}</p>

      <p>Price: ₹{product.price}</p>

      <p>Unit: {product.unit}</p>

      <p>
        Status:
        {product.inStock ? " In Stock" : " Out of Stock"}
      </p>

      <button
        onClick={() => addToCart(product)}
        disabled={!product.inStock}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;