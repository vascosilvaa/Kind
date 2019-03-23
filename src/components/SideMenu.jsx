import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Constants from '../configs/constants';
import SideMenuTabs from './SideMenuTabs';
import Button from './Button';
import Loader from './Loader';

const SideMenuList = React.lazy(() => import('./SideMenuList'));

const SideMenu = props => {
	return (
		<div className={`side-menu ${props.isCollapsed ? 'side-menu--collapsed' : ''}`}>
			<SideMenuTabs {...props} param={props.params} />
			<Button type={Constants.Button.Collapse} onClick={() => props.handleCollapse(!props.isCollapsed)} />
			<Switch>
				<Route exact path='/chat/conversations/:id' component={() => (
					<Suspense fallback={< Loader />}>
						<SideMenuList isCollapsed={props.isCollapsed} type={Constants.Menu.Conversations} setParams={props.setParam} />
					</Suspense >
				)} />
				<Route path='/chat/contexts/:id' component={() => (
					<Suspense fallback={< Loader />}>
						<SideMenuList isCollapsed={props.isCollapsed} type={Constants.Menu.Contexts} setParams={props.setParam} />
					</Suspense >
				)} />
				<Route path='/chat/persons/:id' component={() => (
					<Suspense fallback={< Loader />}>
						<SideMenuList isCollapsed={props.isCollapsed} type={Constants.Menu.Persons} setParams={props.setParam} />
					</Suspense >
				)} />
				<Route path='/chat/search/:id' component={() => (
					<Suspense fallback={< Loader />}>
						<SideMenuList isCollapsed={props.isCollapsed} type={Constants.Menu.Search} setParams={props.setParam} />
					</Suspense >
				)} />
				<Route path='/chat/*/:id' component={() => (
					<Suspense fallback={< Loader />}>
						<SideMenuList isCollapsed={props.isCollapsed} type={Constants.Menu.Conversations} setParams={props.setParam} />
					</Suspense >
				)} />

			</Switch>
		</div>
	)
}


export default SideMenu;