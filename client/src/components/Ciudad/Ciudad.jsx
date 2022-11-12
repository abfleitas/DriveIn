import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCity } from "../../redux/actions/actions";
import AllCards from "../AllCards/AllCards";
import NavBar from "../NavBar/Navbar";

export default function Ciudad() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const image = useSelector((state) => state.vehiclesByCity.photo);
  const name = useSelector((state) => state.vehiclesByCity.name);

  useEffect(() => {
    dispatch(getCity(id));
  }, [dispatch]);
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
              {name}
            </h1>
            <img src={image} className="rounded-b-3xl min-w-full max-h-40 " />
          </div>
          <AllCards />
        </div>
      </div>
    </div>
  );
}
