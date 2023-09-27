import React from "react";
import NavLogo from "../Utils/swiggy-1.svg";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { CiDiscount1 } from "react-icons/ci";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import {BsBag} from "react-icons/bs"

function Navbar() {
  return (
    <div className="Navbar">
      <div className="leftNav">
        <div className="logoDiv">
          <img src={NavLogo} alt="" />
        </div>
        <div className="NavTitle">
          <span>Other</span>
          <span>Ahemdabad,Gujrat,India</span>
          <AiOutlineDown />
        </div>
      </div>
      <div className="RighNav">
        <div className="NavSearch">
          <AiOutlineSearch />
          <span>Search</span>
        </div>
        <div className="NavOffers">
          <CiDiscount1 />
          <span>Offers</span> <span> NEW </span>
        </div>
        <div className="NavHelp">
          <IoHelpBuoyOutline />
          <span>Help</span>
        </div>
        <div className="NavSignIn">
          <CiUser />
          <span>Sign in</span>
        </div>
        <div className="NavCart">
            <BsBag/>
            <span>Cart</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
