// import React from 'react'

// const ReadMore = ({text="Read More" , className =`` , }) => {
//   return (
//     <button 
//         className = {` text-white bg-blue-500 font-bold rounded-full p-1${className}`}
//     >
//         {text}
//     </button>
//   )
// }

// export default ReadMore

import React from 'react';

const Button = ({
  text = "Click Me",
  textColor = "text-white",
  bgColor = "bg-blue-500",
  width = "w-auto",
  height = "h-auto",
  className = "",
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={`font-bold rounded-full p-2 ${textColor} ${bgColor} ${width} ${height} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
