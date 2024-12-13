import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  //this id must be same as url route id in app.js(main.js) userid
  return (
    <div className="bg-green-700 text-white text-3xl p-4 text-center">
      <h1>User Component</h1>
      <p>Dynamic data is coming as: {userid}</p>
    </div>
  );
};

export default User;
