import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { ApolloClient } from 'apollo-client';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { HttpLink } from 'apollo-link-http';
// import { withClientState } from 'apollo-link-state';
// import { ApolloLink, split } from 'apollo-link';
// import { WebSocketLink } from 'apollo-link-ws';
// import { getMainDefinition } from 'apollo-utilities';
import { ApolloProvider } from 'react-apollo';
import './scss/_main.scss';
import Main from './screens/Main';
import Topbar from './components/Topbar'

// const cache = new InMemoryCache();

// const httpLink = new HttpLink({
// 	uri: `http://localhost:4000`
// })

// const wsLink = new WebSocketLink({
// 	uri: `ws://127.0.0.1:4000/graphql`,
// 	options: {
// 		reconnect: true
// 	}
// })

// const link = split(
// 	({ query }) => {
// 		const { kind, operation } = getMainDefinition(query);
// 		return kind === 'OperationDefinition' && operation === 'subscription';
// 	},
// 	wsLink,
// 	httpLink
// )


// const client = ApolloClient({
// 	link: ApolloLink.from([
// 		withClientState({
// 			defaults: {
// 				personLoggedId: null,
// 				platform: 'campus'
// 			},
// 			cache
// 		}),
// 		link
// 	]),
// 	cache
// });



const App = () => (
	// <ApolloProvider>
	<Router>
		<div className="Chat">
			<Topbar />
			<Switch>
				<Route exact path='/' component={Main} />
				<Route path='/chat' component={Main} />
			</Switch>
		</div>
	</Router>
	// </ApolloProvider>
);

export default App;
