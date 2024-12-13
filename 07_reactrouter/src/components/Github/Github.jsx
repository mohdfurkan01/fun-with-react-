//import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/mohdfurkan01")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github Followers: {data.followers}
        <div className="text-center m-4 bg-green-600 text-white p-4 text-3xl">
          Github Following: {data.following}
          <img src={data.avatar_url} alt="Git img" width={300} />
        </div>
      </div>
    </>
  );
};

export default Github;

//optimized way
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/mohdfurkan01");
  //return response ❎ conver it json
  return response.json(); //✅❤️
};
