import {
	ADD_CART
 } from '../actions/types';

const initialCartState = {
  userKey: null,
  count: 0,
  items: []
	};

export default function (state = initialCartState, action) {
	switch (action.type) {
		case ADD_CART:
			return {
                ...state,
                count: state.count + 1,
                items: state.items.concat(action.payload),
            };
		default:
			return state;
	}
}
