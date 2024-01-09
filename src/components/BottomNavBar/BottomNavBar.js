import React from "react";
import HomeIcon from "../../assets/HomeIcon.svg";
import CatalogueIcon from "../../assets/CatalogueIcon.svg";
import HistoryIcon from "../../assets/HistoryIcon.svg";
import MenuIcon from "../../assets/MenuIcon.svg";
import { Link } from "react-router-dom";

const BottomNavBar = () => {
  return (
    <div className="bg-gradient-to-r from-[#131B31] to-[#2F395B] h-[118px] mt-[74vh] rounded-t-[40px] fixed w-[390px]">
      <div className="flex gap-8 mt-5 ml-8">
        <div>
          <Link to="/home">
            <img src={HomeIcon} alt="home" />
          </Link>
        </div>

        <div>
          <Link to="/catalogue">
            <img src={CatalogueIcon} alt="catalogue" />
          </Link>
        </div>

        <div>
          <Link to="/history">
            <img src={HistoryIcon} alt="history" />
          </Link>
        </div>

        <div>
          <img src={MenuIcon} alt="menu" />
        </div>
      </div>
    </div>
  );
};

export default BottomNavBar;
