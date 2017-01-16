import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';




class PhotoShape extends Component {
  render() {
    return (
      <div>
<Grid className="photoshape">
    <Row>
    <Col xs={6} md={4}>
      <Thumbnail src="img/photoshape/ps6.jpg" alt="242x200">
        
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="img/photoshape/ps4.jpg" alt="242x200">
         
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="img/photoshape/ps5.jpg" alt="242x200">
          
      </Thumbnail>
    </Col>
    </Row>
  </Grid>

 
    </div>
    );
  }
}

export default PhotoShape;



