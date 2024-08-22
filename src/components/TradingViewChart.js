import React, { useEffect } from "react";

const TradingViewChart = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        width: 980,
        height: 610,
        symbol: "NASDAQ:AAPL",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "light",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        withdateranges: true,
        range: "YTD",
        hide_side_toolbar: false,
        allow_symbol_change: true,
        details: true,
        hotlist: true,
        calendar: true,
        news: ["headlines"],
        container_id: "tradingview_chart",
      });
    };
    document.getElementById("tradingview_chart").appendChild(script);
  }, []);

  return <div id="tradingview_chart">{}</div>;
};

export default TradingViewChart;
