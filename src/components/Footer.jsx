import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b0b0b] text-gray-300 py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto text-center">
       
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 md:mb-0">
            Ultima<span className="text-cyan-500">/</span>Empire
          </h2>
          <div className="flex space-x-5 text-gray-400 justify-center md:justify-start">
            <a href="#" className="hover:text-purple-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-purple-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-purple-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-purple-500 transition">
              <FaPinterestP />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div>
            <h4 className="font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-purple-500 transition">Escort</a></li>
              <li><a href="#" className="hover:text-purple-500 transition">Guard Duties</a></li>
              <li><a href="#" className="hover:text-purple-500 transition">Body Guard</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Top Features</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-purple-500 transition">High Tech Systems</a></li>
              <li><a href="#" className="hover:text-purple-500 transition">Specialised Trained Personel</a></li>
              <li><a href="#" className="hover:text-purple-500 transition">High Level Of Awareness</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-purple-500 transition">Product Support</a></li>
              <li><a href="#" className="hover:text-purple-500 transition">Service Support</a></li>
              <li><a href="#" className="hover:text-purple-500 transition">History</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-purple-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-purple-500 transition">Press</a></li>
              <li><a href="#" className="hover:text-purple-500 transition">Colaborators</a></li>
              <li><a href="#" className="hover:text-purple-500 transition">Special Events</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Ultima Empire. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;