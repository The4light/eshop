import "./Hero.css";
import { Link} from "react-router-dom";


export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
              If You need The Item 
      We Got It
      Why Waste Time Start 
      Shopping 
        </h1>
        <p className="hero-subtext">
         Whether you're new to the world of technology or looking to expand
 your collection, our platform offers comprehensive resources to help
 you succeed. Start your shopping adventure today!.
        </p>
        <button className="hero-btn"><Link to="/products">Shop Now</Link></button>
      </div>
    </section>
  );
}
