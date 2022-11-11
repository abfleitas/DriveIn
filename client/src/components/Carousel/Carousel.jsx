import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCitiesFeatured } from "../../redux/actions/actions";
import { NavLink } from "react-router-dom";

const Carousel = () => {
  const cities = useSelector((state) => state.citiesFeatured);
  const dispatch = useDispatch();

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    dispatch(getCitiesFeatured());
  }, [dispatch]);

  return (
    <>
      <div className="ml-[20%] flex items-center text-2xl font-sans font-bold">
        <i className="fa-solid fa-star mr-5"></i>
        <h1>DESTINOS FAVORITOS</h1>
      </div>
      <div className="relative flex items-center">
        <i
          onClick={slideLeft}
          className="w-[106px] h-[106px] p-10 bg-slate-300 rounded-full absolute z-10 opacity-50 cursor-pointer hover:opacity-90"
        ></i>
        <div
          id="slider"
          className="flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {cities &&
            cities.map((c, index) => {
              return (
                <NavLink to={`/ciudad/${c.id}`}>
                  <div
                    className="p-2 relative cursor-pointer h-[258px]"
                    key={index}
                  >
                    <img
                      className=" rounded-lg max-w-sm h-full"
                      src={c.photo}
                      alt={`${c.name}`}
                    />
                    <div className="bg-[#F97D67] text-white p-2 rounded-tr-lg rounded-bl-lg absolute bottom-2">
                      <h3>
                        {c.name}, {c.country}
                      </h3>
                    </div>
                  </div>
                </NavLink>
              );
            })}
        </div>
        <i
          onClick={slideRight}
          className="w-[106px] h-[106px] p-10 bg-slate-300 rounded-full absolute z-10 right-0 opacity-50 cursor-pointer hover:opacity-100"
        ></i>
      </div>
    </>
  );
};

export default Carousel;
