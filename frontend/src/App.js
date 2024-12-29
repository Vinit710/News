import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand" href="/">📰 NewsHub</a>
          <div className="navbar-links">
            <a href="/">Home</a>
            <a href="/">Categories</a>
            <a href="/">Trending</a>
            <a href="/">About</a>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <span className="search-icon">🔍</span>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="container">
          <h1>Welcome to NewsHub</h1>
          <p>Stay informed with the latest news and updates from around the world</p>
          <a href="/" className="cta-button">Start Reading</a>
        </div>
      </header>

      <section className="featured-article">
        <div className="container">
          <h2>Featured Article</h2>
          <div className="article-content">
            <img src="https://via.placeholder.com/600x400" alt="Featured Article" className="article-image" />
            <div className="article-text">
              <h3>Breaking: Major Scientific Discovery Shakes the World</h3>
              <p>Scientists have made a groundbreaking discovery that could revolutionize our understanding of the universe. This new finding challenges long-held beliefs and opens up exciting possibilities for future research.</p>
              <a href="/" className="read-more">Read More</a>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="feature">
            <h3>🔥 Trending News</h3>
            <p>Get the hottest and most trending news updates instantly.</p>
          </div>
          <div className="feature">
            <h3>🌍 Global Coverage</h3>
            <p>Stay informed about global events from verified sources.</p>
          </div>
          <div className="feature">
            <h3>⚡ Real-Time Updates</h3>
            <p>News delivered to you in real-time with no delays.</p>
          </div>
        </div>
      </section>

      <section className="categories">
        <div className="container">
          <h2>Explore Categories</h2>
          <div className="category-grid">
            {['Politics', 'Technology', 'Sports', 'Health', 'Entertainment', 'Science', 'Business', 'Environment'].map((category, index) => (
              <a key={index} href="/" className="category-item">{category}</a>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>📰 NewsHub</h3>
              <p>Your trusted source for the latest news and in-depth analysis from around the world.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Categories</a></li>
                <li><a href="/">Trending</a></li>
                <li><a href="/">About Us</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Us</h4>
              <p>Email: info@newshub.com</p>
              <p>Phone: +1 (123) 456-7890</p>
              <p>Address: 123 News Street, City, Country</p>
            </div>
            <div className="footer-section">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="/">Facebook</a>
                <a href="/">Twitter</a>
                <a href="/">Instagram</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} NewsHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

