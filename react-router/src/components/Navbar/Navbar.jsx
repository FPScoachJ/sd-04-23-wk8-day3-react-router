import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className = "home-logo-container">
        <Link to="/">
          <p className="home-logo">Navbar Consultants</p>
        </Link>
      </div>
      <div className="middle-navbar-content">
        <Link className ="links" to="/about">About</Link>
        <Link className = "links" to="/account">Account</Link>
      </div>
      <div className="contact-container">
        <Link to="/contact">
            <button>Contact</button>
            </Link>
      </div>
    </nav>
  );
}
