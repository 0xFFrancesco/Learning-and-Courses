import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import thunk from 'redux-thunk';
import {AUTH_USER} from './actions/type';

import App from './components/app';
import reducers from './reducers';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import Feature from './components/feature';
import Welcome from './components/welcome';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');
if ( token ) {
	store.dispatch({type : AUTH_USER});
}

ReactDOM.render(<Provider store={store}>
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<Route path='signin' component={Signin} />
			<Route path='signout' component={Signout} />
			<Route path='signup' component={Signup} />
			<Route path='feature' component={Feature} />
			<IndexRoute component={Welcome} />
		</Route>
	</Router>
</Provider>, document.querySelector('.container'));
