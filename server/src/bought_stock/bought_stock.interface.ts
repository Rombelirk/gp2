import { Document } from 'mongoose';
import {IStock} from '../stock/stock.interface'
import {IUser} from '../user/user.interface'


export interface IBoughtStock extends Document {
    stock: IStock["_id"] | IStock
    user: IUser["_id"] | IUser
    purchase_price: number
}
