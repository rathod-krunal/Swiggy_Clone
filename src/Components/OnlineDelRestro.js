import React, { useEffect, useState } from "react";
import { Restaurants_With_Online_FoodDelivery } from "../DataBase/Db";
import {LuSettings2} from "react-icons/lu"
import { AiOutlineDown } from "react-icons/ai";
import ProductCards from "./ProductCards";

function OnlineDelRestro() {
  const [onlineRestro, setOnlineRestro] = useState([]);

  useEffect(() => {
    setOnlineRestro(Restaurants_With_Online_FoodDelivery);
  }, []);
  return (
    <div className="TopRestroDiv online">
      <div className="TopRestroTitleDiv">
        <h2>Restaurants with online food delivery in Ahmedabad</h2>
      </div>
      <div className="OnlineRestroFilterDiv">
        <span>Filter <LuSettings2/> </span>
        <span>Sort By <AiOutlineDown/></span>
        <span> Fast Delivery</span>
        <span>New On Swiggy</span>
        <span>Rating 4.0+</span>
        <span> Pure Veg</span>
        <span>Offers</span>
        <span>Rs.300-Rs.600</span>
        <span>Less Than Rs.300</span>
      </div>

      <div className="TopRestroMap OnlineRestro">
        {onlineRestro.map((onlineRestro) => {
          return <ProductCards ResData={onlineRestro} />;
        })}
      </div>
    </div>
  );
}

export default OnlineDelRestro;
