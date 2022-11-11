import React from "react";
import { useDispatch } from "react-redux";
import { filterPrice, filter } from "../../redux/actions/actions";

export default function Filters() {

   const dispatch = useDispatch();

   const handleFilters = (e) => {
      if (e.target.checked) dispatch(filter({key: e.target.name, value: e.target.value}));
      if (!e.target.checked) dispatch(filter({key: e.target.name, value: "all"}));
   }

   const handlePrice = (e) => {
      dispatch(filterPrice(e.target.value));
   };

   // brand llega por props
   let brand = ["toyota", "ford", "chevrolet", "volkswagen"]
   
   return (
      <div>
         <div>
            <label>Categoría: </label>
            <input type="checkbox" name="category" id="small" value="small" onChange={handleFilters} />
            <label htmlFor="small">Chico </label>

            <input type="checkbox" name="category" id="medium" value="medium" onChange={handleFilters} />
            <label htmlFor="medium">Mediano </label>

            <input type="checkbox" name="category" id="big" value="big" onChange={handleFilters} />
            <label htmlFor="big">Grande </label>

            <input type="checkbox" name="category" id="premium" value="premium" onChange={handleFilters} />
            <label htmlFor="premium">Premium </label>

            <input type="checkbox" name="category" id="convertible" value="convertible" onChange={handleFilters} />
            <label htmlFor="convertible">Convertible</label>
         </div>
         <div>
            <label>Transmisión: </label>
            <input type="checkbox" name="transmition" id="manual" value="manual" onChange={handleFilters} />
            <label htmlFor="manual">Manual </label>

            <input type="checkbox" name="transmition" id="automatic" value="automatic" onChange={handleFilters} />
            <label htmlFor="automatic">Automático</label>
         </div>
         <div>
            <label>Características: </label>
            <input type="checkbox" name="AC" id="AC" value="AC" onChange={handleFilters} />
            <label htmlFor="AC">Aire Acondicionado </label>

            <input type="checkbox" name="seats" id="seats" value="seats" onChange={handleFilters} />
            <label htmlFor="seats">+4 Asientos</label>
         </div>
         <div>
            <label>Marca: </label>
            {
               brand && brand.map((el, i) => (
                  <span key={i}>
                     <input type="checkbox" name="brand" id={el} value={el} onChange={handleFilters} />
                     <label htmlFor={el}>{el} </label>
                  </span>
               ))
            }
         </div>
         <div>
            <select defaultValue="price" onChange={handlePrice}>
               <option value="price" disabled>Precio</option>
               <option value="lower">De menor a mayor</option>
               <option value="higher">De mayor a menor</option>
            </select>
         </div>
      </div>
   );
}