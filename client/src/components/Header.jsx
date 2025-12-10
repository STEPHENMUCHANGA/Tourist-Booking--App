import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // You will create this file next

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        
        {/* LOGO */}
        <div className="logo">
          🐘 <span>SM Safari Travellers</span>
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/admin">Admin</Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <div 
          className="hamburger" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/attractions" onClick={() => setIsOpen(false)}>Tourist Attractions</Link>
          <Link to="/blogs" onClick={() => setIsOpen(false)}>Blogs</Link>
          <Link to="/admin" onClick={() => setIsOpen(false)}>Admin</Link>

          <hr />

          {/* CONTACT LINKS */}
          <a href="mailto:stephenmuchanga@gmail.com">Email Us</a>
          <a href="https://wa.me/254712935963" target="_blank" rel="noreferrer">
            WhatsApp Us
          </a>
          <a href="tel:+254712935963">Call Us</a>
        </div>
      )}
    </header>
  );
}

export default Header;
