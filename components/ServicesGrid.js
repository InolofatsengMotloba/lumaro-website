"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const extraServices = [
  { id: 1, title: "Printing & Signage", image: "/print.png", color: "#e0a07a" },
  {
    id: 2,
    title: "Website Development & Hosting",
    image: "/Laptop.png",
    color: "#e9a46a",
  },
  {
    id: 3,
    title: "Marketing",
    image: "/marketing.png",
    color: "#e58c41",
  },
  {
    id: 4,
    title: "Digital Solutions",
    image: "/digital.png",
    color: "#d9895a",
  },
  {
    id: 5,
    title: "Brand Solutions",
    image: "/solutions.png",
    color: "#e0a07a",
  },
  {
    id: 6,
    title: "Creative & Graphic Design",
    image: "/graphic.png",
    color: "#e58c41",
  },
];

const ServicesGrid = () => {
  const [imageErrors, setImageErrors] = useState({});

  return (
    <section className="w-full my-12">
      <div className="text-center my-9">
        <h1 className="text-font text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#63564d] leading-tight mb-2">
          Other{" "}
          <span className="text-[#e0a07a] bg-clip-text">
            Services
          </span>
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {extraServices.map((service) => (
            <motion.div
              key={service.id}
              className="relative rounded-2xl overflow-hidden cursor-pointer group 
              h-40 sm:h-48 md:h-56"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="h-full relative">
                {/* Image (or fallback) */}
                {!imageErrors[service.id] ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    onError={() =>
                      setImageErrors((prev) => ({
                        ...prev,
                        [service.id]: true,
                      }))
                    }
                  />
                ) : (
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div
                        className="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center text-white font-bold"
                        style={{ backgroundColor: service.color }}
                      >
                        {service.title.charAt(0)}
                      </div>
                      <span className="text-gray-700 font-medium text-sm">
                        {service.title}
                      </span>
                    </div>
                  </div>
                )}

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white">
                  <h3 className="text-white font-bold text-sm sm:text-base md:text-lg leading-tight line-clamp-2">
                    {service.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
