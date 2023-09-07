'use client'
import ResponsiveAppBar from "./Global/AppBar"
import RealTimeStockPrices from "./Global/Marquee"
import PageLayout from "./Global/PageLayout"
//import LiveSearch from "./Global/Components/LiveSearch"


export default function Home() {
  return (
    <>
  {/* <LiveSearch /> */}
  <ResponsiveAppBar />
  <RealTimeStockPrices />
  <PageLayout />
    </>
  )
}
