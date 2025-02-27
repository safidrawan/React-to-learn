import React,{useState} from "react";
import {InputBox} from "./index";
import useCurrencyInfo from '/src/hooks/useCurrencyInfo'


function CurrencyConverter() {

  const [amount , setAmount] = useState(0)
  const [from , setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  return (
    <>
      <div
        className="flex flex-wrap w-full h-screen bg-cover bg-no-repeat justify-center items-center"
        style={{ backgroundImage: `url(/src/assets/moneybg.webp)` }}
      >
        <InputBox />
      </div>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form onSubmit={(e)=>{
          e.preventDefault

        }}></form>

        <div className="w-full mb-1">
          <InputBox
          label={from}
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(currency)=>setFrom(currency)}
          onAmountChange={(amount)=>setAmount(amount)}
          selectedCurrency={from}
          
          />
        </div>
        <div className="relative w-full h-0.5">
          <button className="absolute">Swap</button>
        </div>
        
        </div>
      </div>
    </>
  );
}

export default CurrencyConverter;
