'use client'
import ResponsiveAppBar from "./Global/AppBar"
import RealTimeStockPrices from "./Global/Marquee"
import PageLayout from "./Global/PageLayout"




export default function Home() {

  return (
  <>
  <ResponsiveAppBar />
  <RealTimeStockPrices />
  <PageLayout />
    </>
  )
}
