import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import itemReducer from './item_reducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  items: itemReducer,
});

export default rootReducer;
