"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Digital Marketing",
      description: "Strategic campaigns that drive results",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop",
    },
    {
      title: "Brand Strategy",
      description: "Build a memorable brand identity",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=400&fit=crop",
    },
    {
      title: "Web Development",
      description: "Modern websites that convert",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=400&fit=crop",
    },
    {
      title: "Content Creation",
      description: "Engaging content for your audience",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=500&h=400&fit=crop",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900">
            Our Services
          </h2>
          <a
            href="/services"
            className="hidden sm:flex items-center gap-2 text-[#63564d] hover:text-[#4a3f38] transition-colors group"
          >
            <span className="text-sm font-medium">View All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <p className="text-lg text-[#63564d] max-w-2xl mb-12">
          We prioritize quality over quantity, building partnerships and
          relationships designed for long-term strategic success.
        </p>

        {/* Scrollable container with gradient hints */}
        <div className="relative">
          {/* Gradient fade on right side - visible on mobile/tablet */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10 lg:hidden"></div>

          <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-4 sm:gap-6 min-w-min lg:grid lg:grid-cols-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 sm:w-72 lg:w-auto group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-56 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-semibold mb-1">
                        {service.title}
                      </h3>
                      <p className="text-sm text-white/90">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile "View All" link */}
        <a
          href="/services"
          className="flex sm:hidden items-center justify-center gap-2 text-[#63564d] hover:text-[#4a3f38] transition-colors group mt-8"
        >
          <span className="text-sm font-medium">View All Services</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
