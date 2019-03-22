import gql from "graphql-tag";

const ADD_CHAT = gql`
    mutation createRoom($usersIds:[ID!]) {
        createRoom(usersIds: $usersIds) {
            id
        }
    }
  `

const ADD_MESSAGE = gql`
    mutation createMessage($userId: ID!, $roomId: ID!, $content: String!) {
        createMessage(userId: $userId, roomId: $roomId, content: $content) {
            id
        }
    }
  `

export {
    ADD_CHAT,
    ADD_MESSAGE
}