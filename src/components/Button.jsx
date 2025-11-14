import React from "react";

const Button = ({ label }) => {
  return (
    <button
      className="bg-yellow-400 hover:bg-yellow-500 text-black 
      font-semibold px-10 py-3 rounded-lg shadow-md
      transition-all duration-300"
    >
      {label}
    </button>
  );
};

export default Button;
