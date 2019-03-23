import gql from "graphql-tag";

const ADD_CHAT = gql`
    mutation createRoom($usersIds:[ID!]) {
        createRoom(usersIds: $usersIds) {
            id
        }
    }
  `

const ADD_MESSAGE = gql`
    mutation postMessage($userId: ID!, $roomId: ID!, $content: String!) {
        postMessage (userId: $userId, roomId: $roomId, content: $content) {
            id,
            sentiment,
            isBully
        }
    }
  `

export {
    ADD_CHAT,
    ADD_MESSAGE
}