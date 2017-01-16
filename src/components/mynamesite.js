 
import React, { Component } from 'react';
import { Link } from 'react-router';


class MyNameSite extends Component {
  render() {
    return (
      <div className="mynamesite">
       <Link to="/"><h1><img className="lead float-xs-left" role="presentation" src="img/logo/logo1.jpg" width="100" height="" />Laitanos</h1></Link>
</div>
      
    );
  }
}

export default MyNameSite;

