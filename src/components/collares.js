import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Item from './item';


class Collares extends Component {
  render() {
    return (
      <div>
      
       <Grid>
    <Row>
    <Col xs={6} md={4}>

    <Item />
     

    </Col>
    <Col xs={6} md={4}>
    <Item />
     

    </Col>
    <Col xs={6} md={4}>
    <Item />
      

    </Col>
    </Row>
  </Grid>
       
</div>
      
    );
  }
}

export default Collares;
