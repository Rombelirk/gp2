import express, { Application } from 'express'
import mongoose from 'mongoose'
import server from './apollo/apollo.module'


const { DBHOST } = process.env

const app: Application = express()

server.applyMiddleware({ app, path: '/' })

mongoose
    .connect(`mongodb://${DBHOST}:27017/projectdb`, {
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
