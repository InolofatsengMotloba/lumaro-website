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

// --- COMPONENTS ---

// Component for a Primary Specialty Card
const SpecialtyCard = ({ service }) => (
  <div className="flex flex-col space-y-6 p-8 border border-[#bcada3] bg-[#f4eee5] hover:border-[#63564d] transition duration-300">
    <service.icon size={40} className="text-[#63564d]" />
    <h3 className="text-3xl font-serif font-medium text-[#63564d]">
      {service.title}
    </h3>
    <p className="text-lg text-[#63564d] leading-relaxed">
      {service.description}
    </p>
    <Link
      href={`/services/${service.title
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "-")}`}
      className="text-sm font-semibold uppercase tracking-widest text-[#dca37c] hover:text-gray-700 transition duration-200 mt-2 self-start"
    >
      Learn More &rarr;
    </Link>
  </div>
);

// Component for a Supplementary Service Item
const SupplementaryItem = ({ service }) => (
  <div className="flex items-start space-x-6 p-4 border-b border-gray-100 hover:bg-gray-50 transition duration-200">
    <service.icon size={20} className="text-[#63564d] mt-1 flex-none" />
    <h3 className="text-lg font-medium text-[#63564d]">{service.title}</h3>
  </div>
);

// --- MAIN PAGE COMPONENT ---

export default function Services() {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto py-16 px-8 lg:py-24">
        {/* Hero Section - Matching Contact Page Style */}
        <div className="text-center mb-20">
          <p className="text-sm font-light uppercase tracking-widest text-[#dca37c] mb-2">
            What We Do
          </p>
          <h1 className="heading-font text-6xl md:text-8xl font-serif font-light text-[#63564d] tracking-tighter">
            Our Solutions
          </h1>
          <p className="mt-6 text-lg text-[#63564d] max-w-3xl mx-auto">
            From digital marketing to IT communication, we deliver tailored
            solutions that illuminate opportunities and drive real impact.
          </p>
        </div>

        {/* --- SECTION 1: CORE SPECIALTIES (The 2) --- */}
        <div className="mb-24">
          <h2 className="text-4xl font-serif font-medium text-center text-[#63564d] mb-12 border-b border-[#bcada3] pb-4 max-w-md mx-auto">
            Core Specialties
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {specialties.map((service) => (
              <SpecialtyCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* --- SECTION 2: ADDITIONAL SERVICES (The 6) --- */}
        <div className="mb-16">
          <h2 className="text-4xl font-serif font-medium text-center text-[#63564d] mb-12 border-b border-[#bcada3] pb-4 max-w-md mx-auto">
            Supporting Services
          </h2>

          {/* Layout: Use a responsive grid for the 6 items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4">
            {supplementaryServices.map((service, index) => (
              <SupplementaryItem key={index} service={service} />
            ))}
          </div>
        </div>

        {/* --- FINAL CTA (Matching Footer/Contact Style) --- */}
        <div className="mt-20 text-center border-t border-[#bcada3] pt-12">
          <h3 className="text-4xl font-serif font-light text-[#63564d] mb-4">
            Ready to Discuss Your Project?
          </h3>
          <p className="text-lg text-[#63564d] mb-8">
            Let's schedule a strategic consultation to tailor our services to
            your exact needs.
          </p>
          <Link
            href="/contact"
            className="inline-block py-3 px-8 text-sm font-semibold uppercase tracking-widest text-white bg-[#dca37c] hover:bg-[#d99a70] transition duration-300 border border-[#bcada3]"
          >
            START A PROJECT
          </Link>
        </div>
      </main>
    </div>
  );
}
