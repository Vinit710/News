import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'us',
            apiKey: 'e58f037beb964b9485672082d46591ac' // Replace with your NewsAPI key
          }
        });
        setNews(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="home">
      <header className="hero">
        <div className="container">
          <h1>Stay Informed with NewsHub</h1>
          <p>Your trusted source for real-time news and updates</p>
        </div>
      </header>

      <section className="trending-news">
        <div className="container">
          <h2>Today's Headlines</h2>
          {loading ? (
            <div className="loading-spinner">Loading...</div>
          ) : (
            <div className="news-grid">
              {news.slice(0, 6).map((article, index) => (
                <div key={index} className="news-card">
                  <img src={article.urlToImage || 'placeholder-image.jpg'} alt={article.title} />
                  <div className="news-content">
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;