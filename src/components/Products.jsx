import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import picture1 from "../assets/products/picture1.jpg";
import picture2 from "../assets/products/picture2.jpg";
import picture3 from "../assets/products/picture3.jpg";
import picture4 from "../assets/products/picture4.jpg";
import picture5 from "../assets/products/picture5.jpg";
import picture6 from "../assets/products/picture6.jpg";
import picture7 from "../assets/products/picture7.jpg";

const products = [
  { id: 1, name: "Drill Training", img: picture2 },
  { id: 2, name: "Stamina Training", img: picture5 },
  { id: 3, name: "Strength Building", img: picture6 },
  { id: 4, name: "Determination", img: picture1 },
  { id: 5, name: "Impenetrable Safe", price: "$450-700", img: picture4 },
  { id: 6, name: "Walkie Talkies", price: "$100-170", img: picture7 },
  { id: 7, name: "High End CCTV Cameras", price: "$170-250", img: picture3 },
];

const Products = () => {
  return (
    <section className="bg-white text-gray-800 py-24 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Some Of Our Products And Training Grounds For Our Soldiers
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          World Class Services Come With Determination From Our Personnel
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <img
                src={product.img}
                alt={product.name}
                className="h-56 w-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-green-600 font-medium">{product.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Products;