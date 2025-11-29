import React from "react";
import CCTVImage from "../assets/CCTV/CCTV.jpg"; 

const CCTV = () => {
  return (
    <section className="bg-gray-50 text-gray-900 py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-snug">
              Experience Modern Technology at Work With Our Security Features
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Our company manufatures and uses custom made gagdets made from
              highly skilled, experienced and competent people
            </p>
            <div className="space-y-5">
            
              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center mt-1 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="white"
                    className="w-4 h-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-600">
                  CCTV cmaeras that have a clear range of up to 50M complete with microphones
                  to capture vocals or noise at a nearer distance
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center mt-1 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="white"
                    className="w-4 h-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-600">
                 Mini-cameras that cn be fitted to tight places for harder identification by 
                 intruders
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center mt-1 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="white"
                    className="w-4 h-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-600">
                  Infrared light to assist in high alert systems to sense intruders on contact
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img
              src={CCTVImage}
              alt="Luxury marble collection"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              loading="lazy"/>
           
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CCTV;
