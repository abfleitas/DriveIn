import React from "react";
import AllCards from "../AllCards/AllCards";
import NavBar from "../NavBar/Navbar";

export default function Ciudad() {
  return (
    <div className="bg-[#D9D9D9] h-full">
      <div>
        <NavBar />
      </div>
      <div className="flex">
        <div className="w-3/12 h-full bg-white"></div>
        <div className="w-9/12 h-full flex flex-col ">
          <div className="relative max-h-50 shadow-xl rounded-bl-3xl rounded-br-3xl">
            <h1 className="absolute bottom-0 bg-slate-200 bg-opacity-50 p-2 rounded-bl-3xl rounded-tr-3xl font-bold text-3xl text-white">
              Salta, Argentina
            </h1>
            <img
              src="https://st.depositphotos.com/1867553/4663/i/450/depositphotos_46636527-stock-photo-quebrada-de-cafayate-salta-argentina.jpg"
              className="rounded-b-3xl min-w-full max-h-40 "
            />
          </div>
          <AllCards />
        </div>
      </div>
    </div>
  );
}
