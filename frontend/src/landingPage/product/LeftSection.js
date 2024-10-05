import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescrption,
  tryDemo,
  learnMore,
  googlePlay,
  appStore
}) {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-5 p-2">
            <img src={imageURL} />
          </div>
          <div className="col-2">

          </div>
          <div className="col-5 p-3 mt-5">
            <h1>{productName}</h1>
            <p>{productDescrption}</p>
            <div className="mt-4">
            <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo</a>
            <a href={learnMore} style={{marginLeft:"50px" ,textDecoration:"none"}}>learn More</a>
            </div>
            <div className="mt-4">
            <a href={googlePlay}><img src="imdia\Image\googlePlayBadge.svg"/></a>
            <a href={appStore} style={{marginLeft:"50px"}}><img src="imdia\Image\appstoreBadge.svg"/></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSection;
