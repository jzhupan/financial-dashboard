'use client'
import AppBar from "./Global/AppBar"
import RealTimeStockPrices from "./Global/RealTimeStockPrices"

import PageLayout from "./Global/PageLayout"




export default function Home() {
  return (
    <>
    <AppBar/>
    <RealTimeStockPrices />
    <PageLayout />
    </>
  )
}
