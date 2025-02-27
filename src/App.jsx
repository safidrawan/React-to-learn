import React, { useState } from 'react'
import Card from './components/Card'
import BgChanger from './components/BgChanger'
import PassGenerator from './components/PassGenerator'
import CurrencyConverter from './components/CurrencyConverter'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {

  // Currency Converter related codes

  const [amount , setAmount] = useState(0)
  const [from , setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
    <>
    <CurrencyConverter />
    </>
  )
}

export default App