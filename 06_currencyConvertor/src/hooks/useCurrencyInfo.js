// import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {
//   const [data, setData] = useState({ usd: 1 });

//   useEffect(() => {

//     fetch(
//       `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`
//     )
//       .then((res) => res.json())
//       .then((res) => setData(res[currency]));
//     //console.log(data);
//     console.table(data);
//   }, [currency]);
//   console.log(data);
//   return data;
// }

// export default useCurrencyInfo;

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`
    )
      .then((res) => res.json())
      .then((res) => {
        // Set the data for the selected currency (e.g., INR)
        setData({ inr: res.usd.inr });
      })
      .catch((error) => {
        console.error("Error fetching currency data:", error);
        setData({ error: "Failed to fetch data" });
      });

    console.table(data);
  }, [currency]);

  //console.log(data);
  return data;
}

export default useCurrencyInfo;
