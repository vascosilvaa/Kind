import React from 'react';
// import Avatar from './Avatar';
import Constants from '../configs/constants';
import Person from './Person';

const ChatNavbar = ({ isCollapsed, handleCollapse }) => (
	<div className='chat-navbar'>
		<Person
			name="Miguel Antunes"
			type={Constants.Person.WithAvatar}
			src="http://i.pravatar.cc/35"
			size={33}
			alt="example"
		/>
		<div className='chat-navbar__actions'>
			{/* <span className='fa fa-search' /> */}
			<span className={`fa fa-info-circle ${isCollapsed ? 'active' : ''}`} onClick={() => handleCollapse(!isCollapsed)} />
			{/* <span className='fa fa-ellipsis-v' /> */}
		</div>

	</div>
)

export default ChatNavbar;