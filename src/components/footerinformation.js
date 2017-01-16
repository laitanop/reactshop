import React, { Component } from 'react';
import { ResponsiveEmbed, embed } from 'react-bootstrap';





class FooterInformation extends Component {
  render() {
    return (
      <div>
        <div className="center-block"style={{width: 660, height: 'auto'}}>
    <ResponsiveEmbed a16by9>
      <embed type="image/svg+xml" src="img/photoshape/ps4.jpg" />
    </ResponsiveEmbed>
  </div>

 
    </div>
    );
  }
}

export default FooterInformation;

