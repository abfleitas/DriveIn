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
    <form
      onSubmit={(e) => {
        e.preventDefault();

        onSearch(city);
      }}
    >
      <select onChange={(e) => handleCity(e)} placeholder="Ciudad...">
        <option value="City">Ciudad...</option>
        <option value="asc"> City 1</option>
        <option value="desc"> City 2</option>
        {/* Traeremos la ciudad que haya en la API y formaremos los selects con un map */}
      </select>
      <select onChange={(e) => handleCountry(e)} placeholder="País...">
        <option value="City">Pais...</option>
        <option value="asc"> Country 1</option>
        <option value="desc"> Country 2</option>
        {/* Traeremos la País que haya en la API y formaremos los selects con un map */}
      </select>

      <label>FI</label>
      <input
        onChange={handleInputChange}
        type="date"
        placeholder="FI"
        name="FI"
      />
      <label>FF</label>
      <input
        onChange={handleInputChange}
        type="date"
        placeholder="FF"
        name="FF"
      />
      <button type="submit" value="Buscar" onClick={(e) => handleSubmit(e)}>
        Buscar
      </button>
    </form>
  );
}
