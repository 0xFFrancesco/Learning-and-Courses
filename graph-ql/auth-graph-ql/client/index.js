import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, {createNetworkInterface} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {Router, IndexRoute, Route, hashHistory} from 'react-router';

import App from './components/App';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';

const networkInterface = createNetworkInterface({
	uri  : '/graphql',
	opts : {
		credentials : 'same-origin'
	}
});

const client = new ApolloClient({
	dataIdFromObject : o => o.id,
	networkInterface //by default it doesn't send cookies and this breaks cookie based auth
});

const Root = () =>{
	return (<ApolloProvider client={client}>
		<Router history={hashHistory}>
			<Route path='/' component={App}>
				<Route path='/login' component={LoginForm} />
				<Route path='/signup' component={SignupForm} />
				<Route path='/dashboard' component={Dashboard} />
			</Route>
		</Router>
	</ApolloProvider>);
};

ReactDOM.render(<Root />, document.querySelector('#root'));
