import { Document } from 'mongoose'

interface priceChange {
    date: Date
    price: number
}

export interface IStock extends Document {
    ticker: string;
    name: string;
    description: string;
    price: number;
    priceChanges: priceChange[]
}
