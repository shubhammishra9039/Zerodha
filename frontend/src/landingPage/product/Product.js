import React from "react";
import Hero from "../product/Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Univers";
function Product() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="imdia\Image\kite.png"
        productName="Kite"
        productDescrption="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="imdia\Image\console.png"
        productName="Console"
        productDescrption="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      />
      <LeftSection
        imageURL="imdia\Image\coin.png"
        productName="Coin"
        productDescrption="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="imdia\Image\kiteconnect.png"
        productName="Kite Connect API"
        productDescrption="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
      />
      <LeftSection
        imageURL="imdia\Image\varsity.png"
        productName="Versity Mobile"
        productDescrption="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
     <p className="text-center fs-5 mb-7 p-4">Want to know more about our technology stack? Check out the <a href="#"> Zerodha.tech</a>  blog.</p>
     <Universe/>
    </>
  );
}

export default Product;
