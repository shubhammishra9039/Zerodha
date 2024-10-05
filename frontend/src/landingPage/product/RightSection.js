import React from 'react'

function RightSection({
  imageURL,
  productName,
  productDescrption,
  learnMore,
}) {
  return (
    <>
     <div className="container">
        <div className="row mt-5">
        <div className="col-5 p-3 mt-5">
            <h1>{productName}</h1>
            <p>{productDescrption}</p>
            <div className="mt-4">
           
            <a href={learnMore} style={{textDecoration:"none"}}>learn More</a>
            </div>
            
          </div>
          <div className="col-2">

          </div>
         
          <div className="col-5 p-2">
            <img src={imageURL} />
          </div>
        </div>
      </div>
    </>
  )
}

export default RightSection