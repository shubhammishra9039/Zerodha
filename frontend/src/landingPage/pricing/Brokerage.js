import React from "react";

function Brokreje() {
  return (
    <>
      <div className="container">
        <div className="row p-5 mt-5 text-center">
          <h3>
            <a href="#">Calculate your costs upfront</a> using our brokerage
            calculator
          </h3>
          <div className="col-8 p-4">
            <h3 className="fs-5">Charges explained</h3>
            <p className="text-muted mt-4">
              Securities/Commodities transaction tax
            </p>
            <p className="text-muted mt-4 fs-7">
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.
            </p>
          </div>
          <div className="col-5 p-4">
            <h3></h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brokreje;
