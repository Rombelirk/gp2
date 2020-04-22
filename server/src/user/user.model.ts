import { Schema, model, Document } from 'mongoose'
import { IUser } from './user.interface'

export const UserSchema: Schema = new Schema({
    login: String,
    password: String,
    portfolio: {
        stocks: [{ stock: 
            { type: Schema.Types.ObjectId, ref: 'Stock' },
            purchasePrice: Number
        }],
    },
})

const User = model<IUser>('User', UserSchema)

export default User
