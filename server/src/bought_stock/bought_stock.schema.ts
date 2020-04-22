import { gql } from 'apollo-server-express'

const boughtStockSchema = gql`
    type BoughtStock {
        _id: String!
        stock: Stock!
        user: User!
        purchasePrice: Int!
    }
`
export default boughtStockSchema
