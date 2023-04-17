import React from "react";
import Posts from "../posts/Posts";

export default function Header() {

  return (
    <div className="w-full flex flex-wrap bg-black py-[50px] pl-2 gap-2">
      <Posts/>
    </div>
  );
}
