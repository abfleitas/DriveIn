import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterPrice, filter, getVehicles } from "../../redux/actions/actions";

export default function Filters({ setChange }) {
  const vehicles = useSelector((state) => state.allVehicles);
  const brand = [...new Set(vehicles.map(el => el.brand))];
  const vehiclesCopy = useSelector((state) => state.vehiclesCopy);
  let data = {
    Sedan: 0,
    SUV: 0,
    Pickup: 0,
    Hatchback: 0,
    CUV: 0,
    Manual: 0,
    Automatico: 0,
    air: 0,
    seats: 0,
    toyota: 0,
    mitsubishi: 0
  }
  vehiclesCopy.map(v => {
    if (v.category === "Sedan") data.Sedan++;
    if (v.category === "SUV") data.SUV++;
    if (v.category === "Pickup") data.Pickup++;
    if (v.category === "Hatchback") data.Hatchback++;
    if (v.category === "CUV") data.CUV++;
    if (v.transmition === "Manual") data.Manual++;
    if (v.transmition === "Automatico") data.Automatico++;
    if (v.air) data.air++;
    if (v.seats > 4) data.seats++;
    if (v.brand === "Toyota") data.toyota++;
    if (v.brand === "Mitsubishi") data.mitsubishi++;
  });

  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(getVehicles());

  }, [dispatch]);

  const handleFilters = (e) => {
    if (e.target.checked)
      dispatch(filter({ key: e.target.name, value: e.target.value }));
    if (!e.target.checked)
      dispatch(filter({ key: e.target.name, value: "all" }));
  };

  const handlePrice = (e) => {
    dispatch(filterPrice(e.target.value));
    setChange(e.target.value);
  };

  return (
    <div className="flex flex-col mt-[190px] w-full font-medium text-white bg-[#F97D67] h-fit rounded-tr-[100px] rounded-br-2xl">
      <div>
        <h2 className="font-bold text-black mt-2">ORDENAR POR:</h2>
        <div className="p-5">
          <select
            defaultValue="price"
            onChange={handlePrice}
            className=" cursor-default rounded-md border border-[#F97D67]-300 bg-[#F97D67] py-2 pl-3 pr-10 text-left shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm"
          >
            <option value="price" disabled>
              Precio
            </option>
            <option value="lower">De menor a mayor</option>
            <option value="higher">De mayor a menor</option>
          </select>
        </div>
        <br></br>
        <h2 className="font-bold text-black">FILTRAR POR:</h2>

        <div className="p-5 border-[#F97D67]-300 bg-[#F97D67]">
          <label className="font-bold">Categoría: </label>

          <div className="rounded-md border border-[#F97D67]-300 p-3 flex flex-wrap gap-x-1">
            <input
              type="checkbox"
              name="category"
              id="Sedan"
              value="Sedan"
              onChange={handleFilters}
              className="border-gray-300 rounded h-5 w-5 mx-2"
            />
            <label htmlFor="Sedan">Sedan {`(${data.Sedan})`} </label>

            <input
              type="checkbox"
              name="category"
              id="SUV"
              value="SUV"
              onChange={handleFilters}
              className="border-gray-300 rounded h-5 w-5 mx-2"
            />
            <label htmlFor="SUV">Suv {`(${data.SUV})`} </label>

            <input
              type="checkbox"
              name="category"
              id="Pickup"
              value="Pickup"
              onChange={handleFilters}
              className="border-gray-300 rounded h-5 w-5 mx-2"
            />
            <label htmlFor="Pickup">Pickup {`(${ data.Pickup})`} </label>

            <input
              type="checkbox"
              name="category"
              id="Hatchback"
              value="Hatchback"
              onChange={handleFilters}
              className="border-gray-300 rounded h-5 w-5 mx-2"
            />
            <label htmlFor="Hatchback">Hatchback {`(${ data.Hatchback})`} </label>

            <input
              type="checkbox"
              name="category"
              id="CUV"
              value="CUV"
              onChange={handleFilters}
              className="border-gray-300 rounded h-5 w-5 mx-2"
            />
            <label htmlFor="CUV">Cuv {`(${ data.CUV})`}</label>
          </div>
        </div>
        <div className="p-5 border-[#F97D67]-300 bg-[#F97D67]">
          <label className="font-bold">Transmisión: </label>

          <div className="rounded-md border border-[#F97D67]-300 p-3 flex flex-wrap gap-x-2">
            <input
              type="checkbox"
              name="transmition"
              id="Manual"
              value="Manual"
              onChange={handleFilters}
              className="border-gray-300 rounded h-5 w-5 mx-2"
            />
            <label htmlFor="Manual">Manual {`(${data.Manual})`} </label>

            <input
              type="checkbox"
              name="transmition"
              id="Automatico"
              value="Automatico"
              onChange={handleFilters}
              className="border-gray-300 rounded h-5 w-5 mx-2"
            />
            <label htmlFor="Automatico">Automático {`(${data.Automatico})`}</label>
          </div>
        </div>
        <div className="p-5 border-[#F97D67]-300 bg-[#F97D67]">
          <label className="font-bold">Características: </label>

          <div className="rounded-md border border-[#F97D67]-300 p-3 flex flex-wrap gap-x-2">
            <input
              type="checkbox"
              name="AC"
              id="AC"
              value="AC"
              onChange={handleFilters}
              className="border-gray-300 rounded h-5 w-5 mx-2"
            />
            <label htmlFor="AC">Aire Acondicionado {`(${data.air})`} </label>

            <input
              type="checkbox"
              name="seats"
              id="seats"
              value="seats"
              onChange={handleFilters}
              className="border-gray-300 rounded h-5 w-5 mx-2"
            />
            <label htmlFor="seats">+4 Asientos {`(${data.seats})`}</label>
          </div>
        </div>
        <div className="p-5 border-[#F97D67]-300 bg-[#F97D67] rounded-br-2xl">
          <label className="font-bold">Marca: </label>

          <div className="rounded-md border border-[#F97D67]-300 p-3 flex flex-wrap gap-x-2">
            {brand &&
              brand.map((el, i) => (
                <span key={i}>
                  <input
                    type="checkbox"
                    name="brand"
                    id={el}
                    value={el}
                    onChange={handleFilters}
                    className="border-gray-300 rounded h-5 w-5 mx-2"
                  />
                  <label htmlFor={el}>{el}</label>
                </span>
              ))}
          </div>
          {/* <p>{data.toyota}</p>
          <p>{data.mitsubishi}</p> */}
        </div>
      </div>
    </div>
  );
}
