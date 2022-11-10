import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const [input, setInput] = useState({
    //podemos seguir agregando estados
    cities: [],
    country: [],
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.value]: e.target.value,
    });
  };
  const handleCity = (e) => {
    e.preventDefault();
    //!vamos a hacer un dispatch de las ciudades q vengan de la API
  };

  const handleCountry = (e) => {
    e.preventDefault();
    //!vamos a hacer un dispatch de las Paises q vengan de la API
  };

  function handleSubmit(e) {
    e.preventDefault();
    //Aca un dispatch para traer los paises y ciudades
  }
  console.log("SOY INPUT", input);
  return (
    <div className="bg-stone-200 relative right-[60%] top-[220px]  w-[484px] h-[449px]   border-solid border-2 rounded-3xl  border-stone-200 flex flex-col text-sm font-medium text-white py-3 px-3">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          onSearch(city);
        }}
      >
        <div className="text-2xl text-[#009A88] font-bold">
          <h2>Encontrá el vehículo ideal para alquilar en cada ciudad!</h2>
        </div>
        <select
          onChange={(e) => handleCity(e)}
          placeholder="Ciudad..."
          className="relative block w-[440px] cursor-default rounded-md border border-[#F97D67]-300 bg-[#F97D67] py-2 pl-3 pr-10 text-left shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm my-6"
        >
          <option value="City">Ciudad...</option>
          <option value="asc"> City 1</option>
          <option value="desc"> City 2</option>
          {/* Traeremos la ciudad que haya en la API y formaremos los selects con un map */}
        </select>
        <select
          onChange={(e) => handleCountry(e)}
          placeholder="País..."
          className="relative block w-[440px] cursor-default rounded-md border border-[#F97D67]-300 bg-[#F97D67] py-2 pl-3 pr-10 text-left shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm"
        >
          <option value="City">Pais...</option>
          <option value="asc"> Country 1</option>
          <option value="desc"> Country 2</option>
          {/* Traeremos la País que haya en la API y formaremos los selects con un map */}
        </select>
        <div className="relative flex my-4">
          <div className="relative block">
            <label className="text-[#009A88] m-0">Desde</label>

            <input
              onChange={handleInputChange}
              type="date"
              placeholder="FI"
              name="FI"
              className="relative flex left-px w-20  h-10 cursor-default rounded-md border border-[#F97D67] bg-[#F97D67] py-2 pl-3 pr-10 text-left shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm"
            />
          </div>
          <div className="relative block">
            <label className="relative left-[40px] text-[#009A88]">Hasta</label>
            <input
              onChange={handleInputChange}
              type="date"
              placeholder="Hasta"
              name="Hasta"
              className="relative flex  left-[40px] bottom-[23px] w-20  h-10 cursor-default rounded-md border border-[#F97D67] bg-[#F97D67] py-2 pl-3 pr-10 text-left shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm my-6"
            />
          </div>
        </div>
        <button
          type="submit"
          value="Buscar"
          onClick={(e) => handleSubmit(e)}
          className=" inline-block rounded-lg bg-[#009A88] px-4 py-1.5 text-base font-semibold leading-7 text-white ring-1 ring-[#6ee7b7] hover:bg-[#34d399] hover:ring-[#34d399] "
        >
          <p className="justify-items-center justify-center text-center px-4 py-1.5">
            Buscar
          </p>
        </button>
      </form>
    </div>
  );
}
