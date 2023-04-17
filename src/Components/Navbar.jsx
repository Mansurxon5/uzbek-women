import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../image/navbarImg/logo.png";


export default function Navbar() {
  
  return (
    <nav className="w-full min-h-[10vh] p-2 flex justify-between">
      <div className="logo w-[10%] flex items-center">
        <NavLink to={"/"}>
          <img src={logo} className="w-[80%]" alt="" />
        </NavLink>
      </div>
     
      <div className="menu flex w-[60%] gap-4 items-center justify-center text-[#EEA73D]">
        <NavLink
          to={"/huquq"}
          className="text-[#EEA73D] relative content-none before:absolute before:w-0 before:h-[1.5px] before:bg-[#EEA73D] before:left-0 before:top-full hover:before:w-[80%] before:duration-500"
        >
          Huquq
        </NavLink>
        <NavLink
          to={"/psixologiya"}
          className="text-[#EEA73D] relative content-none before:absolute before:w-0 before:h-[1.5px] before:bg-[#EEA73D] before:left-0 before:top-full hover:before:w-[80%] before:duration-500"
        >
          Psixologiya
        </NavLink>
        <NavLink
          to={"/tibbiyot"}
          className="text-[#EEA73D] relative content-none before:absolute before:w-0 before:h-[1.5px] before:bg-[#EEA73D] before:left-0 before:top-full hover:before:w-[80%] before:duration-500"
        >
          Tibbiy muammolar
        </NavLink>
        <NavLink
          to={"/fitnes"}
          className="text-[#EEA73D] relative content-none before:absolute before:w-0 before:h-[1.5px] before:bg-[#EEA73D] before:left-0 before:top-full hover:before:w-[80%] before:duration-500"
        >
          Fitnes
        </NavLink>
        <NavLink
          to={"/kiyimlar"}
          className="text-[#EEA73D] relative content-none before:absolute before:w-0 before:h-[1.5px] before:bg-[#EEA73D] before:left-0 before:top-full hover:before:w-[80%] before:duration-500"
        >
          Kiyimlar
        </NavLink>
        <NavLink
          to={"/madaniyhordiq"}
          className="text-[#EEA73D] relative content-none before:absolute before:w-0 before:h-[1.5px] before:bg-[#EEA73D] before:left-0 before:top-full hover:before:w-[80%] before:duration-500"
        >
          Madaniy hordiq
        </NavLink>
        <NavLink
          to={"/takliflar"}
          className="text-[#EEA73D] relative content-none before:absolute before:w-0 before:h-[1.5px] before:bg-[#EEA73D] before:left-0 before:top-full hover:before:w-[80%] before:duration-500"
        >
          Takliflar
        </NavLink>
      </div>
      <div className="login w-[20%] flex justify-center items-center gap-2">
        <NavLink
          to={"/signin"}
          className="duration-300 border border-[#EEA73D] text-[#EEA73D] py-1 px-4 rounded-lg hover:bg-[#EEA73D] hover:text-[#000]"
        >
          Kirish
        </NavLink>
        <NavLink
          to={"/signup"}
          className="border border-[#000] flex justify-center items-center bg-[#EEA73D] text-[#000] py-1 px-4 rounded-lg hover:border-[#EEA73D] hover:text-[#EEA73D] hover:bg-transparent"
        >
          Ro'yxatdan o'tish
        </NavLink>
      </div>
    </nav>
  );
}
