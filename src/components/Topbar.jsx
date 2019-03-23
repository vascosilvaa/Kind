import React from 'react';
import { Query } from "react-apollo";
import { GET_PERSON_CLIENT } from '../graphql/queries/persons';
import Constants from '../configs/constants';
import Person from './Person';
import Loader from './Loader';

const Topbar = ({ userLogged }) => {
	if (!userLogged) return false;
	return (
		<Query query={GET_PERSON_CLIENT}>
			{({ loading, error, data, client }) => {
				if (loading) return <Loader />;
				if (error) return <Loader />
				return (
					<div className='Topbar'>
						<div className='topbar topbar__title'>
							<div className="img-topbar"></div>
						</div>
						<div className='topbar topbar__actions'>
							<div className='cog'>
								<span className='fa fa-cog' />
							</div>
							<Person type={Constants.Person.WithAvatarAndState} src={data.user_logged.photo} size={33} alt='example' state='active' name={data.user_logged.name} />
						</div>
					</div>
				)
			}}
		</Query>
	)
}

export default Topbar;