import { Document } from 'mongoose'
import { IStock } from '../stock/stock.interface'

export interface IUser extends Document {
    login: string
    password: string
    portfolio: {
        stocks: {
            stock: IStock,
            purchasePrice: number
        }
    }
}
