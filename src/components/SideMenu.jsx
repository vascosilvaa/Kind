import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Constants from '../configs/constants';
import SideMenuTabs from './SideMenuTabs';
import SideMenuList from './SideMenuList';
import Button from './Button';

const SideMenu = props => (
	<div className={`side-menu ${props.isCollapsed ? 'side-menu--collapsed' : ''}`}>
		<SideMenuTabs {...props} />
		<Button type={Constants.Button.Collapse} onClick={() => props.handleCollapse(!props.isCollapsed)} />
		<Switch>
			<Route exact path='/' component={() => <div>conversas</div>} />
			{/* <Route path='/chat/contexts' component={() => <div>groups/communities</div>} />
			<Route path='/chat/persons' component={() => <div>persons</div>} />
			<Route path='/chat/search' component={() => <div>search</div>} /> */}
		</Switch>
		<SideMenuList isCollapsed={props.isCollapsed} />
	</div>
)

export default SideMenu;