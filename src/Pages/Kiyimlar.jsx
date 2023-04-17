import React from "react";
import KiyimPost from "../posts/KiyimPost";

export default function Kiyimlar() {
  return (
    <div>
      <header className='w-full min-h-[90vh] bg-[url("https://uzbek-women-frontend.netlify.app/static/media/bg.f26c410746d035164d3c.avif")] bg-cover'>
        <div className="bg-[rgba(0,0,0,.627)] w-full min-h-[90vh]">
          <div className="w-[60%] min-h-[90vh] flex justify-center flex-col gap-4 pl-[100px]">
            <h3 className="text-[#EEA73D] font-[s] text-4xl font-bold">
              Biz bilan 18 yoshdagidek ...
            </h3>
            <p className="text-white text-xl">
              Bu erda fitnesni o'zgartirishni boshlashingizga yordam beradigan
              ayollar uchun bir nechta boshlang'ich fitnes maslahatlari mavjud.
            </p>
          </div>
        </div>
      </header>
      <div className="womens-clothing__content flex flex-wrap w-full min-h-[100vh] justify-evenly items-center bg-black gap-5 py-8">
        <KiyimPost />
      </div>
      <br />
    </div>
  );
}
