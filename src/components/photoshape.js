import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';




class PhotoShape extends Component {
  render() {
    return (
      <div>
<Grid className="photoshape">
    <Row>
    <Col xs={6} md={4}>
      <Thumbnail src="img/photoshape/ps1.jpg" alt="242x200">
        
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="img/photoshape/ps2.jpg" alt="242x200">
         
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="img/photoshape/ps3.jpg" alt="242x200">
          
      </Thumbnail>
    </Col>
    </Row>
  </Grid>

 
    </div>
    );
  }
}

export default PhotoShape;



