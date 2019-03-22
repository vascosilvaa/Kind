import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const SideMenuTabs = props => {
	const { isCollapsed, param } = props;

	return (
		<div className='side-menu__tabs'>
			<Link to={`/chat/conversations/${param ? param :''}`}><span className='fa fa-comment' /></Link>
			{!isCollapsed && (
				<>
					<Link to={`/chat/persons/${param ? param :''}`} className='margin-r-auto'><span className='fa fa-user' /></Link>
					{/* <Link to={`/chat/contexts/${param ? param :''}`} className='margin-r-auto'><span className='fa fa-users' /></Link> */}
					<Link to={`/chat/search/${param ? param :''}`} className='margin-r-0'><span className='fa fa-search' /></Link>
				</>
			)}
		</div>
	)
}

export default withRouter(SideMenuTabs);