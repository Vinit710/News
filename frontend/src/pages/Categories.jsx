import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Categories.css';

function Categories() {
  const [activeCategory, setActiveCategory] = useState('technology'); // Default category
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    { name: 'Technology', value: 'technology' },
    { name: 'Sports', value: 'sports' },
    { name: 'Business', value: 'business' },
    { name: 'Health', value: 'health' },
    { name: 'Entertainment', value: 'entertainment' },
  ];

  // Fetch news articles based on the active category
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            category: activeCategory,
            country: 'us',
            apiKey: 'e58f037beb964b9485672082d46591ac', // Replace with your NewsAPI key
          },
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [activeCategory]);

  return (
    <div className="categories-container">
      {/* Banner Section */}
      <div className="categories-banner">
        <h1>📰 News Categories</h1>
        <p>Stay informed with the latest updates across different topics</p>
      </div>

      {/* Category Tabs */}
      <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category.value}
            className={`category-tab ${activeCategory === category.value ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.value)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Category Content */}
      <div className="category-content">
        {loading ? (
          <div className="loading-spinner">Loading...</div>
        ) : (
          <div className="articles-grid">
            {articles.map((article, index) => (
              <div key={index} className="article-card">
                <img
                  src={article.urlToImage || '/placeholder.svg?height=200&width=300'}
                  alt={article.title}
                />
                <div className="article-content">
                  <h3>{article.title}</h3>
                  <p>{article.description || 'No description available.'}</p>
                  <span className="article-date">
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </span>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Categories;