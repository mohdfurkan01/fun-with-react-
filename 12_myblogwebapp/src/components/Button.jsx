import React from "react";

//custom btn and ...props me user jo bhi optional peoperty pass krega like placeholder to wo props me aa jayegi
const Button = ({
  children,
  type = "submit",
  bgColor = "bg-blue-600",
  textColor = " text-white",
  className = "",
  ...props
}) => {
  // const btnHandler =()=>{
  //baad m add krke dekhunga
  // }
  return (
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
