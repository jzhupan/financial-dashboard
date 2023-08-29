'use client'
import AppBar from "./Global/AppBar"
import Container from '@mui/material/Container'
import SideBarStocks from "./Global/SideBarStocks"
import NewsSection from "./Global/NewsSection"

export default function Home() {
  return (
    <>
    <AppBar/>
    <Container>
      <NewsSection />

    </Container>
    
    </>
  )
}
