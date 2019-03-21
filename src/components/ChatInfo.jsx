import React from 'react';

const ChatInfo = ({ isCollapsed, handleCollapse }) => (
	<div class="chat-info">
		<div>ChatInfo</div>
		{<button onClick={() => handleCollapse(!isCollapsed)}>collapse</button>}
	</div>
)

export default ChatInfo;