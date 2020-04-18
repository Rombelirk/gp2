import express, { Application } from 'express'
import { ApolloServer, ResolveType, ApolloServerExpressConfig, Config } from 'apollo-server-express'
import schema from './schema/schema'
import resolvers from './resolvers/resolvers'
import mongoose from 'mongoose'


const { DBAUTH, DBHOST, DBNAME, DBPORT } = process.env

const app: Application = express()

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
})
server.applyMiddleware({ app, path: '/graphql' })

mongoose
    .connect(`mongodb://mongo:27017/projectdb`, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log('mongoose is up')

        app.listen({ port: 3001 }, () => {
            console.log(
                'Apollo Server is running on http://localhost:3001/graphql'
            )
        })
    })
    .catch((err) => console.log('ERROR:', err))
