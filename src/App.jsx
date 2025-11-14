import React from "react";
import tailwindConfig from "../tailwind.config";
import "./index.css"
import Hero from "./components/Hero";
import Features from "./components/Features"; 
import Cards from "./components/Cards";
import Marbles from "./components/Marbles";
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
      <Marbles />
      <Products />
      <Testimonial />
      <Newsletter />
      <Footer />
      
    </>
  );
};


export default App; 