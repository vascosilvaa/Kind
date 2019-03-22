import gql from "graphql-tag";

const GET_PERSON = gql`
  query User($id: ID!) {
    User(id: $id) {
      id
      name
      photo
    }
  }
`;

const GET_PERSON_CLIENT = gql`
  query getUser @client {
    user_logged @client {
      id
      name
      photo
    }
  }
`


const GET_PERSONS = gql`
  query allUsers($id: ID!) {
    allUsers(filter: {id_not:$id}) {
      id
      name
      photo
      rooms(filter:{ users_some: {id: $id} }) {
        id
        users {
          id
        }
      }
      messages(first: 1){
        id,
        content
      }
    }
  }
`


export {
  GET_PERSON,
  GET_PERSONS,
  GET_PERSON_CLIENT
};