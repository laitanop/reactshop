import React, { Component } from 'react';
import { Thumbnail, Button } from 'react-bootstrap';


class Item extends Component {
  render() {
    return (
      <div>

      <Thumbnail src="img/logo/logo1.jpg" alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Agregar al Carro</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>

      
</div>
      
    );
  }
}

export default Item;
