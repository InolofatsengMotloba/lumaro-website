"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Mock data - replace with your actual services data
const servicesData = [
  {
    id: 1,
    title: "Adventure Travel",
    description:
      "Thrilling expeditions to remote destinations and extreme landscapes.",
    image: "/services/adventure.jpg",
    color: "#f97316",
  },
  {
    id: 2,
    title: "Cultural Immersion",
    description:
      "Deep dive into local traditions, customs, and authentic experiences.",
    image: "/services/cultural.jpg",
    color: "#dc2626",
  },
  {
    id: 3,
    title: "Luxury Getaways",
    description:
      "Premium accommodations and exclusive experiences for discerning travelers.",
    image: "/services/luxury.jpg",
    color: "#059669",
  },
  {
    id: 4,
    title: "Sustainable Tourism",
    description:
      "Eco-friendly journeys that support local communities and preserve nature.",
    image: "/services/eco.jpg",
    color: "#2563eb",
  },
];

const ServicesGallery = () => {
  const [selectedService, setSelectedService] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextService = () => {
    setDirection(1);
    setSelectedService((prev) => (prev + 1) % servicesData.length);
  };

  const prevService = () => {
    setDirection(-1);
    setSelectedService(
      (prev) => (prev - 1 + servicesData.length) % servicesData.length
    );
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-white">
      {/* Background pattern matching the hero */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FDBA74"
            d="M800.2,467.4C719,579.5,479,720.9,321.4,694.7C163.8,668.5,88.4,474.7,65.3,316.5C42.2,158.3,70.5,35.6,220.6,6.3C370.7-23,642.6,35.3,800.2,197.6C957.9,360,881.4,415.3,800.2,467.4Z"
            transform="translate(-100, -100) scale(1.2)"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 min-h-screen flex items-center">
        <div className="w-full">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Our <span className="text-orange-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the unique travel experiences we specialize in, crafted
              to make your journey unforgettable.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Service Cards Grid */}
            <div className="grid grid-cols-2 gap-6">
              {servicesData.map((service, index) => (
                <motion.div
                  key={service.id}
                  className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                    index === selectedService ? "ring-4 ring-orange-500" : ""
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setDirection(index > selectedService ? 1 : -1);
                    setSelectedService(index);
                  }}
                >
                  <div className="aspect-square relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-bold text-lg">{service.title}</h3>
                    </div>
                    {index === selectedService && (
                      <div className="absolute top-4 right-4">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Side - Featured Service Details */}
            <div className="relative h-96 lg:h-[500px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={selectedService}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute inset-0"
                >
                  <div className="bg-white rounded-2xl shadow-2xl p-8 h-full flex flex-col justify-between">
                    <div>
                      <div
                        className="w-12 h-1 rounded-full mb-6"
                        style={{
                          backgroundColor: servicesData[selectedService].color,
                        }}
                      />
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {servicesData[selectedService].title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-8">
                        {servicesData[selectedService].description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <Link
                        href="/services"
                        className="inline-block px-8 py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transform hover:scale-105 transition duration-300"
                      >
                        Learn More
                      </Link>

                      {/* Navigation Arrows */}
                      <div className="flex space-x-4">
                        <button
                          onClick={prevService}
                          className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300"
                        >
                          ←
                        </button>
                        <button
                          onClick={nextService}
                          className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300"
                        >
                          →
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* View All Services Link */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-4">
              We offer much more than these core services
            </p>
            <Link
              href="/services"
              className="inline-flex items-center text-lg font-semibold text-orange-600 hover:text-orange-700 transition duration-200 group"
            >
              VIEW ALL SERVICES IN DETAIL
              <span className="ml-2 group-hover:translate-x-2 transition-transform duration-200">
                &rarr;
              </span>
            </Link>
          </div>

          {/* Service Indicators */}
          <div className="flex justify-center space-x-3 mt-12">
            {servicesData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > selectedService ? 1 : -1);
                  setSelectedService(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedService
                    ? "bg-orange-600 scale-125"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGallery;
