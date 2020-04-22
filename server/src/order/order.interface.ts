import { Document } from 'mongoose';
import {IStock} from '../stock/stock.interface'
import {IUser} from '../user/user.interface'
import {IBoughtStock} from '../bought_stock/bought_stock.interface'

interface IOrder extends Document {
    user: IUser["_id"] | IUser
    price: number
}

export interface IBuyOrder extends IOrder {
    stock: IStock["_id"] | IStock
}

export interface ISellOrder extends IOrder {
    boughtStock: IBoughtStock["_id"] | IBoughtStock
}
