import React from "react";
import { NavLink } from "react-router-dom";
import Kiyimlar from "../kiyimlar.json";

export default function KiyimPost() {
 return Kiyimlar.map((kiyim) => {
    return (
      <div className="w-[280px] min-h-[540px] flex justify-between items-center flex-col text-center shadow-lg shadow-[#EEA73D] rounded-lg overflow-hidden p-2">
        <img src={kiyim.image} className="w-[270px] rounded-lg" alt="" />
        <h3 className="text-[#EEA73D] py-2">{kiyim.text}</h3>
        <h2 className="text-[#EEA73D] text-lg">{kiyim.price}</h2>
      </div>
    );
  });
}
