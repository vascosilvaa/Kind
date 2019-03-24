import React from 'react'
import { Query } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import ChatRoom from './ChatRoom'
import Constants from '../configs/constants'
import Person from './Person'
import Loader from './Loader'
import { GET_PERSONS, GET_PERSON_CLIENT } from '../graphql/queries/persons'
import { GET_CHATS_BY_PERSON } from '../graphql/queries/chat'

const SideMenuList = props => {
  props.setParams(props.match.params.id)
  switch (props.type) {
    default:
    case Constants.Menu.Conversations:
      return _renderConversationsMenu(props)
    case Constants.Menu.Persons:
      return _renderPersonsMenu(props)
    case Constants.Menu.Contexts:
      return _renderContextsMenu(props)
    case Constants.Menu.Search:
      return _renderSearchMenu(props)
  }
}

const _renderContextsMenu = props => (
  <div className={`side-menu-list ${props.isCollapsed ? 'iscollapsed' : ''}`}>
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
    <ChatRoom isCollapsed={props.isCollapsed} />
  </div>
)

const _renderPersonsMenu = props => (
  <div className={`side-menu-list ${props.isCollapsed ? 'iscollapsed' : ''}`}>
    <Query query={GET_PERSON_CLIENT}>
      {({ loading, error, data, client }) => {
        if (loading) return <Loader />;
        if (error) return <Loader />
        return (
          <Query query={GET_PERSONS} variables={{ id: data.user_logged.id }}>
            {({ loading, error, data }) => {
              if (loading) return <Loader />
              if (error) return `Error! ${error.message}`
              return data.allUsers.map(user => (
                <Person
                  id={user.id}
                  key={user.id}
                  name={user.name}
                  type={Constants.Person.MenuList}
                  hideContent={props.isCollapsed}
                  src={user.photo}
                  size={40}
                  alt={user.name}
                  rooms={user.rooms}
                />
              ))
            }}
          </Query>
        )
      }}
    </Query>
  </div>
)

const _renderConversationsMenu = props => (
  <div className={`side-menu-list ${props.isCollapsed ? 'iscollapsed' : ''}`}>
    <Query query={GET_PERSON_CLIENT}>
      {({ loading, error, data, client }) => {
        if (loading) return <Loader />;
        if (error) return <Loader />
        return (
          <Query
            query={GET_CHATS_BY_PERSON}
            variables={{ id: data.user_logged.id }}
          >
            {({ loading, error, data }) => {
              if (loading) return <Loader />
              if (error) return `Error! ${error.message}`
              return data.allRooms.map(room => (
                <ChatRoom key={room.id} isCollapsed={props.isCollapsed} room={room} />
              ))
            }}
          </Query>
        )
      }}
    </Query>
  </div>
)

const _renderSearchMenu = props => (
  <div className={`side-menu-list ${props.isCollapsed ? 'iscollapsed' : ''}`}>
    <div className="search-input">
      <input placeholder="Search..." />
    </div>
  </div>
)

export default withRouter(SideMenuList)
