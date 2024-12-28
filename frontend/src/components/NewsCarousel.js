import React from 'react';
import { Carousel } from 'react-bootstrap';

const NewsCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="https://via.placeholder.com/1200x400" alt="News 1" />
        <Carousel.Caption>
          <h3>Breaking News 1</h3>
          <p>Some quick example text to build on the news.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://via.placeholder.com/1200x400" alt="News 2" />
        <Carousel.Caption>
          <h3>Breaking News 2</h3>
          <p>Some quick example text to build on the news.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default NewsCarousel;
