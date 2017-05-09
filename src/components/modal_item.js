import React from 'react';
import { Button, Modal, Thumbnail, Image } from 'react-bootstrap';
// import Item from '../components/item_and_modal';

class ModalItem extends React.Component {

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

    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
          <Thumbnail>
					<Image
					src={imgPath + '/' + item.img}
					alt="242x200"
				/>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p>
              <Button bsStyle="btn btn-info">Add to Cart</Button>&nbsp;
              </p>
          </Thumbnail>
					</div>


        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalItem;

// <h3>{this.props.item.name}</h3>
// <p>{this.props.item.description}</p>
// <p>{this.props.item.price}</p>
