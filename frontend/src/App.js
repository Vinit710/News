import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

function App() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/news')
            .then(response => setNews(response.data))
            .catch(error => console.error('Error fetching news:', error));
    }, []);

    return (
        <div>
            <h1>News Application</h1>
            <div className="news-container">
                {news.map((article, index) => (
                    <div key={index} className="news-article">
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
