import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((response) => {
        setCoins(response);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1> The Coins! </h1>
      {loading ? <strong> Loading... </strong> : null}
      <ul>
        {coins.map((coin, index) => (
          <li>
            {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
