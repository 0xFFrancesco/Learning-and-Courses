import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import App from './componens/app';
import SongList from './componens/songlist';
import SongCreate from './componens/songCreate';

const client = new ApolloClient({});

const Root = () =>{
	return (<ApolloProvider client={client}>
		<Router history={hashHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={SongList} />
				<Route path='/songs/new' component={SongCreate} />
			</Route>
		</Router>
	</ApolloProvider>);
};

ReactDOM.render(<Root />, document.querySelector('#root'));