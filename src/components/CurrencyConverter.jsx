import React, { useState,useEffect} from "react";
import { InputBox } from "./index";
import useCurrencyInfo from "/src/hooks/useCurrencyInfo";

function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  useEffect(() => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  }, [currencyInfo, amount, to]);
  const swap = () => {
    setFrom(to);
    setTo(from);
  };
  return (
    <>
      <div
        className="flex flex-wrap w-full h-screen bg-cover bg-no-repeat justify-center items-center"
        style={{ backgroundImage: `url(/src/assets/moneybg.webp)` }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label={from}
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectedCurrency={from}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  Swap
                </button>
              </div>
              <div className="w-full mb-1">
                <InputBox
                  label={to}
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectedCurrency={to}
                  amountDisabled
                />
                <button
                  type="submit"
                  className="w-full px-4 py-3 text-white bg-blue-600 rounded-lg"
                >
                  Convert
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrencyConverter;
