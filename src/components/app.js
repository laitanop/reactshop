import React, { Component } from 'react';

import NavUp from '../components/nav-up';
import Header from '../container/header';
import NavFooter from './navfooter';

export default class App extends Component {
  render() {
    return (
      <div>
      <NavUp />
        <Header />
      <div >
      {this.props.children}

      <NavFooter />
      </div>

      </div>
    );
  }
}
  
