import React from "react";
import { useSelector } from "react-redux";

function CartPage() {
  const GetData = useSelector((state) => state.CartReducer.Cart);

  return (
    <div className="CartOuterDiv">
      <div className="CartDiv">
        {GetData.map((get) => {
          return (
            <div key={get.id} className="CartInnerDiv">
              <div className="CartInnerLeft">
                <div className="CartLeft">
                  <div className="CartName">
                    <span> Name : {get.name} </span>
                  </div>
                  <div className="CartDesc">
                    <span> Description : {get.description} </span>
                  </div>
                  <div className="CartPrice">
                    <span> Price : {get.price / 100} </span>
                  </div>
                  <div className="CartQnty">
                    <span>
                      {" "}
                      Quantity :{" "}
                      <div className="qntyDiv">
                        {" "}
                        <button> - </button> {get.inStock} <button> + </button>
                      </div>{" "}
                    </span>
                  </div>
                </div>
                <div className="CartRight">
                  {" "}
                  <img src={get.image} alt="" />{" "}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="CartInnerRight">
        <span> pricediv </span>
      </div>
    </div>
  );
}

export default CartPage;
