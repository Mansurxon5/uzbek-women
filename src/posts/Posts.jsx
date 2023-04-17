import React from "react";
import ayollar from "../ayollar.json";
import { NavLink } from "react-router-dom";

export default function Posts() {
  return ayollar.map((ayol) => {
    return (
      <div key={ayol.id} className="header-page flex justify-center items-center w-full md:w-[49.2%] min-h-[90vh] bg-black relative overflow-hidden rounded-lg">
        <img
          src={ayol.image}
          alt=""
          className="rounded-lg h-full object-cover"
        />
        <div className="absolute top-0 z-30 left-0 w-full min-h-full bg-black/60 flex justify-between py-[100px] items-center flex-col gap-4 px-8 text-center">
          <h2 className="text-[#EEA73D] text-4xl font-bold font-[s] text-center title">
            {ayol.name}
          </h2>
          <p className="text-lg text-white">
            {ayol.text}
          </p>
          <NavLink to={'/huquq'} className="bg-[#EEA73D] py-2 px-4 rounded-xl cursor-pointer">
            Ko'proq ko'rish
          </NavLink>
        </div>
      </div>
          
    );
  });
}
