import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

import person1 from "../assets/testimonials/person1.jpeg";
import room1 from "../assets/testimonials/room1.jpeg";
import person2 from "../assets/testimonials/person2.jpeg";
import room2 from "../assets/testimonials/room2.jpeg";

const testimonials = [
  {
    name: "Sandra Smith",
    title: "Manager of Kwetu Nairobi",
    quote:
      "They have a perfect touch for making something so professional, interesting, and useful for a lot of people.",
    personImg: person1,
    roomImg: room1,
  },
  {
    name: "samuel jackson",
    title: "Interior Designer",
    quote:
      "Working with them was effortless. The results were beyond my expectations — simply beautiful!",
    personImg: person2,
    roomImg: room2,
  },
];

const Testimonial = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-12 py-16">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".arrow-right",
          prevEl: ".arrow-left",
        }}
        loop={true}
        spaceBetween={50}
        className="flex items-center"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-4xl font-semibold">
                  What People Are Saying About Us
                </h2>

                <div className="flex items-center gap-4">
                  <img
                    src={item.personImg}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.title}</p>
                  </div>
                </div>

                <p className="text-gray-700 italic">“{item.quote}”</p>

                <div className="flex items-center gap-4 pt-4">
                  <button className="arrow-left w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition">
                    <ArrowLeft size={20} />
                  </button>
                  <button className="arrow-right w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full hover:bg-sky-300 transition">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>

              <div className="flex-1">
                <img
                  src={item.roomImg}
                  alt="Room"
                  className="w-full rounded-2xl shadow-md object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
