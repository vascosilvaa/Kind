import React, { useState } from 'react'
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
import Login from './screens/Login'
import Topbar from './components/Topbar'
import Loader from './components/Loader'
import { GET_PERSON } from './graphql/queries/persons'
import NoMatch from './screens/NoMatch';

const cache = new InMemoryCache()

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GRAPHCOOL_LINK
})

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_GRAPHCOOL_WS,
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

const App = () => {
  const [userLogged, setUserLogged] = useState(null);
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="Chat">

          {!userLogged && <Login userLogged={userLogged} setUserLogged={setUserLogged} />}

          {userLogged &&
            (
              <Query query={GET_PERSON} variables={{ id: userLogged }}>
                {({ loading, error, data, client }) => {
                  if (loading) return <Loader />
                  if (error) return `Error! ${error.message}`
                  client.writeData({ data: { user_logged: data.User } })
                  return (
                    <>
                      <Topbar userLogged={userLogged} setUserLogged={setUserLogged} />
                      <Switch>
                        <Route path="/chat" component={Main} />
                        <Route component={NoMatch} />
                      </Switch>
                    </>
                  )
                }}
              </Query>
            )}
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App
