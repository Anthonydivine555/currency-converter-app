import {Header} from './Header'
import {LiveMarketTicker} from '../markets/LiveMarketTicker'
import {ConverterSection} from '../converter/ConverterSection'
import {TabNavigation} from '../tabs/TabNavigation'

export function MainLayout() {
  return (
    <div className='h-screen'>
      <Header/>
      <LiveMarketTicker />
      <main className='max-w-6xl w-[90%] mx-auto py-[48px]'>
        <ConverterSection/>
        <TabNavigation/>
      </main>
    </div>
  )
}

