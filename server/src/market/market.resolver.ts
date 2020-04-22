import { IFieldResolver } from 'apollo-server-express'
import { MarketService } from './market.service'

enum TimeFrame {
    minute,
    hour,
    day
}

interface IGetMarketInfoArgs {
    timeFrame: TimeFrame;
}

export const getMarketInfo: IFieldResolver<null, null, IGetMarketInfoArgs> =  (
    source,
    { timeFrame },
    context
):string => {
   return "null"
}
