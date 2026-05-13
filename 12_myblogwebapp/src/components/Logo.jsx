import React from "react";
import logoImage from "../assets/6.png";

const Logo = ({ width = "150px" }) => {
  return (
    <div className="flex items-center">
      <img src={logoImage} alt="Logo" style={{ width, objectFit: 'contain' }} className="h-16 md:h-20 w-auto" />
    </div>
  );
};

export default Logo;
