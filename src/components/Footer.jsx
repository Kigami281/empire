import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b0b0b] text-gray-300 py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
       
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 md:mb-0">
            Oyk<span className="text-yellow-500">/</span>Mabs
          </h2>
          <div className="flex space-x-5 text-gray-400">
            <a href="#" className="hover:text-yellow-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-yellow-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-yellow-500 transition">
              <FaPinterestP />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div>
            <h4 className="font-semibold text-white mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-yellow-500 transition">The Support Suite</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">The Sales Suite</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Support</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Guide</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Top Features</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-yellow-500 transition">Ticketing System</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Knowledge Base</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Community Forums</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Help Desk Software</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-yellow-500 transition">Product Support</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Request Demo</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Library</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Developer Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-yellow-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Press</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Investors</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Events</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Favourite Things</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-yellow-500 transition">For Enterprise</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">For Startups</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">For Benchmarks</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">For Small Business</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Oyk/Mabs. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
