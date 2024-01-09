import React from "react";
import wifiIcon from "../../assets/wifiIcon.svg";
import masterCardIcon from "../../assets/masterCardIcon.svg";
const Card = (props) => {
  const { data } = props;

  return (
    <div
      className={`h-[380px] min-w-[240px] bg-gradient-to-br ${data.colorFrom} ${data.colorVia} ${data.colorTo} rounded-2xl`}
    >
      <div className="-rotate-90 flex-col h-[240px] w-[350px] -ml-14 mt-14 pt-3">
        <div className="mb-[18px]">
          <h1 className="inline-block font-[900] text-[28px] tracking-[2.37px] break-words text-[#FFFFFF] leading-8 mr-[14.69px]">
            {data.type}
          </h1>
          <span className="text-[#FFFFFF99]/[0.60] text-[20px] font-[500] leading-8 break-words mr-[14.69px]">
            {" "}
            |{" "}
          </span>{" "}
          <span className="text-[#FFFFFF99] text-[14px] font-[500] leading-8 break-words">
            {" "}
            {data.title}
          </span>
        </div>

        <div className="flex justify-between mb-[18px]">
          <div className="w-[55px] h-[45px] bg-[#FFFFFF4D] rounded-[10px]"></div>
          <img className="rotate-90 mr-6" src={wifiIcon} alt="" />
        </div>

        <h1 className="mb-[14px] text-white font-[900] text-[22px] tracking-[0.22px] break-words">
          {data.number}
        </h1>

        <div className="flex justify-between">
          <h3 className="font-[400] text-[14px] tracking-[0.14px] break-words text-[#FFFFFF99]">
            {data.expiry}
          </h3>
          <img className="rotate-90 mr-6 -mt-2" src={masterCardIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
