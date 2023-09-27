import React, { useState } from "react";
import { Carausals } from "../DataBase/Db";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
function Carausls() {
  const [carausalImg, setCarausalImg] = useState(Carausals);
  return (
    <div className="CarausalDiv">
      <div className="carausalTitleDiv">
        <h2>Best offers for you</h2>
        <div className="carausalBtns">
          <AiOutlineLeft />
          <AiOutlineRight />
        </div>
      </div>

      <div className="carausalMapDiv">
        {carausalImg.map((CarausalsImage) => {
          return (
            <div className="CarausalImgDiv">
              <img src={CarausalsImage} alt="" srcset="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Carausls;
