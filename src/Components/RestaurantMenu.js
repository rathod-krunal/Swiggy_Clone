import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Menu_List } from "../DataBase/Db";
import { AiFillStar } from "react-icons/ai";
import { BsCurrencyRupee } from "react-icons/bs";
import { MdTimelapse } from "react-icons/md";
function RestaurantMenu() {
  const { resId } = useParams();
  const matchingItem = Menu_List.find((item) => item.id === resId);

  const [menuData, setMenuData] = useState([]);
  useEffect(() => {
    setMenuData(Menu_List);
  }, []);
  if (menuData.length === 0) return <h1> Loading</h1>;

  const {
    TopPicks,
    areaName,
    avgRating,
    costForTwo,
    cuisines,
    deliveryTime,
    enrichedText,
    name,
    totalRatings,
    offers,
  } = matchingItem;
  console.log(TopPicks);
  return (
    <div className="RestroMenuDiv">
      <div className="MainNameDiv">
        <div className="NameCuisDiv">
          <p> {name} </p>
          <p> {cuisines.join(" , ")} </p>
          <p> {areaName} </p>
        </div>
        <div className="RatingDiv">
          <p>
            <AiFillStar /> {avgRating}{" "}
          </p>
          <div className="hr"></div>
          <p> {totalRatings} </p>
        </div>
      </div>
      <div className="delchr">
        <span>{enrichedText}</span>
      </div>
      <div className="hr"></div>

      <div className="MenuPriceDiv">
        <div className="time">
          <MdTimelapse />
          <span> {deliveryTime}MINS </span>
        </div>
        <div className="prc">
          <BsCurrencyRupee />
          <span> {costForTwo / 100}For Two </span>
        </div>
      </div>
      <div className="OffersDiv">
        {offers.map((offer) => {
          return (
            <div className="OffersInnerDiv">
              <div className="OffersHead">
                {" "}
                <span>{offer.header}</span>{" "}
              </div>
              <div className="Bottom">
                {" "}
                <span> {offer.couponCode}</span> <div className="vr"></div>{" "}
                <span>{offer.description}</span>{" "}
              </div>
            </div>
          );
        })}
      </div>
      <div className="hr"></div>
      <div className="TopPick">
        <div className="TopInner"> {TopPicks.title} </div>
        <div className="TopImgDiv">
          {TopPicks.TopPicksImg.map((topImg) => {
            return (
              <div className="topImgMapDiv">
                <img src={topImg.image} alt="" />
                <button> Add </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RestaurantMenu;
