import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';


class DemoCarousel extends Component {
  render() {
    return (
      <div>
	    <Carousel id="itemcarousel">
	    <Carousel.Item>
	    <img width={900} height={500} alt="900x500" src="img/carrusel/c7.jpg" />
	      
	    </Carousel.Item>
	    <Carousel.Item>
	      <img width={900} height={500} alt="900x500" src="img/carrusel/c4.jpg" />
	      
	    </Carousel.Item>
	    <Carousel.Item>
	      <img width={900} height={500} alt="900x500" src="img/carrusel/c9.jpg" />
	      
	    </Carousel.Item>
	  </Carousel>
    
      </div>
    );
  }
}

export default DemoCarousel;

