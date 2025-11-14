import React from "react";

const Navigation = ({ mobile }) => {
  return (
    <nav>
      <ul
        className={
          mobile
            ? "flex flex-col space-y-4 text-white"
            : "flex space-x-8 text-white"
        }
      >
        <li className="hover:text-yellow-400 cursor-pointer">Home</li>
        <li className="hover:text-yellow-400 cursor-pointer">About</li>
        <li className="hover:text-yellow-400 cursor-pointer">Services</li>
        <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
