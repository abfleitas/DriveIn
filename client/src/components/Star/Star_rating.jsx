import React, { useState } from "react";
import "./Star_rating.css"
const StarRating = ({name, starRating}) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    // const handleRating = (index) => {
    //     setRating(index)
    // }

    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={index <= ((rating && hover) || hover) ? "on" : "off"}
                        //onClick={() => handleRating()}
                        onMouseDown={() => setRating(index)} // setRating(index)
                        onClick={(e) => starRating(name, rating)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <span className="star">&#9733;</span>
                    </button>
                );
            })}
        </div>
    );
};


export default StarRating;