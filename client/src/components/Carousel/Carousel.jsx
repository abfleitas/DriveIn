import React from "react";
import City from "./City";

const cities = [
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
];

const Carousel = () => {
  // ME TIENEN QUE LLEGAR POR PROPS LAS CITIES DESDE COMPONENTE HOME

  return (
    <div>
      <div>
        {cities &&
          cities.map((c, index) => {
            return (
              <City
                country={c.country}
                city={c.city}
                image={c.image}
                key={index}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Carousel;
