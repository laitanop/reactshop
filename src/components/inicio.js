import React, { Component } from 'react';
import DemoCarousel from '../components/carrusel';
import PhotoShape from './photoshape';
import Information from './information';
import FooterInformation from './footerinformation';
import NavFooter from './navfooter';


class Inicio extends Component {
  render() {
    return (
      <div>
      
      
      <DemoCarousel />   

      <PhotoShape />
      <Information />
      <FooterInformation />
      <NavFooter />
    
      </div>
    );
  }
}

export default Inicio;
