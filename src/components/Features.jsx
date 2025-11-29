import React from "react";
import FeaturesImage from "../assets/features/features.jpg";

const Features = () => {
  return (
    <section className="bg-white text-gray-900 py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img
            src={FeaturesImage}
            alt="Luxury marble interior"
            className="rounded-2xl shadow-xl w-full object-cover transform hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Providing World Class Services
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            At <span className="font-semibold text-purple-500">Ultima Empire</span>, we offer top
            tier services and to perfection to meet and exeed our client's expections providing
            excellent results.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center mt-1 shadow-md hover:shadow-blue-400/50 transition-all duration-300">
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
              <div>
                <h4 className="font-semibold text-lg">Top tier Escort Missions</h4>
                <p className="text-gray-500 text-sm">
                 We offer escort security to any part of the world ensuring the safety of
                 our clients using only the best gear
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center mt-1 shadow-md hover:shadow-blue-400/50 transition-all duration-300">
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
              <div>
                <h4 className="font-semibold text-lg">Body Guard Duties</h4>
                <p className="text-gray-500 text-sm">
                 It is common for people to have enemies and so our forces help keep those
                 people in check by provide air tight but also high class security including
                 performing searches
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center mt-1 shadow-md hover:shadow-blue-400/50 transition-all duration-300">
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
              <div>
                <h4 className="font-semibold text-lg">High level Security Technology</h4>
                <p className="text-gray-500 text-sm">
                  Other than physical we also provide gadgets and install them to your homes or 
                  offices or any other place to keep tabs of your area and warn you of any 
                  uncertainties
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;