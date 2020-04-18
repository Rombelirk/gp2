import { gql } from 'apollo-server-express'

const schema = gql`
    type Query {
        me: User
    }
    type Mutation {
        signup(url: String!): String
    }
    type User {
        username: String!
    }
`

export default schema