import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import StockItem from "./components/StockItem";
import "./App.css";

const socket = io("https://stockmarket-backend-1.onrender.com/");

function App() {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    socket.on("stockData", (data) => {
      setStockData(data);
    });

    return () => {
      socket.off("stockData");
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Stock Market App</h1>
        {stockData.map((stock) => (
          <StockItem key={stock.symbol} stock={stock} />
        ))}
      </header>
    </div>
  );
}

export default App;
