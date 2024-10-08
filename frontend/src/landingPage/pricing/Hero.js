import React from "react";

function Hero() {
  return (
    <>
      <div className="container">
        <div className="row p-5 mt-5 border-bottom text-center">
          <h1 className="">Charges</h1>
          <p className="fs-6 text-muted">List of all charges and taxes</p>
        </div>
        <div className="row p-5 mt-5 text-center">
          <div className="col-4 p-5">
            <img src="imdia\Image\pricingEquity.svg" />
            <h1>Free equity delivery</h1>
            <p className="text-muted mt-4">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4 p-5">
            <img src="imdia\Image\intradayTrades.svg" />
            <h1>Intraday and F&O trades</h1>
            <p className="text-muted mt-4">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4 p-5">
            <img src="imdia\Image\pricingMF.svg" />
            <h1>Free direct MF</h1>
            <p className="text-muted mt-4">
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
