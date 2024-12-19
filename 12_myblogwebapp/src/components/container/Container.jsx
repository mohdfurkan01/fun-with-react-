import React from "react";

//children is only a property name
const Container = ({ children }) => {
  return <div className="w-full max-w-7xl mx-auto px-4">{children}</div>;
};

export default Container;
