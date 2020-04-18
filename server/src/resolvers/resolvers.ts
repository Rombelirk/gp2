import { IResolvers, IFieldResolver, IResolverObject } from 'apollo-server-express';
import User from '../models/User'


const meResolver:IFieldResolver<any, any, any> = (a,b,c) => {
    return {username: "Vasya"}
}

const signupResolver:IFieldResolver<any,any,{url: string}> = (a,args,c) => {
    console.log(a,args.url,c)
    const user = new User({login: args.url})
    return user.save().then(res => {
        console.log(res)
        return res.login
    })
    
}

const Query:IResolverObject = {
    me: meResolver
}

const Mutation:IResolverObject = {
    signup: signupResolver
}

const resolvers:IResolvers = {
    Query,
    Mutation
}

export default resolvers