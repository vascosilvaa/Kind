import React from 'react';
import Constants from '../configs/constants';
import Person from './Person';

const Topbar = () => (
	<div className='Topbar'>
		<div className='topbar topbar__title'>
			Chat
		</div>
		<div className='topbar topbar__actions'>
			<div className='cog'>
				<span className='fa fa-cog' />
			</div>
			<Person type={Constants.Person.WithAvatarAndState} src='http://i.pravatar.cc/35' size={33} alt='example' state='active' name="Vasco Silva"/>
		</div>
	</div>
)

export default Topbar;