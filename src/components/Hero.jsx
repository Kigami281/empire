import React from "react";
import HeroImage from "../assets/hero/hero.jpg";
import Button from "../components/Button";
import Header from "./Header";



const Hero = () => {
  return (
    <section className="relative text-gray-900 min-h-[100vh] flex flex-col justify-between overflow-hidden">
      <img
        src={HeroImage}
        alt="Marble Interior"
        className="absolute inset-0 w-full h-full object-cover object-center"/>
      <div className="absolute inset-0 bg-black/50" />

      <Header />
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-24 mt-24">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6 drop-shadow-lg max-w-3xl">
          Creative Marble Design for Elegant Spaces
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
          We craft premium marble interiors that redefine modern living.
        </p>
        <Button label="Shop Now" />    
      </div>
 
      <div className="relative z-10 bg-white/10 backdrop-blur-md border-t border-white/20 flex flex-wrap justify-center md:justify-evenly items-center py-8 mt-12 mx-6 rounded-[20px] mb-4 shadow-lg">
        {[
          { num: "7+", label: "Years Experience" },
          { num: "3", label: "Open In The Country" },
          { num: "10k+", label: "Marble Projects" },
          { num: "260+", label: "Unique Designs" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="text-center text-white mx-6 px-6 border-r border-white/20 last:border-none"
          >
            <h2 className="text-3xl font-bold">{item.num}</h2>
            <p className="text-sm text-gray-200">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
