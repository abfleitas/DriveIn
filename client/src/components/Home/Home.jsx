import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Carousel from "../Carousel/Carousel";
import Comments from "../Comments/Comments";
import logo from "../../images/logo.png";
import banner from "../../images/banner.jpg";
import Navbar from "../NavBar/Navbar";

export default function Home() {
  return (
    <>
      <div className="bg-[#D9D9D9] h-full">
        <div>
          <Navbar />
        </div>
        <br />
        <br />
        <br />
        {/* <div>
          <img src={logo} alt="driveIn logo" className="h-[153px]" />
        </div> */}
        <div className="relative">
          <img
            src={banner}
            alt="driveIn banner"
            className="w-[1500.22px] h-[636px] m-auto rounded-3xl"
          />
          <div className="absolute bottom-2/4 left-16">
            <SearchBar />
          </div>
        </div>
        <div className="mt-8">
          <Carousel />
        </div>
        <div className="mt-8">
          <Comments />
        </div>
      </div>
    </>
  );
}
