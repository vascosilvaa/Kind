import React from 'react';
import { Link } from 'react-router-dom';

const SideMenuTabs = ({ isCollapsed }) => (
	<div className='side-menu__tabs'>
		<Link to={'/'}><span className='fa fa-comment' /></Link>
		{/* {!isCollapsed && (
			<>
				<Link to={'/chat/contexts'}><span className='fa fa-user' /></Link>
				<Link to={'/chat/persons'} className='margin-r-auto'><span className='fa fa-users' /></Link>
				<Link to={'/chat/search'} className='margin-r-0'><span className='fa fa-search' /></Link>
			</>
		)} */}
	</div>
)

export default SideMenuTabs;