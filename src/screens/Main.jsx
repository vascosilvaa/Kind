import React, { useState } from 'react';
import SideMenu from '../components/SideMenu';
import ChatContainer from '../components/ChatContainer';

const Main = () => {
	const [collapsed, setCollapsed] = useState(false);
	const [params, setParams] = useState(null);
	return (
		<div className="Main">
			<SideMenu isCollapsed={collapsed} handleCollapse={setCollapsed} params={params} setParam={p => setParams(p)} />
			<ChatContainer isCollapsed={collapsed} handleCollapse={setCollapsed} params={params} setParam={p => setParams(p)} />
		</div>
	)
}

export default Main;