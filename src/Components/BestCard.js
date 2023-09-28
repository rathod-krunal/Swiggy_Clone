import React from "react";

function BestCard(props) {
    const {BestCardData} = props
    const {name} = BestCardData
  return (
    <div className="BestCardDiv">
      <div className="BestCardInnerDiv">
        <span>{name}</span>
      </div>
    </div>
  );
}

export default BestCard;
