import React from "react";
import TradingViewWidget from "react-tradingview-widget";
import "./StockItem.css";

function StockItem({ stock }) {
  return (
    <div className="stock-card">
      <h2 className="stock-symbol">{stock.symbol}</h2>
      <p className="stock-price">Price: ${stock.price}</p>
      <div className="stock-chart">
        <TradingViewWidget symbol={stock.symbol} autosize />
      </div>
    </div>
  );
}

export default StockItem;
