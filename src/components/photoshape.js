import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';


class PhotoShape extends Component {
  render() {
  
    return (
      <div>
<Grid className="photoshape">
    <Row>
    <Col xs={6} md={4}>
      <Thumbnail src="img/photoshape/ps5.jpg" alt="242x200" />


    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="img/photoshape/ps9.jpg" alt="242x200" />


    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="img/photoshape/ps8.jpg" alt="242x200" />


    </Col>
    </Row>
  </Grid>


    </div>
    );
  }
}

export default PhotoShape;
