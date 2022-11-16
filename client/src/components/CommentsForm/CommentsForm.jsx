import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postComment } from "../../redux/actions/actions";

export default function CommentsForm() {

   const dispatch = useDispatch();

   const [input, setInput] = useState({
      description: "",
      id: []
   });

   const handleChange = (e) => {
      setInput({
         ...input,
         description: e.target.value
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
            <label>Deja tu comentario</label>
            <br/>
            <textarea
               rows="5"
               cols="40"
               value={input.description}
               onChange={handleChange}
               className="border-[#009A88] border-2 rounded-lg"
            >
            </textarea>
            <br/>
            <button className="py-0 px-3 bg-[#009A88] rounded-lg text-white">Enviar</button>
         </form>
      </div>
   );
}