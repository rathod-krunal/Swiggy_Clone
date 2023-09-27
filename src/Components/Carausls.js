import React, { useEffect, useState } from "react";
import { Carausals } from "../DataBase/Db";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
function Carausls() {
  const [carausalImg, setCarausalImg] = useState([]);

  useEffect(() => {
    setCarausalImg(Carausals);
  }, []);

  if (carausalImg.length === 0) return <h1>Loading</h1>

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
          console.log(CarausalsImage.id)
          return (
            <div key={carausalImg.id} className="CarausalImgDiv">
              <img src={CarausalsImage.CarausalImg} alt="" srcset="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Carausls;
