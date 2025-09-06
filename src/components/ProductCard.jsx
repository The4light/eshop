import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const styles = {
    card: {
      background: "linear-gradient(145deg, #ffffff 0%, #f0fdfa 20%, #ffffff 100%)",
      borderRadius: "24px",
      padding: "24px",
      display: "flex",
      flexDirection: "column",
      gap: "18px",
      minHeight: "460px",
      boxShadow: "0 20px 60px rgba(6, 78, 59, 0.08), 0 8px 25px rgba(45, 212, 191, 0.12)",
      border: "2px solid transparent",
      backgroundImage: "linear-gradient(145deg, #ffffff, #f0fdfa), linear-gradient(135deg, #2dd4bf, #0d9488)",
      backgroundOrigin: "border-box",
      backgroundClip: "padding-box, border-box",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      cursor: "pointer",
      position: "relative",
      overflow: "hidden",
    },
    cardGlow: {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "linear-gradient(135deg, rgba(45, 212, 191, 0.1), rgba(13, 148, 136, 0.05))",
      borderRadius: "24px",
      opacity: 0,
      transition: "opacity 0.4s ease",
      pointerEvents: "none",
      zIndex: 1,
    },
    imageWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "16px",
      flex: "0 0 auto",
      borderRadius: "20px",
      background: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 50%, #a7f3d0 100%)",
      boxShadow: "0 12px 32px rgba(45, 212, 191, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
      position: "relative",
      zIndex: 2,
    },
    image: {
      maxWidth: "200px",
      maxHeight: "160px",
      objectFit: "contain",
      display: "block",
      filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1))",
      transition: "transform 0.3s ease",
    },
    body: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      flex: "1 1 auto",
      position: "relative",
      zIndex: 2,
    },
    titlePriceWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      alignItems: "flex-start",
    },
    title: {
      fontSize: "20px",
      fontWeight: "800",
      background: "linear-gradient(135deg, #064e3b 0%, #1e3a8a 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      margin: 0,
      lineHeight: 1.3,
      letterSpacing: "-0.02em",
    },
    price: {
      fontSize: "24px",
      fontWeight: "900",
      background: "linear-gradient(135deg, #10b981 0%, #14b8a6 50%, #06b6d4 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      whiteSpace: "nowrap",
      textShadow: "0 2px 4px rgba(16, 185, 129, 0.2)",
      position: "relative",
    },
    description: {
      fontSize: "15px",
      color: "#475569",
      margin: 0,
      lineHeight: 1.6,
      minHeight: "60px",
      opacity: 0.9,
    },
    ctaWrapper: {
      marginTop: "auto",
      display: "flex",
      justifyContent: "flex-start",
    },
    button: {
      background: "black",
      color: "#ffffff",
      border: "none",
      padding: "16px 32px",
      borderRadius: "16px",
      fontSize: "16px",
      fontWeight: "700",
      cursor: "pointer",
      boxShadow: "0 12px 32px rgba(30, 64, 175, 0.25), 0 4px 12px rgba(45, 212, 191, 0.3)",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      position: "relative",
      overflow: "hidden",
      textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
      letterSpacing: "0.02em",
    },
  };

  return (
    <article
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-12px) scale(1.03)";
        e.currentTarget.style.boxShadow = "0 32px 80px rgba(6, 78, 59, 0.15), 0 12px 40px rgba(45, 212, 191, 0.2)";
        e.currentTarget.style.filter = "brightness(1.02)";
        
        const image = e.currentTarget.querySelector('img');
        if (image) image.style.transform = "scale(1.05) rotate(2deg)";
        
        const cardGlow = e.currentTarget.querySelector('.card-glow');
        if (cardGlow) cardGlow.style.opacity = "1";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "0 20px 60px rgba(6, 78, 59, 0.08), 0 8px 25px rgba(45, 212, 191, 0.12)";
        e.currentTarget.style.filter = "none";
        
        const image = e.currentTarget.querySelector('img');
        if (image) image.style.transform = "none";
        
        const cardGlow = e.currentTarget.querySelector('.card-glow');
        if (cardGlow) cardGlow.style.opacity = "0";
      }}
    >
      <div className="card-glow" style={styles.cardGlow}></div>
      
      {/* Image */}
      <div style={styles.imageWrapper}>
        <img src={product.image} alt={product.title} loading="lazy" style={styles.image} />
      </div>

      {/* Body */}
      <div style={styles.body}>
        {/* Title + Price */}
        <div style={styles.titlePriceWrapper}>
          <h3 style={styles.title}>{product.title}</h3>
          <div style={styles.price}>${Number(product.price).toFixed(2)}</div>
        </div>

        {/* Description */}
        <p style={styles.description}>
          {product.description?.length > 140
            ? product.description.slice(0, 140) + "..."
            : product.description}
        </p>

        {/* CTA */}
        <div style={styles.ctaWrapper}>
          <Link to={`/product/${product.id}`}>
            <button
              style={styles.button}
              aria-label={`Buy ${product.title}`}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-4px) scale(1.05)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(30, 64, 175, 0.4), 0 8px 20px rgba(45, 212, 191, 0.4)";
                e.currentTarget.style.background = "linear-gradient(135deg, #1e40af 0%, #2dd4bf 50%, #14b8a6 100%)";
                
                const buttonGlow = e.currentTarget.querySelector('.button-glow');
                if (buttonGlow) buttonGlow.style.left = "100%";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(30, 64, 175, 0.25), 0 4px 12px rgba(45, 212, 191, 0.3)";
                e.currentTarget.style.background = "linear-gradient(135deg, #1e40af 0%, #3b82f6 30%, #2dd4bf 70%, #14b8a6 100%)";
                
                const buttonGlow = e.currentTarget.querySelector('.button-glow');
                if (buttonGlow) buttonGlow.style.left = "-100%";
              }}
            >
              <div className="button-glow" style={styles.buttonGlow}></div>
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
}