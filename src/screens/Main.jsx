import React, { useEffect, useState } from 'react';
import SideMenu from '../components/SideMenu';
import ChatContainer from '../components/ChatContainer';

const Main = () => {
	const [collapsed, setCollapsed] = useState(false);
	const [params, setParams] = useState(null);
	const [mobile, setMobile] = useState(window.innerWidth > 1000 ? false : true)
	
	useEffect(() => {
		const handler = () => {
			setMobile(window.innerWidth > 1000 ? false : true);
			if (window.innerWidth < 1000) setCollapsed(true);
			if (window.innerWidth > 1000) setCollapsed(false);
		};
		window.addEventListener('resize', handler);

		return () => window.removeEventListener('resize', handler);
	}, []);

	return (
		<div className="Main">
			<SideMenu isCollapsed={collapsed} handleCollapse={setCollapsed} params={params} setParam={p => setParams(p)} />
			<ChatContainer isCollapsed={collapsed} handleCollapse={setCollapsed} params={params} setParam={p => setParams(p)} />
		</div>
	)
}

export default Main;