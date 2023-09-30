import React from 'react'
import {BiRupee} from "react-icons/bi"
function MenuCarausal(props) {
    const {CarausalData} = props;
    console.log(CarausalData)
    return (
        <div className="CarausalMap">
            {CarausalData.map((Cd)=>{
                return(
                    <div className="cdContainer">
                        <div className="LeftDiv">
                            <p> {Cd.name} </p>
                            <p> <BiRupee/> {Cd.price/100} </p>
                            <p> {Cd.description} </p>

                        </div>
                        <div className="RightDiv">
                            <img src={Cd.image} alt="" srcset="" />
                            <button>Add</button>
                        </div>
                    </div>
                )
            })}
        </div>

      );
}

export default MenuCarausal
