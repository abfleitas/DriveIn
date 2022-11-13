import React from "react";
import { useSelector } from "react-redux";

export default function Comments() {
  const comments = useSelector((state) => state.comments);
  return (
    <>
      <div className="ml-[20%] flex items-center text-2xl font-semibold">
        <i className="fa-solid fa-star mr-5"></i>
        <h1>COMENTARIOS DESTACADOS</h1>
      </div>
      <div class="sm:flex flex-wrap justify-center items-center text-center gap-8 pb-5">
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-[#F97D67] mt-6  shadow-lg rounded-lg ">
          <div class="flex-shrink-0">
            <div class="flex items-center mx-auto justify-center">
              <img
                src={comments[0] && comments[0].user.photo}
                className="rounded-full h-[100px] max-w-min"
              />
            </div>
          </div>
          <h3 class="text-2xl sm:text-xl text-white font-semibold  py-4">
            {comments[0] && comments[0].user.name}
          </h3>
          <p class="text-md  text-white py-4">
            {comments[0] && comments[0].description}
          </p>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-[#F97D67] shadow-lg rounded-lg">
          <div class="flex-shrink-0">
            <div class="flex items-center mx-auto justify-center">
              <img
                src={comments[1] && comments[1].user.photo}
                className="rounded-full h-[100px] max-w-min"
              />
            </div>
          </div>
          <h3 class="text-2xl sm:text-xl text-white font-semibold dark:text-white py-4">
            {comments[1] && comments[1].user.name}
          </h3>
          <p class="text-md text-white py-4">
            {comments[1] && comments[1].description}
          </p>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6 px-4 py-4 bg-[#F97D67] shadow-lg rounded-lg ">
          <div class="flex-shrink-0">
            <div class="flex items-center mx-auto justify-center">
              <img
                src={comments[2] && comments[2].user.photo}
                className="rounded-full h-[100px] max-w-min"
              />
            </div>
          </div>
          <h3 class="text-2xl sm:text-xl text-white font-semibold py-4">
            {comments[2] && comments[2].user.name}
          </h3>
          <p class="text-md  text-white  py-4">
            {comments[2] && comments[2].description}
          </p>
        </div>
      </div>
    </>
  );
}
