import { Schema, model } from 'mongoose'
import { IBoughtStock } from './bought_stock.interface'

export const BoughtStockSchema: Schema = new Schema({
    stock: {type: Schema.Types.ObjectId, ref: 'Stock'},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    purchase_price: Number
})

const BoughtStock = model<IBoughtStock>('BoughtStock', BoughtStockSchema)

export default BoughtStock
