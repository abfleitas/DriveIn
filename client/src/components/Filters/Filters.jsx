import React from "react";
import { useDispatch } from "react-redux";

export default function Filters() {

   const dispatch = useDispatch();
   
   return (
      <div>
         <div>
            <label>Categoría: </label>
            <input type="checkbox" name="chico" />chico
            <input type="checkbox" name="mediano" />mediano
            <input type="checkbox" name="grande" />grande
            <input type="checkbox" name="premiun" />premiun
            <input type="checkbox" name="convertible" />convertible
         </div>
         <div>
            <label>Transmisión: </label>
            <input type="checkbox" name="manual" />manual
            <input type="checkbox" name="automatico" />automatico
         </div>
         <div>
            <label>Características: </label>
            <input type="checkbox" name="manual" />Aire Acondicionado
            <input type="checkbox" name="automatico" />+4 asientos
         </div>
         <div>
            <label>Marca: </label>
         </div>
      </div>
   );
}