import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getVehicles } from "../../redux/actions/actions";
import Card from "../Card/Card";
import "./AllCards.css";

export default function AllCards() {

   const vehicles = useSelector(state => state.vehiclesCopy);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch({ type: "GET_VEHICLES" }); // hardcodeado 
   }, [])

   return (
      <div className="container">
         {
            vehicles.length ? vehicles.map((obj, i) => (
               <div key={i} className="width">
                  <Card {...obj} />
               </div>
            )) : <h3>Error</h3>
         }
      </div>
   );
}