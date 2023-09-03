'use client'
import AppBar from "./Global/AppBar"
import SearchedStockPage from "./Global/Components/SearchedStockPage"
import Marquee from "./Global/Marquee"
import PageLayout from "./Global/PageLayout"


export default function Home() {
  return (
    <>
    <AppBar/>
    <Marquee />
    {/* <SearchedStockPage /> */}
    <PageLayout />

    </>
  )
}
