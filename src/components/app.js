import React, { Component } from 'react';


import Header from '../container/header';
import NavFooter from './navfooter';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
      <div >
      {this.props.children}

      <NavFooter />
      </div>

      </div>
    );
  }
}
  // <MyNameSite />
