import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import * as Actions from './actions';


import App from './components/app';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import Feature from './components/feature';
import RequireAuth from './components/auth/require_auth';
// import Landing from './components/landing';
import reducers from './reducers';
import Inicio from './components/inicio';
import Nosotros from './components/nosotros';
import Contacto from './components/contacto';
import Collares from './components/collares';
import Pulseras from './components/pulseras';
import Aretes from './components/aretes';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

//update application state
store.dispatch(Actions.verifyAuth());


ReactDOM.render(
<Provider store={store}>
	<Router history={browserHistory} >
		<Route path="/" component={App} >
			<IndexRoute component={Inicio} />
			<Route path="signin" component={Signin} />
			<Route path="signout" component={Signout} />
			<Route path="signup" component={Signup} />
			<Route path="feature" component={RequireAuth(Feature)} />
			<Route path="nosotros" component={Nosotros} />
			<Route path="contacto" component={Contacto} />
			<Route path="collares" component={Collares} />
			<Route path="pulseras" component={Pulseras} />
			<Route path="aretes" component={Aretes} />
		</Route>
	</Router>
</Provider>
, document.querySelector('.container'));
