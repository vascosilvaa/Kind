import React from 'react';
import Constants from '../configs/constants';
import Avatar from './Avatar';
import PersonState from './PersonState';

const Person = props => {
	switch (props.type) {
		default:
		case Constants.Person.WithAvatar: return _renderPersonWithAvatar(props);
		case Constants.Person.WithAvatarAndState: return _renderPersonWithAvatarAndState(props)
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



export default Person;
