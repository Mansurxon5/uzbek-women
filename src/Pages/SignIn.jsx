import React from 'react'

export default function SignIn() {
  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-black flex justify-center items-center">
      <form
        action
        className="w-[270px] min-h-[340px] shadow-lg shadow-[#EEA73D] rounded-lg flex justify-center items-center flex-col gap-4"
      >
        <h2 className="text-[#EEA73D] text-2xl font-bold">Tizimga kirish</h2>
        <div className="w-full flex items-center flex-col">
          <p className="text-[#EEA73D] mr-[38px]">
            Elektron pochtangizni kiriting
          </p>
          <input
            type="email"
            placeholder="Email"
            className="w-[90%] py-2 rounded-lg px-2 mx-auto"
          />
        </div>
        <div className="w-full flex items-center flex-col">
          <p className="text-[#EEA73D] mr-[78px]">Passwordingizni kiriting</p>
          <input
            type="email"
            placeholder="Password"
            className="w-[90%] py-2 rounded-lg px-2 mx-auto"
          />
        </div>
        <input
          type="submit"
          value={"Yuborish"}
          className="w-[90%] py-2 active:bg-[#bb5a0b] bg-[#ED6C02] rounded-sm cursor-pointer text-white mt-4"
        />
      </form>
    </div>
  );
}
