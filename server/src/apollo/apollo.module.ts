import { ApolloServer } from 'apollo-server-express'
import userSchema from '../user/user.schema'
import orderSchema from '../order/order.schema'
import stockSchema from '../stock/stock.schema'
import boughtStockSchema from '../bought_stock/bought_stock.schema'
import { gql } from 'apollo-server-express'
import { createBuyOrder, getBuyOrders } from '../order/order.resolver'

const rootSchema = gql`
    type Query {
        _empty: String
    }
    type Mutation {
        _empty: String
    }
`
const server = new ApolloServer({
    typeDefs: [
        rootSchema,
        userSchema,
        orderSchema,
        stockSchema,
        boughtStockSchema,
    ],
    resolvers: {
        Query: {
            getBuyOrders,
        },
        Mutation: {
            createBuyOrder,
        },
    },
})

export default server
