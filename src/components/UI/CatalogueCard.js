import React from "react";
import Ellipse from "../../assets/Ellipse.svg";


const CatalogueCard = (props) => {
  const { data } = props;
  console.log(data);

  return (
    <div>
      <div className="flex gap-8 border-b-[1px] border-[#303D63] p-4">
        <div className="relative">
          <img src={Ellipse} alt="" />
          <img className="absolute -mt-9 ml-[1.1rem]" src={data.icon} alt="" />
        </div>
        <div className="flex-col w-[150px] -ml-6 mt-1 mr-8">
          <h1 className="text-[16px] font-500 tracking-[0.30px] font-[500] text-white">
            {data.type}
          </h1>
          <span className="text-[#94A3D3] font-[500] text-[14px] tracking-[0.30px]">
            The debt is{" "}
          </span>
          <span className="text-[#94A3D3] font-[700] text-[14px] tracking-[0.30px]">
            {data.debt}
          </span>
        </div>
        <button className="text-[#7295FB] text-[16px] font-[500] border border-[#7295FB66] px-6 rounded-xl">
          Pay
        </button>
      </div>
    </div>
  );
};

export default CatalogueCard;
