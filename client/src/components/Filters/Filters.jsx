import React from "react";
import { useDispatch } from "react-redux";

export default function Filters({brand}) {

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
            <label htmlFor="small">chico </label>

            <input type="checkbox" id="medium" value="medium" onChange={handleCategory} />
            <label htmlFor="medium">mediano </label>

            <input type="checkbox" id="big" value="big" onChange={handleCategory} />
            <label htmlFor="big">grande </label>

            <input type="checkbox" id="premium" value="premium" onChange={handleCategory} />
            <label htmlFor="premium">premium </label>

            <input type="checkbox" id="convertible" value="convertible" onChange={handleCategory} />
            <label htmlFor="convertible">convertible</label>
         </div>
         <div>
            <label>Transmisión: </label>
            <input type="checkbox" id="manual" value="manual" onChange={handleTransmission} />
            <label htmlFor="manual">manual </label>

            <input type="checkbox" id="automatic" value="automatic" onChange={handleTransmission} />
            <label htmlFor="automatic">automático</label>
         </div>
         <div>
            <label>Características: </label>
            <input type="checkbox" id="AC" value="AC" onChange={handleCharacteristics} />
            <label htmlFor="AC">aire acondicionado </label>

            <input type="checkbox" id="seats" value="seats" onChange={handleCharacteristics} />
            <label htmlFor="seats">+4 asientos</label>
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
            <label>Precio: </label>
            <input type="checkbox" id="lower" value="lower" onChange={handlePrice} />
            <label htmlFor="lower">de menor a mayor </label>

            <input type="checkbox" id="higher" value="higher" onChange={handlePrice} />
            <label htmlFor="higher">de mayor a menor</label>
         </div>
      </div>
   );
}