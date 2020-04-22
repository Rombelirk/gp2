import { Schema, model } from 'mongoose'
import { IBuyOrder, ISellOrder } from './order.interface'

const BuyOrderSchema: Schema = new Schema({
    stock: { type: Schema.Types.ObjectId, ref: 'Stock' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    price: Number,
})

export const BuyOrder = model<IBuyOrder>('BuyOrder', BuyOrderSchema)

const SellOrderSchema: Schema = new Schema({
    boughtStock: { type: Schema.Types.ObjectId, ref: 'BoughtStock' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    price: Number,
})

export const SellOrder = model<ISellOrder>('SellOrder', SellOrderSchema)


