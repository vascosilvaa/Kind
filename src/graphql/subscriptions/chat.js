import gql from "graphql-tag";

const NEW_MESSAGE = gql`
    subscription newMessage{
        Message(
            filter: {
            mutation_in: [CREATED]
            }
        ) {
            mutation
            node {
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
    NEW_MESSAGE
}