import React from "react";
import tailwindConfig from "../tailwind.config";
import "./index.css"
import Hero from "./components/Hero";
import Features from "./components/Features"; 
import Cards from "./components/Cards";
import CCTV from "./components/CCTV";
import Products from "./components/Products";
import Testimonial from "./components/Testimonial";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
    
 

const App = () => {
  return (
    <>
     
      <Hero />
      <Features />
      <Cards />
      <CCTV />
      <Products />
      <Testimonial />
      <Newsletter />
      <Footer />
      
    </>
  );
};


export default App; 