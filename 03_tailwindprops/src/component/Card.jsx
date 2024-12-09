// import React from "react";
// import { useNavigate } from "react-router-dom";

//  const Card = (props) => {
//    console.log("props=======>", props);
// console.log("props=======>", props.username);
// const Card = ({ username, positionTxt }) => {
//   obj destructring bar bar prop.this or that nhi likhna pdega direct access h
//   console.log("props=========>", username);

//   const navigate = useNavigate();

//   const handleSubmit = () => {
//     navigate("/");
//   };

//   return (
//     <>
//       <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
//         <img
//           className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
//           src="https://images.pexels.com/photos/19102764/pexels-photo-19102764/free-photo-of-lamp-illuminating-christmas-tree-and-wreath.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//           alt=""
//           width="384"
//           height="512"
//         />
//         <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
//           <blockquote>
//             <p className="text-lg font-medium">
//               “Tailwind CSS is the only framework that I've seen scale on large
//               teams. It’s easy to customize, adapts to any design, and the build
//               size is tiny.”
//             </p>
//           </blockquote>
//           <figcaption className="font-medium">
//             <div className="text-sky-500 dark:text-sky-400">{username}</div>
//             <div className="text-slate-700 dark:text-slate-500">
//               {positionTxt}
//             </div>
//           </figcaption>
//         </div>
//         <div>
//           <button
//             onClick={handleSubmit}
//             className="px-6 py- bg-blue-500 text-white font-semibold rounded-sm shadow-sm hover:bg-blue-100 transition duration-300"
//           >
//             Go to Home
//           </button>
//         </div>
//       </figure>
//     </>
//   );
// };

// export default Card;

import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ username, positionTxt, showButton }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://images.pexels.com/photos/19102764/pexels-photo-19102764/free-photo-of-lamp-illuminating-christmas-tree-and-wreath.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{username}</div>
            <div className="text-slate-700 dark:text-slate-500">
              {positionTxt}
            </div>
          </figcaption>

          {showButton && (
            <div>
              <button
                onClick={handleSubmit}
                className="px-6 py- bg-blue-500 text-white font-semibold rounded-sm shadow-sm hover:bg-blue-100 transition duration-300"
              >
                Go to Home
              </button>
            </div>
          )}
        </div>
      </figure>
    </>
  );
};

export default Card;
