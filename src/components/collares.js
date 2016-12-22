import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Item from './item';

class Collares extends Component {
  componentWillMount() {
    this.props.fetchItems('collares');
   }

  render() {
    return (
      <div>
      
       <Grid>
    <Row>


    <Col xs={6} md={4}>

    <Item 
      item={this.props.items ? this.props.items[0] : null} 
      type={'collares'} 
    />
     

    </Col>
    <Col xs={6} md={4}>
    <Item 
      item={this.props.items ? this.props.items[1] : null} 
      type={'collares'} 
    />
     

    </Col>

    <Col xs={6} md={4}>
    <Item 
      item={this.props.items ? this.props.items[2] : null} 
      type={'collares'} 
    />
     

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
