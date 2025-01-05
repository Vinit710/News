import React, { useState } from 'react';
import './Categories.css';

function Categories() {
  const [activeCategory, setActiveCategory] = useState('Technology');

  const categories = [
    {
      name: 'Technology',
      description: 'Latest tech news and innovations',
      image: '/placeholder.svg?height=200&width=300',
      articles: [
        {
          title: 'Apple unveils new iPhone features',
          description: 'The latest iOS update brings exciting features...',
          date: 'Jan 5, 2024'
        },
        {
          title: 'AI breakthrough in healthcare',
          description: 'New AI model helps detect diseases earlier...',
          date: 'Jan 4, 2024'
        },
        {
          title: 'SpaceX launches new satellite',
          description: 'Successfully deployed communication satellites...',
          date: 'Jan 3, 2024'
        }
      ]
    },
    {
      name: 'Sports',
      description: 'Sports updates and highlights',
      image: '/placeholder.svg?height=200&width=300',
      articles: [
        {
          title: 'World Cup Final Results',
          description: 'Exciting match ends in dramatic fashion...',
          date: 'Jan 5, 2024'
        },
        {
          title: 'NBA Trade Updates',
          description: 'Major trades shake up the league...',
          date: 'Jan 4, 2024'
        },
        {
          title: 'Tennis Championship',
          description: 'Rising star wins first major title...',
          date: 'Jan 3, 2024'
        }
      ]
    },
    {
      name: 'Business',
      description: 'Business and finance updates',
      image: '/placeholder.svg?height=200&width=300',
      articles: [
        {
          title: 'Stock Market Rally',
          description: 'Markets reach new all-time highs...',
          date: 'Jan 5, 2024'
        },
        {
          title: 'Startup Success Story',
          description: 'Local startup receives major funding...',
          date: 'Jan 4, 2024'
        },
        {
          title: 'Economic Forecast',
          description: 'Experts predict strong growth...',
          date: 'Jan 3, 2024'
        }
      ]
    }
  ];

  const activeData = categories.find(cat => cat.name === activeCategory);

  return (
    <div className="categories-container">
      <div className="categories-banner">
        <h1>📰 News Categories</h1>
        <p>Stay informed with the latest updates across different topics</p>
      </div>

      <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`category-tab ${activeCategory === category.name ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="category-content">
        <div className="category-header">
          <img src={activeData.image} alt={activeData.name} />
          <div className="category-info">
            <h2>{activeData.name}</h2>
            <p>{activeData.description}</p>
          </div>
        </div>

        <div className="articles-grid">
          {activeData.articles.map((article, index) => (
            <div key={index} className="article-card">
              <img src="/placeholder.svg?height=200&width=300" alt={article.title} />
              <div className="article-content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <span className="article-date">{article.date}</span>
                <button className="read-more">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;

