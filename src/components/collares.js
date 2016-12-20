import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Item from './item';
import { connect } from 'react-redux';
import * as actions from '../actions';


class Collares extends Component {
  componentWillMount() {
    this.props.fetchItems();
   }

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

function mapStateToProps(state) {
  return { items: state.items.items };
}

export default connect(mapStateToProps, actions)(Collares);
