"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const servicesData = [
  {
    id: 1,
    title: "Company Registration & Profile",
    description:
      "Start your business on the right foot with a seamless registration process and a professionally crafted company profile. We help you establish a strong foundation that attracts clients, investors, and opportunities. By supporting new entrepreneurs, especially young people, we aim to reduce youth unemployment through business creation and empowerment.",
    image: "/registration.jpg",
    color: "#e0a07a",
  },
  {
    id: 2,
    title: "Business Proposal",
    description:
      "Stand out and secure more opportunities with a compelling, well-structured business proposal. We craft proposals that clearly communicate your value, strengthen your pitch, and help you win clients or funding.",
    image: "/proposal.jpg",
    color: "#e9a46a",
  },
  {
    id: 3,
    title: "Business Plan",
    description:
      "Whether you're launching, scaling, or seeking funding, a strong business plan is essential. We create detailed, investor-ready business plans tailored to your goals and industry.",
    image: "/Bplan.png",
    color: "#e58c41",
  },
  {
    id: 4,
    title: "Financial Statements",
    description:
      "Make informed decisions with accurate, reliable financial statements prepared for clarity and compliance. We help you understand your numbers so you can manage your business with confidence.",
    image: "/financial.png",
    color: "#e58c41",
  },
];

const ServicesGallery = () => {
  const [selectedService, setSelectedService] = useState(0);
  const [direction, setDirection] = useState(0);
  const [imageErrors, setImageErrors] = useState({});

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
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 items-stretch">
          {/* LEFT: Services Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                className={`relative rounded-xl overflow-hidden cursor-pointer group 
            h-32 sm:h-36 md:h-40 
            ${index === selectedService ? "ring-2 ring-[#e0a07a]" : ""}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setDirection(index > selectedService ? 1 : -1);
                  setSelectedService(index);
                }}
              >
                <div className="h-full relative">
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
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <div className="text-center p-3">
                        <div
                          className="w-10 h-10 mx-auto mb-2 rounded-full flex items-center justify-center text-white font-bold text-sm"
                          style={{ backgroundColor: service.color }}
                        >
                          {service.title.charAt(0)}
                        </div>
                        <span className="text-gray-700 font-medium text-xs sm:text-sm line-clamp-2">
                          {service.title}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-font text-white font-bold text-xs sm:text-sm leading-tight line-clamp-2">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: Selected Service Panel */}
          <div className="relative min-h-[280px] sm:min-h-[320px] lg:min-h-[360px]">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={selectedService}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 250, damping: 25 },
                  opacity: { duration: 0.4 },
                }}
                className="absolute inset-0"
              >
                <div
                  className="rounded-xl shadow-xl p-4 sm:p-6 h-full flex flex-col justify-between"
                  style={{
                    backgroundColor: servicesData[selectedService].color + "15",
                  }}
                >
                  <div className="flex-1 flex flex-col min-h-0">
                    {" "}
                    {/* Added container for better overflow handling */}
                    <div
                      className="w-10 h-1 rounded-full mb-3 sm:mb-4"
                      style={{
                        backgroundColor: servicesData[selectedService].color,
                      }}
                    />
                    <h3 className="text-font text-xl sm:text-2xl font-bold text-[#63564d] mb-3 sm:mb-4 line-clamp-2">
                      {servicesData[selectedService].title}
                    </h3>
                    <div className="flex-1 overflow-hidden">
                      {" "}
                      {/* Wrapper for scrollable content */}
                      <p className="text-font text-[#63564d] text-sm sm:text-base leading-relaxed overflow-y-auto max-h-[180px] sm:max-h-[200px] pr-2 break-words">
                        {servicesData[selectedService].description}
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-2 mt-4">
                    <button
                      onClick={prevService}
                      className="p-2 px-3 rounded-full bg-white hover:bg-gray-100 transition shadow-md text-sm"
                    >
                      ←
                    </button>
                    <button
                      onClick={nextService}
                      className="p-2 px-3 rounded-full bg-white hover:bg-gray-100 transition shadow-md text-sm"
                    >
                      →
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGallery;
