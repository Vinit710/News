import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">📰 NewsHub</Link>
        </div>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/trending">Trending</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="navbar-search">
          <input type="text" placeholder="Search..." />
          <span className="search-icon">🔍</span>
        </div>

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/categories" onClick={() => setIsMenuOpen(false)}>Categories</Link>
          <Link to="/trending" onClick={() => setIsMenuOpen(false)}>Trending</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <div className="mobile-search">
            <input type="text" placeholder="Search..." />
            <span className="search-icon">🔍</span>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

