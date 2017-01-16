import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';


class DemoCarousel extends Component {
  render() {
    return (
      <div>

      <Carousel>
    <Carousel.Item>
      <img className="center-block" alt="900x500" src="img/carrusel/c7.png" />
      
    </Carousel.Item>
    <Carousel.Item>
      <img className="center-block" alt="900x500" src="img/carrusel/c4.jpg" />
      
    </Carousel.Item>
    <Carousel.Item>
      <img className="center-block" alt="900x500" src="img/carrusel/c9.jpg" />
      
    </Carousel.Item>
  </Carousel>
 
    </div>
    );
  }
}

export default DemoCarousel;



