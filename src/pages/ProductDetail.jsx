import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext"; // 👈 import
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart(); // 👈 get addToCart

  const reviews = [
    { id: 1, name: "John Doe", rating: 5, comment: "Excellent product, exceeded my expectations!" },
    { id: 2, name: "Jane Smith", rating: 4, comment: "Good quality, but delivery was a little slow." },
    { id: 3, name: "Alex Johnson", rating: 3, comment: "Decent product for the price. Could be improved." },
  ];

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    }
    fetchProduct();
  }, [id]);

  if (!product) return <p className="loading">Loading...</p>;

  return (
    <div className="product-detail">
      {/* Top Section */}
      <div className="product-detail-top">
        <div className="product-detail-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-detail-info">
          <h1 className="detail-title">{product.title}</h1>
          <p className="detail-price">${product.price}</p>
          <p className="detail-desc">{product.description}</p>

          <div className="quantity-control">
            <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((q) => q + 1)}>+</button>
          </div>

          {/* ✅ Add to cart works now */}
          <button
            className="add-to-cart"
            onClick={() => addToCart(product, quantity)}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="product-reviews">
        <h2>Customer Reviews</h2>
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <strong>{review.name}</strong>
                <span className="review-rating">{"⭐".repeat(review.rating)}</span>
              </div>
              <p className="review-comment">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
