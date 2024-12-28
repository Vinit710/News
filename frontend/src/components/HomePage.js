import React from 'react';
import Header from './Header';
import Footer from './Footer';
import NewsCarousel from './NewsCarousel';
import FilterBar from './FilterBar';
import NewsCard from './NewsCard';

const HomePage = () => {
  const sampleNews = [
    { title: 'Tech Innovation', description: 'Latest tech news...', image: 'https://via.placeholder.com/400x200' },
    { title: 'World Economy', description: 'Economic updates...', image: 'https://via.placeholder.com/400x200' }
  ];

  return (
    <div>
      <Header />
      <NewsCarousel />
      <div className="container my-4">
        <FilterBar />
        <div className="row">
          {sampleNews.map((news, index) => (
            <div className="col-md-4" key={index}>
              <NewsCard {...news} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
