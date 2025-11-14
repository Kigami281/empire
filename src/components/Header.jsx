import React, { useState } from "react";
import Navbar from "./Navigation";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-20 
                       flex justify-between items-center 
                       px-6 py-4 md:px-12 md:py-6">

      <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide text-yellow-400">
        Oyk<span className="text-white">/</span>Mabs
      </h1>

      <div className="hidden md:flex">
        <Navbar />
      </div>

      <button
        className="md:hidden text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>
      
      {open && (
        <div className="absolute right-6 top-full mt-3 
                        bg-black/90 backdrop-blur-md 
                        p-4 rounded-xl shadow-lg md:hidden">
          <Navbar mobile />
        </div>
      )}
    </header>
  );
};

export default Header;
