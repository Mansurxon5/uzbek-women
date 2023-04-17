import React from "react";
import logo from "../image/navbarImg/logo.png";
import { BsTelegram, BsInstagram, BsFacebook } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full min-h-[60vh] bg-[#000] pt-8 pb-4 border border-[#EEA73D]">
      <div className="w-full min-h-[60vh] flex gap-3 justify-evenly items-start">
        <div className="brand brand flex items-center min-h-[250px]">
          <a href="/">
            <img src={logo} className="rounded-sm w-[230px]" alt="" />
          </a>
        </div>
        <div className="contact contact w-[300px] flex flex-col gap-2">
          <h3 className="text-xl text-[#EEA73D] font-semibold mb-4">
            Biz Bilan Bog'lanish
          </h3>
          <a
            href="Tel:+998906331910"
            className="text-[#EEA73D] text-xl menu-link"
          >
            +998906331910
          </a>
          <a
            href="Tel:+998906331910"
            className="text-[#EEA73D] text-xl menu-link"
          >
            +998931974791
          </a>
          <a
            href="Tel:+998906331910"
            className="text-[#EEA73D] text-xl menu-link"
          >
            +998900090000
          </a>
          <div className=" w-[140px] min-h-[100px] flex justify-between items-center text-xl text-[#eea73d]">
            <a href="https://t.me/DooeX_1" className="text-2xl text-[#eea73d]">
              <BsTelegram />
            </a>
            <a
              href="https://www.instagram.com/mansurxongiyosiddinov/"
              className="text-2xl text-[#eea73d]"
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100091667199406"
              className="text-2xl text-[#eea73d]"
            >
              <BsFacebook />
            </a>
          </div>
        </div>
        <div className="links flex flex-col">
          <h3 className="text-xl text-[#EEA73D] font-semibold mb-4">
            Bizning Sahifalar
          </h3>
          <NavLink
            to={"/huquq"}
            className="text-[#EEA73D] relative content-none before:absolute before:w-0 before:h-[1.5px] before:bg-[#EEA73D] before:left-0 before:top-full hover:before:w-[23%] before:duration-500"
          >
            Huquq
          </NavLink>
          <NavLink
            to={"/psixologiya"}
            className="text-[#EEA73D] relative content-none before:absolute before:w-0 before:h-[1.5px] before:bg-[#EEA73D] before:left-0 before:top-full hover:before:w-[45%] before:duration-500"
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
            className="text-[#EEA73D] relative content-none before:absolute before:w-0 before:h-[1.5px] before:bg-[#EEA73D] before:left-0 before:top-full hover:before:w-[23%] before:duration-500"
          >
            Fitnes
          </NavLink>
          <NavLink
            to={"/kiyimlar"}
            className="text-[#EEA73D] relative content-none before:absolute before:w-0 before:h-[1.5px] before:bg-[#EEA73D] before:left-0 before:top-full hover:before:w-[30%] before:duration-500"
          >
            Kiyimlar
          </NavLink>
          <NavLink
            to={"/madaniyhordiq"}
            className="text-[#EEA73D] relative content-none before:absolute before:w-0 before:h-[1.5px] before:bg-[#EEA73D] before:left-0 before:top-full hover:before:w-[65%] before:duration-500"
          >
            Madaniy hordiq
          </NavLink>
          <NavLink
            to={"/takliflar"}
            className="text-[#EEA73D] relative content-none before:absolute before:w-0 before:h-[1.5px] before:bg-[#EEA73D] before:left-0 before:top-full hover:before:w-[24%] before:duration-500"
          >
            Takliflar
          </NavLink>
        </div>
        <div className="register flex items-start flex-col gap-4">
          <h3 className="text-xl text-[#EEA73D] font-semibold mb-4">
            Yangiliklardan xabardor bo'ling
          </h3>
          <p className="text-[#EEA73D] text-xl">
            Buning uchun ro'yhatdan o'ting
          </p>
          <input
            type="email"
            className="bg-white w-[250px] rounded-md px-3 py-2"
            placeholder="Elektron manzilingizni kiriting"
          />
          <input
            type="password"
            className="bg-white w-[250px] rounded-md px-3 py-2"
            placeholder="Parolingizni kiriting"
          />
        </div>
      </div>
      <div className="w-full flex justify-around items-center">
        <h3 className="text-lg text-[#EEA73D] font-semibold mb-4">
          Mualliflik huquqi © 2022 Wednesday.
        </h3>
      </div>
    </footer>
  );
}
