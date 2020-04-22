import { IFieldResolver } from 'apollo-server-express'
import { IBuyOrder } from './order.interface'
import { BuyOrder } from './order.model'

interface ICreateBuyOrderArgs {
    input: {
        stockId: string
        price: number
    }
}

export const createBuyOrder: IFieldResolver<
    null,
    null,
    ICreateBuyOrderArgs
> = async (source, { input }, context): Promise<IBuyOrder> => {
    const { price, stockId } = input
    const order = new BuyOrder({ stock: stockId, price })
    await order.save()
    console.log(order)
    return order
}

export const getBuyOrders: IFieldResolver<null, null, null> = async (): Promise<
    IBuyOrder[]
> => {
    return await BuyOrder.find({})
}
