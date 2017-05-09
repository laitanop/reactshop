import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import * as Actions from './actions';


import App from './components/app';
import Signin from './container/auth/signin';
import Signout from './container/auth/signout';
import Signup from './container/auth/signup';
import Feature from './container/feature';
import RequireAuth from './container/auth/require_auth';
// import Landing from './components/landing';
import reducers from './reducers';
import HomePage from './components/homepage';
import AboutUs from './components/about_us';
import Contact from './components/contact';
import Necklace from './container/necklace';
import Pulseras from './container/pulseras';
import Earing from './container/earing';
import Faq from './components/faq';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

//update application state
store.dispatch(Actions.verifyAuth());


ReactDOM.render(
<Provider store={store}>
	<Router history={browserHistory} >
		<Route path="/" component={App} >
			<IndexRoute component={HomePage} />
			<Route path="signin" component={Signin} />
			<Route path="signout" component={Signout} />
			<Route path="signup" component={Signup} />
			<Route path="feature" component={RequireAuth(Feature)} />
			<Route path="about_us" component={AboutUs} />
			<Route path="contact" component={Contact} />
			<Route path="necklace" component={Necklace} />
			<Route path="pulseras" component={Pulseras} />
			<Route path="earing" component={Earing} />
			<Route path="faq" component={Faq} />
		</Route>
	</Router>
</Provider>
, document.querySelector('.container-fluid'));
