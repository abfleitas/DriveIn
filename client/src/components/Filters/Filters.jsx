import React from "react";
import { useDispatch } from "react-redux";

export default function Filters() {

   const dispatch = useDispatch();

   const handleFilters = (e) => {
      // dispatch();
   };
   
   return (
      <div>
         <select onChange={(e) => handleFilters(e)}>
            <option>Ordenar por</option>
            <option value="categoria">Categoría</option>
            <option value="transmision">Transmisión</option>
            <option value="caracteristicas">Características</option>
            <option value="marca">Marca</option>
         </select>
      </div>
   );
}