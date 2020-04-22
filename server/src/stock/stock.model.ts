import { Schema, model } from 'mongoose'
import { IStock } from './stock.interface'

export const StockSchema: Schema = new Schema({
    ticker: String,
    name: String,
    description: String,
    price: Number,
    priceChanges: [
        {
            time: Date,
            value: Number
        }
    ]
})

const Stock = model<IStock>('Stock', StockSchema)

export default Stock
