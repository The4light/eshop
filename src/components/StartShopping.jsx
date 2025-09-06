import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./StartShopping.css";

export default function StartShopping() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=3")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => setProducts([]));
  }, []);

  return (
    <section className="start-shopping">
      <h2 className="section-title">Start Shopping</h2>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
