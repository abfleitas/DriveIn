import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postComment } from "../../redux/actions/actions";
import StarRating from "../Star/Star_rating";

export default function CommentsForm() {

   const dispatch = useDispatch();

   const [input, setInput] = useState({
      confort: "",
      performance: "",
      security: "",
      priceQuality: "",
      recommended: "",
      description: "",
      id: []
   });

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
         id: []
      });
   };

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <label>Comodidad</label>
            <StarRating />

            <label>Desempeño</label>
            <StarRating />
            <label>Seguridad</label>
            <StarRating />
            <label>Relacion precio calidad</label>
            <StarRating />
            <label>Recomendado</label>
            <StarRating />
            <label>Deja tu comentario</label>
            <br />
            <textarea
               name="description"
               rows="5"
               cols="40"
               value={input.description}
               onChange={handleChange}
               className="border-[#009A88] border-2 rounded-lg"
            >
            </textarea>

            <br />
            <button className="py-0 px-3 bg-[#009A88] rounded-lg text-white">Enviar</button>
         </form>
      </div>
   );
}