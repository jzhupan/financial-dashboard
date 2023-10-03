'use client'
import ResponsiveAppBar from "./Global/AppBar"
import RealTimeStockPrices from "./Global/Marquee"
import PageLayout from "./Global/PageLayout"
import handleSubmit from './Global/handles/handleSubmit';
import { useRef } from 'react';



export default function Home() {

  const dataRef = useRef()
 
  const submitHandler = (e) => {
    e.preventDefault()
    handleSubmit(dataRef.current.value)
    dataRef.current.value = ""
  }


  return (
  <>
  <ResponsiveAppBar />
  <RealTimeStockPrices />
  <PageLayout />
    </>
  )
}
