import React from 'react';

const NewsCard = ({ title, description, image }) => {
  return (
    <div className="card news-card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-sm btn-outline-primary">Read More</a>
      </div>
    </div>
  );
};

export default NewsCard;
