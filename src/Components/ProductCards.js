import React from 'react'
import {AiFillStar} from "react-icons/ai"

function ProductCards(props) {
    const {ResData} = props
    const {image,name,avgRating,cuisines,areaName} = ResData
  return (
    <div className='ProductCard'>
      <div className="ProductImgDiv">
        <img src={image} alt="" />
      </div>
      <div className="productDetailsDiv">
        <div className="name"> {name}</div>
        <div className="ratings"> <AiFillStar/> {avgRating} </div>
        <div className="cuisines">  {cuisines.join(",")} </div>
        <div className="location"> {areaName} </div>
      </div>
    </div>
  )
}

export default ProductCards
