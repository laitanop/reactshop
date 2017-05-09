import _ from 'lodash';
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Item from '../components/item_and_modal';
// import Item from '../components/item';

class Earing extends Component {

	componentWillMount() {
    this.props.fetchItems('earing');
   }
renderItem(item) { //[1]
      return (
          <div>
            <Col xs={6} md={4}>
              <Item
                item={item}
                type={'aretes'}
              />

            </Col>


          </div>
      );
   }

   renderRow(items) { //[1,2,3]
    return (
      <div>
        <Row>
            { _.map(items, this.renderItem)}

        </Row>
      </div>
    );
   }

  render() {

    const itemGroupBy3 = _.chunk(this.props.items, 3);

    return (
      <div>
         <Grid>
            {_.map(itemGroupBy3, this.renderRow.bind(this))}

         </Grid>


      </div>

    );
  }
}

function mapStateToProps(state) {
  return { items: state.items.items };
}

export default connect(mapStateToProps, actions)(Earing);
