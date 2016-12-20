import { browserHistory } from 'react-router';
import firebase, { firebaseRef } from '../firebase';

import { 
	AUTH_USER, 
	AUTH_ERROR,
	SIGN_OUT_USER,
	FETCH_MESSAGE, 
  FETCH_ITEMS
  
} from './types';

export function signinUser({ email, password }) {
  return function (dispatch) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch(authUser());
        browserHistory.push('/');
      })
      .catch(error => {
        dispatch(authError(error));
      });
  };
}

export function signupUser({ email, password }) {
  return function (dispatch) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        dispatch(authUser());
        browserHistory.push('/');
      })
      .catch(error => {
        console.log(error);
        dispatch(authError(error));
      });
  };
}

export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	};
}

export function verifyAuth() {
  return function (dispatch) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(authUser());
      } else {
        dispatch(signoutUser());
      }
    });
  };
}

export function authUser() {
  return {
    type: AUTH_USER
  };
}

export function signoutUser() {
	return function (dispatch) {
    firebase.auth().signOut()
    .then(() => {
      //browserHistory.push('/'); 
      dispatch({ type: SIGN_OUT_USER });
    })
    .catch(error => {
        console.log('error signing out. Detail ' + error);    
    });
  };
}

export function fetchItems() {
 return (dispatch, getState) => {
  console.log('entre a fetchItems');
  const collaresRef = firebaseRef.child('collares');
  console.log(collaresRef);

  return collaresRef.once('value').then((snapshot) => {
    const collares = snapshot.val() || {};
    let parsedCollares = [];

    Object.keys(collares).forEach((collarId) => {
      parsedCollares.push({
        id: collarId,
        ...collares[collarId]  
      });
    });

    
    dispatch({ type: FETCH_ITEMS, 
               payload: parsedCollares });
    });
 };
}

/*export function fetchMessage() {
  firebase.child('collares').then((snapshot) => {
    dispatch({ type: FETCH_ITEMS, 
               payload: snapshot.val() });
    

  });
	
}*/

