import 
{ AUTH_USER, 
  SIGN_OUT_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from '../actions/types';

const initialState = {
  authenticated: false,
  error: null
};

export default function (state = initialState, action) {
	switch (action.type) {
		case AUTH_USER:
			return { ...state, authenticated: true, error: null };
		case SIGN_OUT_USER:
			return { ...state, authenticated: false, error: null };	
		case AUTH_ERROR:
			return { ...state, error: action.payload.message };	
		case FETCH_MESSAGE:
			return { ...state, message: action.payload };	
		default:
			return state;		
	}
}
