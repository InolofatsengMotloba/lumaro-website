import React from "react";
import Link from "next/link";
import {
  FaRegFileAlt,
  FaAddressCard,
  FaPrint,
  FaLaptopCode,
  FaPalette,
  FaShoppingCart,
  FaBullhorn,
  FaRocket,
} from "react-icons/fa";
import ServicesGallery from "@/components/ServicesGallery";
import ServicesGrid from "@/components/ServicesGrid";

// --- SERVICE DATA ---

// The 2 Specialties (Primary Focus)
const specialties = [
  {
    id: 1,
    title: "Comapny Registration", // Note: Typo here - should be "Company Registration"
    description:
      "We help you register your business legally in South Africa, ensuring full compliance with CIPC, SARS, and CSD requirements. From name reservation to final certification and CSD registration, making the process simple, efficient, and reliable.",
    icon: FaRegFileAlt,
  },
  {
    id: 2,
    title: "Company Profile",
    description:
      "We craft professional company profiles that reflect your brand identity, values, and offerings. Lumaro helps you present your business with clarity and confidence to attract clients, investors, and partners.",
    icon: FaAddressCard,
  },
];

// The 6 Supporting Services
const supplementaryServices = [
  { title: "Printing & Signange", icon: FaPrint },
  { title: "Website Development & Hosting", icon: FaLaptopCode },
  { title: "Creative & Graphic design", icon: FaPalette },
  { title: "E-commerce", icon: FaShoppingCart },
  { title: "Marketing", icon: FaBullhorn },
  { title: "Digital & Brand Solutions", icon: FaRocket },
];

// --- MAIN PAGE COMPONENT ---

export default function Services() {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto py-20 px-2 sm:px-0 lg:py-28">
        {/* Background elements (subtle map contour, similar to the image) */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#e9a46a"
              d="M800.2,467.4C719,579.5,479,720.9,321.4,694.7C163.8,668.5,88.4,474.7,65.3,316.5C42.2,158.3,70.5,35.6,220.6,6.3C370.7-23,642.6,35.3,800.2,197.6C957.9,360,881.4,415.3,800.2,467.4Z"
              transform="translate(-100, -100) scale(1.2)"
            />
          </svg>
        </div>
        {/* Hero Section - Matching Contact Page Style */}
        <div className="text-center my-9 px-6 sm:px-8">
          <h1 className="text-font text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#63564d] leading-tight mb-2">
            Our{" "}
            <span className="bg-gradient-to-r from-[#e0a07a] to-[#63564d] bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <div className="flex justify-center mt-4">
            <p className="text-font sm:text-lg text-[#63564d] mb-6 max-w-2xl lg:mx-0">
              From digital marketing to IT communication, we deliver tailored
              solutions that illuminate opportunities and drive real impact.
            </p>
          </div>
        </div>
        {/* --- SECTION 1: CORE SPECIALTIES --- */}
        <ServicesGallery />
        {/* --- SECTION 2: OTHER SERVICES --- */}
        <ServicesGrid />
        {/* --- FINAL CTA (Matching Footer/Contact Style) --- */}
        <div className="mt-16 sm:mt-20 text-center border-t border-[#bcada3] pt-8 sm:pt-12">
          <h3 className="text-font text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#63564d] mb-3 sm:mb-4 px-4">
            Ready to Discuss Your Project?
          </h3>
          <p className="text-font text-base sm:text-lg text-[#63564d] mb-4 sm:mb-6 px-4 sm:px-0 max-w-2xl mx-auto leading-relaxed">
            Let's schedule a strategic consultation to tailor our services to
            your exact needs.
          </p>
          <div className="px-4 sm:px-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center py-3 px-6 text-sm sm:text-base font-semibold rounded-xl sm:rounded-2xl text-white bg-[#e0a07a] hover:shadow-lg hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto max-w-xs mx-auto sm:mx-0"
            >
              START A PROJECT
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
