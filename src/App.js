import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { withClientState } from 'apollo-link-state'
import { ApolloLink, split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { ApolloProvider, Query } from 'react-apollo'
import './scss/_main.scss'
import Main from './screens/Main'
import Topbar from './components/Topbar'
import Loader from './components/Loader'
import { GET_PERSON } from './graphql/queries/persons'

const cache = new InMemoryCache()

const httpLink = new HttpLink({
  uri: `https://api.graph.cool/simple/v1/cjtjemw3i1iy70158kr25sqw6`
})

const wsLink = new WebSocketLink({
  uri: `wss://subscriptions.graph.cool/v1/cjtjemw3i1iy70158kr25sqw6`,
  options: {
    reconnect: true
  }
})

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLink
)

const client = new ApolloClient({
  link: ApolloLink.from([
    withClientState({
      cache
    }),
    link
  ]),
  cache
})

const App = () => (
  <ApolloProvider client={client}>
    <Query query={GET_PERSON} variables={{ id: 'cjtjhl8f801tq01106qrg183i' }}>
      {({ loading, error, data, client }) => {
        if (loading) return <Loader />
        if (error) return `Error! ${error.message}`
        client.writeData({ data: { user_logged: data.User } })
        return (
          <Router>
            <div className="Chat">
              <Topbar />
              <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/chat" component={Main} />
              </Switch>
            </div>
          </Router>
        )
      }}
    </Query>
  </ApolloProvider>
)

export default App
