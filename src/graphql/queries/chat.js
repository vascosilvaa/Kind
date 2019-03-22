import gql from "graphql-tag";

const GET_CHAT_BY_ID = gql`
  query Room($id: ID!, $id_user: ID!) {
    Room(id: $id){
      id
      messages {
        id
        content
        score
        createdAt
        user {
          id
          photo
        }
      }
      users(filter: {
        id_not: $id_user
      }){
        id
        name
        photo
      }
    }
  }
`;

const GET_CHATS_BY_PERSON = gql`
  query allRooms($id: ID!) {
    allRooms(filter:{users_some: {id: $id}}) {
      id, 
    users (filter:{id_not: $id }){
    	id,
    	photo,
      name, 
    }
    messages(last: 1){
      id, 
      content
      score,
      createdAt
    }
	}
}
`;

const GET_MESSAGES_BY_ROOM = gql`
  query messagesByRoom($id: ID!) {
      Room(id:$id) {
        id 
        messages{
          id
          content
          score
          createdAt
          user {
            id
            photo
          }
        }
    }
  }
`


export {
  GET_CHAT_BY_ID,
  GET_CHATS_BY_PERSON,
  GET_MESSAGES_BY_ROOM
};