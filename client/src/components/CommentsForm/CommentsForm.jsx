import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { renderMatches } from "react-router-dom";
import { postComment } from "../../redux/actions/actions";
import StarRating from "../Star/Star_rating";

export default function CommentsForm({ rent, visible, onClose }) {
   const dispatch = useDispatch();
   const user = JSON.parse(localStorage.getItem("UserLogin"));
   
   const starRating = (name, data) => {
      //console.log(data);
      //console.log(name);
      setInput({ ...input, [name]: data });
   };
   const [input, setInput] = useState({
      id: user.id,
      confort: 0,
      performance: 0,
      security: 0,
      priceQuality: 0,
      recommended: 0,
      description: "",
      //vehicleId: rent.id,
   });
   console.log("confort ", input.confort);
   console.log("performance ", input.performance);
   console.log("confort ", input.priceQuality);
   console.log("confort ", input.recommended);
   
   const handleChange = (e) => {
      setInput({
         ...input,
         [e.target.name]: e.target.value,
      });
   };
   
   const handleSubmit = (e) => {
      e.preventDefault();
    dispatch(postComment(input));
    setInput({
       description: "",
       id: [],
      });
   };
   
   const handleOnClose = (e) => {
      if (e.target.id === "container") onClose();
   };
   if (!visible) return null;
   
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center" id="container"
        onClick={handleOnClose}>
      <form onSubmit={handleSubmit}>
        <label>Comodidad</label>
        <StarRating name="confort" starRating={starRating} />
        <label>Desempeño</label>
        <StarRating name="performance" starRating={starRating} />
        <label>Seguridad</label>
        <StarRating name="security" starRating={starRating} />
        <label>Relacion precio calidad</label>
        <StarRating name="priceQuality" starRating={starRating} />
        <label>Recomendado</label>
        <StarRating name="recommended" starRating={starRating} />
        <label>Deja tu comentario</label>
        <br />
        <textarea
          name="description"
          rows="5"
          cols="40"
          value={input.description}
          onChange={handleChange}
          className="border-[#009A88] border-2 rounded-lg"
        ></textarea>

        <br />
        <button className="py-0 px-3 bg-[#009A88] rounded-lg text-white">
          Enviar
        </button>
      </form>
    </div>
  );
}
