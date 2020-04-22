import { IFieldResolver } from 'apollo-server-express'
import User from './user.model'
import { IUser } from './user.interface'

interface IGetUserArgs {
    login: string
}

// export const getUserByLogin: IFieldResolver<null, null, IGetUserArgs> = async (
//     source,
//     { login },
//     context
// ): Promise<IUser[]> => {
//     return await User.find({ login })
// }
