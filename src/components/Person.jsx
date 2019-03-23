import React from 'react';
import { withRouter } from 'react-router-dom';
import Constants from '../configs/constants';
import Avatar from './Avatar';
import PersonState from './PersonState';
import { Mutation, Query } from "react-apollo";
import Loader from './Loader';
import { ADD_CHAT } from '../graphql/mutations/chat';
import { GET_PERSON_CLIENT } from '../graphql/queries/persons'

const Person = props => {
	switch (props.type) {
		default:
		case Constants.Person.WithAvatar: return _renderPersonWithAvatar(props);
		case Constants.Person.WithAvatarAndState: return _renderPersonWithAvatarAndState(props)
		case Constants.Person.MenuList: return _renderPersonMenuList(props);
	}
}

const _renderPersonWithAvatar = ({ alt, src, size, name }) => (
	<div className="person person__with-avatar">
		<Avatar alt={alt} src={src} size={size} type={Constants.Avatar.Rounded} />
		<span className='person-section'>
			<span className='person-section__name'>{name}</span>
			<PersonState state='active' size={Constants.Size.small} />
		</span>

	</div>
)

const _renderPersonWithAvatarAndState = ({ alt, src, size, name, state }) => (
	<div className="person person__with-avatar-and-state">
		<Avatar alt={alt} src={src} size={size} type={Constants.Avatar.Rounded} />
		<div className="person-section">
			<span className="person-section__name">{name}</span>
			<div className="person-section__state">
				<span >Disponível <PersonState state='active' size={Constants.Size.small} /></span>
				<span className='fa fa-angle-down' />
			</div>
		</div>
	</div>
)

const _renderPersonMenuList = ({ id, alt, src, size, name, state, hideContent, history, rooms }) => (
	<Query query={GET_PERSON_CLIENT}>
		{({ loading, error, data: dataLogged, client }) => {
			if (loading) return <Loader />;
			if (error) return <Loader />
			return (
				<Mutation mutation={ADD_CHAT}>
					{(newChat, { data }) => (
						<div className="person person__menu-list" onClick={() => _handleRedirect(rooms, history, newChat, id, dataLogged)}>
							<Avatar alt={alt} src={src} size={size} type={Constants.Avatar.Rounded} />
							{!hideContent &&
								<span className='person-section'>
									<span className='person-section__name'>{name}</span>
								</span>
							}
						</div>
					)}
				</Mutation>
			)
		}}
	</Query>
)

const _handleRedirect = async (rooms, history, newChat, id, dataLogged) => {
	console.log(rooms)
	if (rooms.length > 0) {
		history.push(`/chat/persons/${rooms[0].id}`);
	} else {
		const data = await newChat({ variables: { usersIds: [id, dataLogged.user_logged.id] } });
		if (data) history.push(`/chat/persons/${data.data.createRoom.id}`);
	}
}


export default withRouter(Person);
