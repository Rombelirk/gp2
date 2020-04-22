import { gql } from 'apollo-server-express'

const orderSchema = gql`
    type BuyOrder {
        _id: String!
        stock: Stock
        price: Int!
    }

    type SellOrder {
        _id: String
        boughtStock: Stock
        price: Int
    }

    input CreateBuyOrderInput {
        stockId: String!
        price: Int!
    }

    input CreateSellOrderInput {
        boughtStockId: String!
        price: Int!
    }

    input GetBuyOrdersInput {
        type: String
    }

    extend type Mutation {
        createBuyOrder(input: CreateBuyOrderInput): BuyOrder
        createSellOrder(input: CreateSellOrderInput): SellOrder
    }

    extend type Query {
        getBuyOrders(input: GetBuyOrdersInput): [BuyOrder!]!
    }
`

export default orderSchema
