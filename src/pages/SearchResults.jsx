import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "./SearchResults.css";

export default function SearchResults() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Extract query from URL
  const params = new URLSearchParams(location.search);
  const query = params.get("query") || "";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        // Filter products
        const filtered = data.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        );

        setProducts(filtered);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [query]);

  if (loading) return <p>Loading...</p>;

  return (
    <section className="search-results-page">
      <h2>Search Results for "{query}"</h2>

      {products.length > 0 ? (
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </section>
  );
}
