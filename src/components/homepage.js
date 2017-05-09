import React, { Component } from 'react';
import DemoCarousel from '../components/carousel';
import PhotoShape from './photoshape';
import Information from './information';
import FooterInformation from './footerinformation';

class Home extends Component {
  render() {
    return (
      <div>


<DemoCarousel />

      <PhotoShape />
      <Information />
      <FooterInformation />


      </div>
    );
  }
}

export default Home;
