import React from "react";
import MarbleBg from "../assets/marbles2/marblebg.jpeg"; 

const Newsletter = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: `url(${MarbleBg})` }}
    >
   
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      <div className="relative container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-8">
  
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get Exclusive Offers on <br /> Premium Marble Designs
          </h2>
          <p className="text-gray-700 text-lg">
            Join our mailing list and enjoy special discounts, design inspiration, 
            and early access to new marble collections.
          </p>
        </div>

        <form className="md:w-1/2 flex items-center justify-center md:justify-end bg-white shadow-lg rounded-full overflow-hidden max-w-md w-full">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-6 py-3 text-gray-700 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-r-full transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
