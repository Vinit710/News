import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css'; // Import the CSS file for styling

function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false); // State to manage chat visibility

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
      {/* Hero Section */}
      <header className="hero">
        <div className="container">
          <h1>Stay Informed with NewsHub</h1>
          <p>Your trusted source for real-time news and updates</p>
        </div>
      </header>

      {/* Trending News Section */}
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

      {/* Chatbot Overlay */}
      <div className={`chatbot-overlay ${isChatOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <h3>NewsBot</h3>
          <button onClick={() => setIsChatOpen(!isChatOpen)}>
            {isChatOpen ? '×' : 'Chat'}
          </button>
        </div>
        {isChatOpen && (
          <div className="chatbot-window">
            <Chatbot />
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2023 NewsHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;

// Chatbot Component
function Chatbot() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) {
      setResponse("Error: Prompt is required");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post('/api/ai', { prompt: input });
      setResponse(res.data.response);
    } catch (error) {
      console.error("Error:", error);
      setResponse(error.response?.data?.error || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbot-messages">
        {response && <div className="message response">{response}</div>}
      </div>
      <div className="chatbot-input">
        <textarea
          placeholder="Ask about the news..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend} disabled={loading}>
          {loading ? "Loading..." : "Send"}
        </button>
      </div>
    </div>
  );
}