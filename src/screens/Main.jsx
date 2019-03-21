import React, { useState } from 'react';
import SideMenu from '../components/SideMenu';
import ChatContainer from '../components/ChatContainer';

const Main = () => {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<div className="Main">
			<SideMenu isCollapsed={collapsed} handleCollapse={setCollapsed} />
			<ChatContainer isCollapsed={collapsed} handleCollapse={setCollapsed} />
		</div>
	)
}

export default Main;