import React from "react";
import { catalogueData } from "../../mockData/mockData.js";
import CatalogueCard from "../UI/CatalogueCard.js";
import userIcon from "../../assets/userIcon.svg";

const Catalogue = () => {
  return (
    <div>
      <div className=" pt-8 px-4 mb-6 flex justify-between">
        <h1 className="text-[41px] text-white font-[700]">Catalogue</h1>
        <img className="mr-3 mt-3" src={userIcon} alt="" />
      </div>

      {catalogueData.map((item, index) => (
        <CatalogueCard key={index} data={item} />
      ))}
    </div>
  );
};

export default Catalogue;
