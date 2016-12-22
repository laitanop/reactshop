import React from 'react';
import { Thumbnail, Button } from 'react-bootstrap';


const Item = (props) => {
  const imgPathBase = 'img/items/';
  const imgFolder = props.type ? props.type : '';
  const imgPath = imgPathBase + imgFolder;
  const emptyItem = { 
                  img: '', 
                  nombre: '', 
                  descripcion: '', 
                  precio: '' };

  const item = props.item ? props.item : emptyItem;

  return (
        
        <div>
          
          <Thumbnail src={imgPath + '/' + item.img} alt="242x200">
            <h3>{item.nombre}</h3>
            <p>{item.descripcion}</p>
            <p>{item.precio}</p>
            <p>
              <Button bsStyle="primary">Agregar al Carro</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>  
             
        </div>
           
    );
};

export default Item;
