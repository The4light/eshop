import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <article
      style={{
        background: "#fff",
        borderRadius: "14px",
        padding: "18px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        minHeight: "420px",
        boxShadow: "0 6px 18px rgba(0, 0, 0, 0.06)",
        transition: "transform 0.18s ease, box-shadow 0.18s ease",
      }}
    >
      {/* Image */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "6px 0",
          flex: "0 0 auto",
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          style={{
            maxWidth: "220px",
            maxHeight: "160px",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>

      {/* Body */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: "1 1 auto" }}>
        {/* Title + Price */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "700",
              color: "#0f172a", // deep navy
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {product.title}
          </h3>
          <div
            style={{
              fontSize: "18px",
              fontWeight: "800",
              color: "#059669", // emerald green
              whiteSpace: "nowrap",
            }}
          >
            ${Number(product.price).toFixed(2)}
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: "14px",
            color: "#475569", // cool gray
            margin: 0,
            lineHeight: 1.45,
            minHeight: "48px",
          }}
        >
          {product.description?.length > 120
            ? product.description.slice(0, 120) + "..."
            : product.description}
        </p>

        {/* CTA */}
        <div style={{ marginTop: "auto", display: "flex", justifyContent: "flex-start" }}>
          <Link to={`/product/${product.id}`}>
            <button
              aria-label={`Buy ${product.title}`}
              style={{
                background: "linear-gradient(90deg, #0284c7 0%, #059669 100%)",
                color: "#fff",
                border: "none",
                padding: "10px 18px",
                borderRadius: "10px",
                fontWeight: "700",
                cursor: "pointer",
                boxShadow: "0 6px 16px rgba(2, 132, 199, 0.25)",
                transition: "transform 0.12s ease, box-shadow 0.12s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 10px 24px rgba(5,150,105,0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 6px 16px rgba(2,132,199,0.25)";
              }}
            >
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
}
