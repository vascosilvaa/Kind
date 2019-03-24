import React from 'react';
import { Query } from 'react-apollo';
import { GET_PERSON_CLIENT } from '../graphql/queries/persons';
import Constants from '../configs/constants';
import Person from './Person';
import Loader from './Loader';
import mortyImg from './../assets/imgs/morty.png';
import rickImg from './../assets/imgs/rick.png';

const Topbar = ({ userLogged }) => {
  if (!userLogged) return false;
  return (
    <Query query={GET_PERSON_CLIENT}>
      {({ loading, error, data, client }) => {
        if (loading) return <Loader />;
        if (error) return `Error! ${error.message}`;
        const avatar = () => {
          const name = data.user_logged.name;
          if (name === 'Morty') return mortyImg;
          if (name === 'Rick') return rickImg;
          return data.user_logged.photo;
        };
        return (
          <div className="Topbar">
            <div className="topbar topbar__title">
              <div className="img-topbar" />
            </div>
            <div className="topbar topbar__actions">
              <div className="cog">
                <span className="fa fa-cog" />
              </div>
              <Person
                type={Constants.Person.WithAvatarAndState}
                src={avatar()}
                size={33}
                alt="user image"
                state="active"
                name={data.user_logged.name}
              />
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Topbar;
