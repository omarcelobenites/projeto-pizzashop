import { Helmet} from 'react-helmet-async'
import { MonthOrdersAmountCard } from './month-orders-amount-cards'
import { MonthRevenueCard } from './month-revenue-card'
import { DayOrdersAmountCard } from './day-orders-amount-card'
import { MonthCanceledOrdersAmountCard } from './mounth-canceled-orders-amount'
import { RevinewChat } from './revenew-chart'
import { PopularProductsChart } from './popular-products-chart'

export function Dashboard(){
  return <>
    <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tighter">Dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>
        <div className='grid grid-cols-9 gap-4'>
           <RevinewChat />
           <PopularProductsChart />
        </div>
      </div>
    
    </>
    
}