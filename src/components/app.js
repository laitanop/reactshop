import React, { Component } from 'react';

import Header from './header';
import Footer from './footer';
import MyNameSite from './mynamesite';



export default class App extends Component {
  render() {
    return (	
      <div>


      	<Header />
        <MyNameSite />
        
      	{this.props.children}

        
        
      	<Footer />
      	
      </div>
    );
  }
}
