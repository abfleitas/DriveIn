import React from "react";
import Searchbar from "./Searchbar";
import Carousel from "./Carousel/Carousel";

export default function Home() {
  return (
    <div>
      Soy el Home
      <div>
        <Searchbar />
        <Carousel />
      </div>
    </div>
  );
}
