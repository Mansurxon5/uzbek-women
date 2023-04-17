import React from 'react'

export default function SignUp() {
  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-black flex justify-center items-center">
      <form
        action
        className="w-[300px] min-h-[400px] shadow-lg shadow-[#EEA73D] rounded-lg flex justify-center items-center flex-col gap-4"
      >
        <h2 className="text-[#EEA73D] text-2xl font-bold">Ro'yhatdan o'tish</h2>
        <div className="w-full flex items-center flex-col">
          <div className="text-[#EEA73D] pl-4 w-full">
            Ism Familiyangizni kiriting
          </div>
          <input
            type="name"
            placeholder="F.I.SH"
            className="w-[90%] py-2 rounded-lg px-2 mx-auto"
          />
        </div>
        <div className="w-full flex items-center flex-col">
          <div className="text-[#EEA73D] w-full pl-4">
            Elektron pochtangizni kiriting
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-[90%] py-2 rounded-lg px-2 mx-auto"
          />
        </div>
        <div className="w-full flex items-center flex-col">
          <p className="text-[#EEA73D] w-full pl-4">Passwordingizni kiriting</p>
          <input
            type="email"
            placeholder="Password"
            className="w-[90%] py-2 rounded-lg px-2 mx-auto"
          />
        </div>
        <input
          type="submit"
          value={"Yuborish"}
          className="w-[90%] active:bg-[#bb5a0b] py-2 bg-[#ED6C02] rounded-sm cursor-pointer text-white mt-4"
        />
      </form>
    </div>
  );
}
