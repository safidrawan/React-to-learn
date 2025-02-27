import React from "react";
import InputBox from "./InputBox";

function CurrencyConverter() {
  return (
    <div className="flex flex-wrap w-full h-screen bg-cover bg-no-repeat justify-center items-center" style={{backgroundImage:`url(/src/assets/moneybg.webp)`}}>
      <InputBox />
    </div>
  );
}

export default CurrencyConverter;
