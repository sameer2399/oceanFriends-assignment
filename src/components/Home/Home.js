import React from "react";
import Card from "../UI/Card";
import { cardData } from "../../mockData/mockData";
import userIcon from "../../assets/userIcon.svg";

const Home = () => {
  return (
    <div>
      <div className="flex justify-between p-4 w-[385px] pt-2">
        <div className="mt-0">
          <h1 className="text-[26px] font-[700] tracking-[0.37px] text-white">
            Bank
          </h1>
          <h1 className="text-[26px] font-[700] tracking-[0.37px] text-white">
            Cards
          </h1>
          <h1 className="text-[16px] font-[700] tracking-[0.30px] text-[#94A3D3]">
            Balance
          </h1>
          <h1 className="text-[26px] font-[700] tracking-[0.37px] text-white">
            {cardData[0].balance}
          </h1>
        </div>

        <img className="h-[36px] w-[36px] mt-4" src={userIcon} alt="" />
      </div>
      <div className="-mt-1">
        <div className=" pl-[14px] flex gap-4 overflow-x-auto overflow-y-hidden">
          {cardData.map((data, index) => (
            <Card data={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
