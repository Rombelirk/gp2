import { gql } from 'apollo-server-express'

const userSchema = gql`
    type Stocks {
        stock: Stock!
        purchasePrice: Int!
    }

    type Portfolio {
        stocks: Stocks!
    }

    type User {
        _id: String!
        login: String!
        portfolio: Portfolio!
    }
`

export default userSchema
