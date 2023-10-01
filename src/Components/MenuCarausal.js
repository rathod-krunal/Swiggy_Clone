import React from 'react'
import {BiRupee} from "react-icons/bi"
import { useDispatch } from 'react-redux';
import {ADD} from "../redux/actions/action";
function MenuCarausal(props) {
    const dispatch = useDispatch();
    const {CarausalData} = props;


    const Add_Data = (item) =>{
        dispatch(ADD(item))
    }
    return (
        <div className="CarausalMap">
            {CarausalData.map((Cd)=>{
                return(
                    <div key={Cd.id} className="cdContainer">
                        <div className="LeftDiv">
                            <p> {Cd.name} </p>
                            <p> <BiRupee/> {Cd.price/100} </p>
                            <p> {Cd.description} </p>

                        </div>
                        <div className="RightDiv">
                            <img src={Cd.image} alt=""/>
                            <button onClick={()=> Add_Data(Cd) }>Add</button>
                        </div>
                    </div>
                )
            })}
        </div>

      );
}

export default MenuCarausal
