import React, { Component } from 'react';
import { Thumbnail, Button, Image } from 'react-bootstrap';
import ModalItem from '../components/modal_item';

class Item extends Component {
	// Modal
	constructor(props) {
		super(props);
		this.state = { lgShow: false };
	}

	// renderModal(lgClose) {
	// 	<ModalItem
	// 				show={this.state.lgShow}
	// 				onHide={lgClose}
	// 				/>
	//
	//
	// 	}
	// end modal
  render() {
      const imgPathBase = 'img/items/';
      const imgFolder = this.props.type ? this.props.type : '';
      const imgPath = imgPathBase + imgFolder;
      const emptyItem = {
                      img: '',
                      name: '',
                      descripcion: '',
                      price: '' };

      const item = this.props.item ? this.props.item : emptyItem;
      // modal
const lgClose = () => this.setState({ lgShow: false });
// end modal

  return (

        <div>
          <Thumbnail>
					<Image
					src={imgPath + '/' + item.img}
					alt="242x200"
				onClick={() => this.setState({ lgShow: true })}
				responsive
					/>
            <h3 id="itemModal">{item.name}</h3>
            <h5 id="itemModal">{item.description}</h5>
            <p id="itemModal">{item.price}</p>
            <p>
              {/*<Button bsStyle="btn btn-info">Add to Cart</Button>&nbsp;*/}

            </p>
          </Thumbnail>
					<ModalItem
						show={this.state.lgShow}
						onHide={lgClose}
					/>

        </div>

      );
    }
  }
export default Item;
