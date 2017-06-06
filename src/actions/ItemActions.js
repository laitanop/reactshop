//import { browserHistory } from 'react-router';
import firebase, { firebaseRef } from '../firebase';

import { 
  FETCH_ITEMS,
  ADD_CART
  
} from './types';

export function addToCart(item) {
    console.log('Add to Cart');
    return {
      type: ADD_CART,
      payload: item
    };
}

export function fetchItems(itemName) {
 return (dispatch, getState) => {
  const itemRef = firebaseRef.child(itemName);

  return itemRef.once('value').then((snapshot) => {
    const items = snapshot.val() || {};
    const parsedItems = [];

    Object.keys(items).forEach((itemId) => {
      parsedItems.push({
        id: itemId,
        ...items[itemId]  
      });
    });
   
    dispatch({ type: FETCH_ITEMS, 
               payload: parsedItems });
    });
 };
}

