import React from "react";
import leo from "../../images/comments/leo.jpg";
import agus from "../../images/comments/agus.jpg";
import ariel from "../../images/comments/ariel.jpg";
import fran from "../../images/comments/fran.jpg";
import frandel from "../../images/comments/frandel.jpg";
import javy from "../../images/comments/javy.jpg";
import lucas from "../../images/comments/lucas.jpg";
import vero from "../../images/comments/vero.jpg";
import { useState } from "react";

const comentarios = [
  { name: "Lucas", image: lucas, text: "Muy bueno" },
  { name: "Javy", image: javy, text: "Una locura" },
  { name: "Vero", image: vero, text: "Mejor imposible" },
  { name: "Ariel", image: ariel, text: "Tremendo" },
  { name: "Agus", image: agus, text: "Me encanto" },
  { name: "Frandel", image: frandel, text: "Excelente servicio" },
  { name: "Leo", image: leo, text: "Muy atentos" },
  { name: "Fran", image: fran, text: "Me facilitaron el viaje" },
];
export default function Comments() {
  const [comments, setComments] = useState(comentarios);
  return (
    <>
      <div className="ml-[20%] flex items-center text-2xl font-semibold">
        <i className="fa-solid fa-star mr-5"></i>
        <h1>COMENTARIOS DESTACADOS</h1>
      </div>
      <div class="sm:flex flex-wrap justify-center items-center text-center gap-8 pb-5">
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-[#F97D67] mt-6  shadow-lg rounded-lg ">
          <div class="flex-shrink-0">
            <div class="flex items-center mx-auto justify-center h-20 w-20">
              <img src={comments[0].image} className="rounded-full" />
            </div>
          </div>
          <h3 class="text-2xl sm:text-xl text-white font-semibold  py-4">
            {comments[0].name}
          </h3>
          <p class="text-md  text-white py-4">{comments[0].text}</p>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-[#F97D67] shadow-lg rounded-lg">
          <div class="flex-shrink-0">
            <div class="flex items-center mx-auto justify-center h-20 w-20">
              <img src={comments[1].image} className="rounded-full" />
            </div>
          </div>
          <h3 class="text-2xl sm:text-xl text-white font-semibold dark:text-white py-4">
            {comments[1].name}
          </h3>
          <p class="text-md text-white py-4">{comments[1].text}</p>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6 px-4 py-4 bg-[#F97D67] shadow-lg rounded-lg ">
          <div class="flex-shrink-0">
            <div class="flex items-center mx-auto justify-center h-20 w-20">
              <img src={comments[2].image} className="rounded-full" />
            </div>
          </div>
          <h3 class="text-2xl sm:text-xl text-white font-semibold py-4">
            {comments[2].name}
          </h3>
          <p class="text-md  text-white  py-4">{comments[2].text}</p>
        </div>
      </div>
    </>
  );
}
