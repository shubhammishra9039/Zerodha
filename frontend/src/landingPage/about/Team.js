import React from "react";

function Team() {
  return (
    <>
      <div className=" container">
        <div className="row p-5 mb-4 border-top">
          <h1 className="mt-5 text-center ">People</h1>
        </div>
        <div className="row p-4 text-muted fs-6" style={{ lineHeight: "1.8" }}>
          <div className="col-6 p-5">
            <img
              src="imdia\Image\Shubham.jpg"
              style={{ width: "60%", borderRadius: "60%" }}
            />
            <div className="mt-3 ">
              <h4 className=" m-lg-4 ">Shubham Mishra</h4>
              <h6 className=" m-lg-5 text-muted  ">Web Developer</h6>
            </div>
          </div>
          <div className="col-6 p-5">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p>
              Connect on{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                Homepage
              </a>{" "}
              /{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                TradingQnA{" "}
              </a>
              /{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
