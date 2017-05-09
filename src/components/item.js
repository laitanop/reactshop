// import React from 'react';
// import { Thumbnail, Button } from 'react-bootstrap';
//
//
// const Item = (props) => {
//   const imgPathBase = 'img/items/';
//   const imgFolder = props.type ? props.type : '';
//   const imgPath = imgPathBase + imgFolder;
//   const emptyItem = {
//                   img: '',
//                   name: '',
//                   descripcion: '',
//                   price: '' };
//
//   const item = props.item ? props.item : emptyItem;
//
//   return (
//
//         <div>
//
//           <Thumbnail src={imgPath + '/' + item.img} alt="242x200">
//             <h3>{item.name}</h3>
//             <p>{item.description}</p>
//             <p>{item.price}</p>
//             <p>
//               <Button bsStyle="btn btn-info">Add to Cart</Button>&nbsp;
//               <Button bsStyle="primary" onClick={() => this.setState({ lgShow: true })}>
// 							 Launch large demo modal
// 							</Button>
//
//
//             </p>
//           </Thumbnail>
//
//
//         </div>
//
//     );
// };
//
// export default Item;
