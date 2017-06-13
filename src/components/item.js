import React, { Component } from 'react';
import { Thumbnail, Button, Image } from 'react-bootstrap';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Item extends Component {
	// Modal
	constructor(props) {
		super(props);
		this.state = { lgShow: false };
    this.renderModal = this.renderModal.bind(this);
	}

	renderModal(lgClose, item) {
	//	const props = { width: 400, height: 250, zoomWidth: 500, img: item.imagePath };
    if (this.state.lgShow) {
      return (
        <Modal
          isOpen={this.state.lgShow}
          onRequestClose={lgClose}
          style={customStyles}
          contentLabel="Modal"
        >
				<Thumbnail>
        <Image
            id="landing"
            src={item.imagePath}
        />

              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>
              <p>
                <Button
                  bsStyle="btn btn-info"
                  onClick={() => this.props.addToCart(item)}
                >
                Add to Cart
                </Button>&nbsp;
                </p>
								</Thumbnail>

        </Modal>
    );
  }

	/*	<ModalItem
					show={this.state.lgShow}
					onHide={lgClose}
					/>*/


		}
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
      item.imagePath = imgPath + '/' + item.img;


      return (
            <div>
								<div className="brightness"	>
                <Image
									src={item.imagePath}
                  alt="242x200"
                  onClick={() => this.setState({ lgShow: true })}
                  responsive
                />
								</div>
                <h3 id="itemModal">{item.name}</h3>
                <h5 id="itemModal">{item.description}</h5>
                <p id="itemModal">{item.price}</p>
                <p>
                <Button
                  bsStyle="btn btn-info"
                  onClick={() => this.props.addToCart(item)}
                >
                Add to Cart
                </Button>
                </p>

              {this.renderModal(lgClose, item)}
            </div>

          );
    }
}

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default connect(null, actions)(Item);
