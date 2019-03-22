import React from 'react';
// import Avatar from './Avatar';
import Constants from '../configs/constants';
import Person from './Person';

const ChatNavbar = ({ isCollapsed, handleCollapse, user }) => (
	<div className='chat-navbar'>
		<Person
			name={user.name}
			type={Constants.Person.WithAvatar}
			src={user.photo}
			size={33}
			alt={user.name}
		/>
		<div className='chat-navbar__actions'>
			{/* <span className='fa fa-search' /> */}
			<span className={`fa fa-angle-left ${isCollapsed ? 'active' : ''}`} onClick={() => handleCollapse(!isCollapsed)} />
			{/* <span className='fa fa-ellipsis-v' /> */}
		</div>

	</div>
)

export default ChatNavbar;