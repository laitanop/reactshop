import React, { Component } from 'react';
import DemoCarousel from '../components/carrusel';
import PhotoShape from './photoshape';
import Information from './information';


class Inicio extends Component {
  render() {
    return (
      <div>
      
      
      <DemoCarousel />   

      <PhotoShape />
      <Information />
    
      </div>
    );
  }
}

export default Inicio;
