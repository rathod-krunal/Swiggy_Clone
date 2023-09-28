import React from "react";
import { Best_Places_To_Eat_Across_Cities } from "../DataBase/Db";
import { Best_Cuisines_Near_Me } from "../DataBase/Db";
import { Explore_Every_Restaurant_Near_Me } from "../DataBase/Db";
import BestCard from "./BestCard";
function NearMe() {
  return (
    <div>
      <div className="bestPlaces">
        <h2>Best Places to Eat Across Cities</h2>
        <div className="bestPlacesMap">
          {Best_Places_To_Eat_Across_Cities.map((bestPlace) => {
            return <BestCard key={bestPlace.id} BestCardData={bestPlace} />;
          })}
        </div>
      </div>
      <div className="bestPlaces">
        <h2>Best Cuisines Near Me</h2>
        <div className="bestPlacesMap">
          {Best_Cuisines_Near_Me.map((bestPlace) => {
            return <BestCard key={bestPlace.id} BestCardData={bestPlace} />;
          })}
        </div>
      </div>
      <div className="bestPlaces">
        <h2>Explore Every Restaurants Near Me</h2>
        <div className="bestPlacesMap explore">
          {Explore_Every_Restaurant_Near_Me.map((bestPlace) => {
            return <BestCard key={bestPlace.id} BestCardData={bestPlace} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default NearMe;
