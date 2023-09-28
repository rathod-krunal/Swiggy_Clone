import React from "react";
import Carausls from "./Carausls";
import WhatsOnYourMind from "./WhatsOnYourMind";
import TopRestro from "./TopRestro";
import OnlineDelRestro from "./OnlineDelRestro";
import NearMe from "./NearMe";
import Footer from "./Footer"

function Body() {
  return (
    <div className="Body">
      <Carausls />
      <WhatsOnYourMind />
      <div className="hr"></div>
      <TopRestro />
      <div className="hr"></div>
      <OnlineDelRestro />
      <div className="hr"></div>
      <NearMe/>
      <Footer/>
    </div>
  );
}

export default Body;
