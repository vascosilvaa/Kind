import React from 'react';
// import ChatInfo from './ChatInfo';
import ChatNavbar from './ChatNavbar';
import ChatSection from './ChatSection';
import ChatInput from './ChatInput';

const ChatContainer = props => (
	<div className={`chat-container ${props.isCollapsed ? 'chat-container--collapsed' : ''}`}>

		<div className="chat-container__wrapper">
			<ChatNavbar {...props} />
			<div className="chat-panel">
				<ChatSection />
				<ChatInput />
			</div>
		</div>


		{/* {props.isCollapsed && <ChatInfo {...props} />} */}

	</div>
)

export default ChatContainer;