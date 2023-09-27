import React, { useEffect, useState } from 'react'
import { Top_Restro_Chain_In_Ahemdabad } from '../DataBase/Db'
import ProductCards from './ProductCards';
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
function TopRestro() {
    const [topRestro,setTopRestro]= useState([]);
    useEffect(()=>{
        setTopRestro(Top_Restro_Chain_In_Ahemdabad)
    },[])
    if (topRestro.length === 0) return <h1>Loading</h1>
  return (
    <div className="TopRestroDiv">
    <div className="TopRestroTitleDiv">
      <h2>Top restaurant chains in Ahmedabad</h2>
      <div className="TopRestroBtn">
        <AiOutlineLeft />
        <AiOutlineRight />
      </div>
    </div>
    <div className="TopRestroMap">
      {topRestro.map((topRestro) => {
        return (
         <ProductCards ResData={topRestro} />
        );
      })}
    </div>
  </div>
  )
}

export default TopRestro
