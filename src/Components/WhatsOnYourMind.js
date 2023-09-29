import React,{useState,useEffect} from 'react'
import { What_On_YourMind } from '../DataBase/Db';
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";


function WhatsOnYourMind() {
    const [WhatOnMindImg, setWhatOnMindImg] = useState([]);

    useEffect(() => {
        setWhatOnMindImg(What_On_YourMind);
    }, []);
  
    if (WhatOnMindImg.length === 0) return <h1>Loading</h1>
  
    return (
      <div className="WhatsOnMindDiv">
        <div className="WhatOnMindTitleDiv">
          <h2>What's on your mind?</h2>
          <div className="WhatOnMindBtn">
            <AiOutlineLeft />
            <AiOutlineRight />
          </div>
        </div>
        <div className="WhatOnMindMap">
          {WhatOnMindImg.map((WhatOnMindImg) => {
            return (
              <div className="WhatOnMindImg">
                <img src={WhatOnMindImg} alt="" srcset="" />
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default WhatsOnYourMind
