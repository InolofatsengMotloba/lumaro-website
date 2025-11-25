"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      title: "Company Registration",
      description: "Legally register your business with ease.",
      image: "registration.jpg",
    },
    {
      title: "Business Proposal",
      description: "Professional proposals that win with clients",
      image: "proposal.jpg",
    },
    {
      title: "Business Plan",
      description: "A clear, goal-driven plan for your business growth",
      image: "Bplan.png",
    },
    {
      title: "Financial Statements",
      description: "Accurate statements for smarter business decisions",
      image: "financial.png",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-font text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#63564d]">
          Our{" "}
          <span className="text-[#e0a07a] text-font bg-clip-text">
            Services
          </span>
        </h2>

        <div className="flex justify-center mt-4">
          <p className="text-font text-lg text-[#63564d] max-w-2xl mb-12">
            Comprehensive business, branding, and digital solutions designed to
            help your company launch, grow, and operate professionally.
          </p>
        </div>

        {/* Scrollable container with gradient hints */}
        <div className="relative text-start">
          {/* Gradient fade on right side - visible on mobile/tablet */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10 lg:hidden"></div>

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

        <Link
          href="/services"
          className="hidden sm:inline-flex items-center justify-center gap-3 text-[#63564d] hover:text-[#e0a07a] px-6 py-2 rounded-full  transition-all duration-300 group mt-12 text-lg font-semibold transform hover:scale-105"
        >
          <span className="tracking-wide">View All Services</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
        </Link>

        {/* Mobile "View All" link */}
        <Link
          href="/services"
          className="inline-flex sm:hidden items-center justify-center gap-3 text-[#63564d] hover:text-[#e0a07a] px-6 py-3 rounded-full  transition-all duration-300 group mt-8 text-base font-semibold transform hover:scale-105"
        >
          <span className="tracking-wide">View All Services</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
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
