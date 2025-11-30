import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import picture1 from "../assets/store/picture1.jpg";
import picture2 from "../assets/store/picture2.jpg";
import picture3 from "../assets/store/picture3.jpg";
import picture5 from "../assets/store/picture5.jpg";

const Newitems = () => {
  const products = [
    { id: 1, name: "Pen Camera", image: picture1 },
    { id: 2, name: "Andvanced Walkie Talkie", image: picture2 },
    { id: 3, name: "Visual Camera", image: picture3 },
    { id: 5, name: "Camouflaged Solar Camera",image: picture5 },
    
  ];

  return (
     <section className="bg-white text-gray-900 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
      
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Some Our Advanced Tech</h2>
            <p className="text-gray-600">
              These are some of our custom made technology 
            </p>
            <a
              href="#"
              className="text-black font-semibold flex items-center gap-2 hover:text-gray-700"
            >
              Check all <span className="text-lg">→</span>
            </a>
          </div>

        <div className="md:col-span-3">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="!pb-10"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="relative group overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                <img
                  loading="lazy"
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition duration-300" />
                <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold bg-black/40 px-2 py-1 rounded">
                  {product.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Newitems;
