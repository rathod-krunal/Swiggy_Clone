import React from "react";
import Carausls from "./Carausls";
import WhatsOnYourMind from "./WhatsOnYourMind";
import TopRestro from "./TopRestro";
import OnlineDelRestro from "./OnlineDelRestro";

function Body() {
  return (
    <div className="Body">
      <Carausls />
      <WhatsOnYourMind/>
      <div className="hr"></div>
      <TopRestro/>
      <div className="hr"></div>
      <OnlineDelRestro/>
      <div className="ShowMore">
      <button class="button-17" role="button">Show More</button>
      </div>
    </div>
  );
}

export default Body;
