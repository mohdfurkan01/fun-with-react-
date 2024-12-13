import React, { useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
  //extracting only data here
  const { user } = useContext(UserContext);

  if (!user) {
    return <div className="text-red-500">Please Login!</div>;
  }
  return <div className="text-green-500 text-lg">Welcome {user.email}</div>;
}

export default Profile;
