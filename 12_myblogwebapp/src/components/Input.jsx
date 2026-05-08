import React, { useId } from "react";

//just lil bit changes in syntax for forwardRef
const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && <label 
      className="inline-block mb-1 pl-1 text-sm font-semibold text-gray-700" 
      htmlFor={id}>
        {label}
      </label>}
      <input
        type={type}
        className={`px-4 py-2.5 rounded-xl bg-white text-black outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 border border-gray-200 w-full shadow-sm hover:border-gray-300 ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

// const Input = ({}) => {
//   const id = useId();
//   return (
//     <div>
//       <p>nput</p>
//     </div>
//   );
// };

export default Input;
