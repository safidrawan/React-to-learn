import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data,setDate] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdeliver.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then(res=> res.join())
        .then(res=> setDate(res[currency]))
    },[currency])
    console.log(data)
    return data;
}
export default useCurrencyInfo