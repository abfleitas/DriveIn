import React from "react";
import { useDispatch } from "react-redux";
import { filterCategory, filterTransmission, filterCharacteristics, filterBrand, filterPrice } from "../../redux/actions/actions";

export default function Filters() {

   const dispatch = useDispatch();

   const handleCategory = (e) => {
      dispatch(filterCategory(e.target.value));
   };

   const handleTransmission = (e) => {
      dispatch(filterTransmission(e.target.value));
   };

   const handleCharacteristics = (e) => {
      dispatch(filterCharacteristics(e.target.value));
   };

   const handleBrand = (e) => {
      dispatch(filterBrand(e.target.value));
   };

   const handlePrice = (e) => {
      dispatch(filterPrice(e.target.value));
   };

   // brand llega por props
   let brand = ["toyota", "ford", "chevrolet", "volkswagen"]
   
   return (
      <div>
         <div>
            <label>Categoría: </label>
            <input type="checkbox" id="small" value="small" onChange={handleCategory} />
            <label htmlFor="small">Chico </label>

            <input type="checkbox" id="medium" value="medium" onChange={handleCategory} />
            <label htmlFor="medium">Mediano </label>

            <input type="checkbox" id="big" value="big" onChange={handleCategory} />
            <label htmlFor="big">Grande </label>

            <input type="checkbox" id="premium" value="premium" onChange={handleCategory} />
            <label htmlFor="premium">Premium </label>

            <input type="checkbox" id="convertible" value="convertible" onChange={handleCategory} />
            <label htmlFor="convertible">Convertible</label>
         </div>
         <div>
            <label>Transmisión: </label>
            <input type="checkbox" id="manual" value="manual" onChange={handleTransmission} />
            <label htmlFor="manual">Manual </label>

            <input type="checkbox" id="automatic" value="automatic" onChange={handleTransmission} />
            <label htmlFor="automatic">Automático</label>
         </div>
         <div>
            <label>Características: </label>
            <input type="checkbox" id="AC" value="AC" onChange={handleCharacteristics} />
            <label htmlFor="AC">Aire Acondicionado </label>

            <input type="checkbox" id="seats" value="seats" onChange={handleCharacteristics} />
            <label htmlFor="seats">+4 Asientos</label>
         </div>
         <div>
            <label>Marca: </label>
            {
               brand && brand.map((el, i) => (
                  <span key={i}>
                     <input type="checkbox" id={el} value={el} onChange={handleBrand} />
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