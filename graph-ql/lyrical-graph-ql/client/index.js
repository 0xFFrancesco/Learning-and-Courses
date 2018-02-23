import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';

import SongList from './componens/songlist';

const client = new ApolloClient({});

const Root = () =>{
	return (<ApolloProvider client={client}>
		<div>
			<h1>Lyrical React-GraphQL App</h1>
			<SongList />
		</div>
	</ApolloProvider>);
};

ReactDOM.render(<Root />, document.querySelector('#root'));