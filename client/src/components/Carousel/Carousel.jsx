import React from "react";
import { useState } from "react";

const ciudades = [
  {
    country: "Argentina",
    city: "Cordoba",
    image:
      "https://vamospanish.com/wp-content/uploads/cordoba-the-second-city-822x1024.jpg",
  },
  {
    country: "Argentina",
    city: "Buenos Aires",
    image:
      "http://argentinapoloday.com.ar/blog/wp-content/uploads/2016/05/a.jpg",
  },
  {
    country: "Chile",
    city: "Santiago de Chile",
    image:
      "https://storage.googleapis.com/chile-travel-newsite-static-content/2021/03/centro-historico-1024x682.jpg",
  },
  {
    country: "Chile",
    city: "Viña del Mar",
    image:
      "https://bestlocationhotels.com/wp-content/uploads/2017/04/Vi%C3%B1a-del-Mar-.jpg",
  },
  {
    country: "Brasil",
    city: "Rio de Janeiro",
    image:
      "https://www.cronista.com/files/image/302/302492/5ffe1e5aec0ab.webp?oe=jpg",
  },
  {
    country: "Brasil",
    city: "Florianopolis",
    image:
      "https://volemos.nyc3.cdn.digitaloceanspaces.com/blog/wp-content/uploads/2021/10/25213736/mejor-epoca-para-viajar-florianopolis.jpg",
  },
  {
    country: "Colombia",
    city: "Cartajena",
    image:
      "https://cdn.kimkim.com/files/a/content_articles/featured_photos/56cfc7b498a4c19caf8a13c90f71e7aa3ebbf61e/big-2c291afacacc840051db89d97ef4505b.jpg",
  },
  {
    country: "Mexico",
    city: "Guadalajara",
    image:
      "https://guadalajara.cc/wp-content/uploads/2014/06/guadalajara-zocalo1.jpg",
  },
  {
    country: "Mexico",
    city: "Guadalajara",
    image:
      "https://guadalajara.cc/wp-content/uploads/2014/06/guadalajara-zocalo1.jpg",
  },
  {
    country: "Mexico",
    city: "Guadalajara",
    image:
      "https://guadalajara.cc/wp-content/uploads/2014/06/guadalajara-zocalo1.jpg",
  },
  {
    country: "Brasil",
    city: "Florianopolis",
    image:
      "https://volemos.nyc3.cdn.digitaloceanspaces.com/blog/wp-content/uploads/2021/10/25213736/mejor-epoca-para-viajar-florianopolis.jpg",
  },
  {
    country: "Brasil",
    city: "Florianopolis",
    image:
      "https://volemos.nyc3.cdn.digitaloceanspaces.com/blog/wp-content/uploads/2021/10/25213736/mejor-epoca-para-viajar-florianopolis.jpg",
  },
  {
    country: "Brasil",
    city: "Florianopolis",
    image:
      "https://volemos.nyc3.cdn.digitaloceanspaces.com/blog/wp-content/uploads/2021/10/25213736/mejor-epoca-para-viajar-florianopolis.jpg",
  },
];

const Carousel = () => {
  // ME TIENEN QUE LLEGAR POR PROPS LAS CITIES DESDE COMPONENTE HOME
  const [cities, setCities] = useState(ciudades);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div className="ml-[20%] flex items-center">
        <i className="fa-solid fa-star mr-5"></i>
        <h1>DESTINOS FAVORITOS</h1>
      </div>
      <div className="relative flex items-center">
        <i
          onClick={slideLeft}
          className="fa-solid fa-angle-left p-5 bg-slate-300 rounded-full absolute z-10 opacity-50 cursor-pointer hover:opacity-100"
        ></i>
        <div
          id="slider"
          className="flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {cities &&
            cities.map((c, index) => {
              return (
                <div className="p-2 relative cursor-pointer" key={index}>
                  <img
                    className=" rounded-lg max-w-sm h-full"
                    src={c.image}
                    alt={`${c.city}`}
                  />
                  <div className="bg-[#f97316] text-white p-2 rounded-tr-lg rounded-bl-lg absolute bottom-2">
                    <h3>
                      {c.city}, {c.country}
                    </h3>
                  </div>
                </div>
              );
            })}
        </div>
        <i
          onClick={slideRight}
          className="fa-solid fa-angle-right p-5 bg-slate-300 rounded-full absolute z-10 right-0 opacity-50 cursor-pointer hover:opacity-100"
        ></i>
      </div>
    </>
  );
};

export default Carousel;
