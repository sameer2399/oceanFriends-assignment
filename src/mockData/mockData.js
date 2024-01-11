import mobileIcon from "../assets/mobileIcon.svg";
import wifiIcon2 from "../assets/wifiIcon2.svg";
import carIcon from "../assets/carIcon.svg";
import houseIcon from "../assets/houseIcon.svg";
import flashIcon from "../assets/flashIcon.svg";


export const cardData = [
  {
    type: "CB",
    title: "Universal Bank",
    number: "5489 7452 5726 9827",
    expiry: "04/24",
    colorFrom: "from-[#1B5CF6]",
    colorVia: "via-[#429EFF]",
    colorTo: "to-[#CB5BAA]",
    balance: "$2,748.00",
  },
  {
    type: "CB",
    title: "Universal Bank",
    number: "5489 7452 5726 9827",
    expiry: "04/24",
    colorFrom: "from-[#F3AC6E]",
    colorVia: "via-[#EC6531]",
    colorTo: "to-[#ED6F2F]",
    balance: "$2,748.00",
  }, 
];

export const catalogueData = [

  {
    type: "Mobile",
    debt: "$34.00",
    icon: mobileIcon ,
  },
  {
    type: "Internet and TV",
    debt: "$21.00",
    icon: wifiIcon2,
  },
  {
    type: "Traffic fines",
    debt: "$1221.00",
    icon: carIcon ,
  },
  {
    type: "Housing services",
    debt: "$0.00",
    icon: houseIcon ,
  },
  {
    type: "Utility payment",
    debt: "$442.00",
    icon: flashIcon ,
  },
];
