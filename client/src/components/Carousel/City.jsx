import React from "react";
import Link from "react-router-dom";

const City = ({ country, city, image }) => {
  return (
    <div>
      {/* <Link></Link> // NECESITO EL PATH AL CUAL REDIRECCIONAR */}
      <h3>
        {city}, {country}
      </h3>
      <img src={image} alt={`${city}`} />
    </div>
  );
};
