import { gql } from 'apollo-server-express'

const stockSchema = gql`
    type PriceChanges {
        time: String!
        value: Int!
    }
    type Stock {
        _id: String!
        ticker: String!
        name: String!
        description: String!
        price: Int!
        priceChanges: PriceChanges!
    }
`

export default stockSchema
