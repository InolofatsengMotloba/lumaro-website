import React from "react";
import Link from "next/link";
import {
  FaLaptopCode,
  FaChartLine,
  FaSearch,
  FaMobileAlt,
  FaPaintBrush,
  FaBullhorn,
  FaUsers,
  FaCloudUploadAlt,
} from "react-icons/fa";

// --- SERVICE DATA ---

// The 2 Specialties (Primary Focus)
const specialties = [
  {
    id: 1,
    title: "Digital Strategy & Consulting",
    description:
      "We craft comprehensive digital blueprints designed for sustained growth. This involves market analysis, competitive auditing, and defining clear, measurable objectives for your brand.",
    icon: FaChartLine,
  },
  {
    id: 2,
    title: "Full-Stack Web Development",
    description:
      "Building custom, scalable, and secure web platforms from the ground up using modern frameworks. We deliver enterprise-level performance and pixel-perfect design integration.",
    icon: FaLaptopCode,
  },
];

// The 6 Supporting Services
const supplementaryServices = [
  { title: "Advanced SEO & Content Marketing", icon: FaSearch },
  { title: "Mobile App Development (iOS/Android)", icon: FaMobileAlt },
  { title: "UX/UI Design & Prototyping", icon: FaPaintBrush },
  { title: "PPC & Paid Social Campaigns", icon: FaBullhorn },
  { title: "Managed Cloud & Hosting Solutions", icon: FaCloudUploadAlt },
  { title: "Team Training & Onboarding", icon: FaUsers },
];

// --- COMPONENTS ---

// Component for a Primary Specialty Card
const SpecialtyCard = ({ service }) => (
  <div className="flex flex-col space-y-6 p-8 border border-gray-200 bg-white hover:border-black transition duration-300">
    <service.icon size={40} className="text-black" />
    <h3 className="text-3xl font-serif font-medium text-black">
      {service.title}
    </h3>
    <p className="text-lg text-gray-700 leading-relaxed">
      {service.description}
    </p>
    <Link
      href={`/services/${service.title
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "-")}`}
      className="text-sm font-semibold uppercase tracking-widest text-black hover:text-gray-700 transition duration-200 mt-2 self-start"
    >
      Learn More &rarr;
    </Link>
  </div>
);

// Component for a Supplementary Service Item
const SupplementaryItem = ({ service }) => (
  <div className="flex items-start space-x-6 p-4 border-b border-gray-100 hover:bg-gray-50 transition duration-200">
    <service.icon size={20} className="text-gray-700 mt-1 flex-none" />
    <h3 className="text-lg font-medium text-black">{service.title}</h3>
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
          <h1 className="text-6xl md:text-8xl font-serif font-light text-black tracking-tighter">
            Our Solutions
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            We partner with ambitious brands to deliver end-to-end digital
            excellence. Our work is driven by strategic insight and technical
            mastery.
          </p>
        </div>

        {/* --- SECTION 1: CORE SPECIALTIES (The 2) --- */}
        <div className="mb-24">
          <h2 className="text-4xl font-serif font-medium text-center text-black mb-12 border-b border-gray-200 pb-4 max-w-md mx-auto">
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
          <h2 className="text-4xl font-serif font-medium text-center text-black mb-12 border-b border-gray-200 pb-4 max-w-md mx-auto">
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
        <div className="mt-20 text-center border-t border-gray-200 pt-12">
          <h3 className="text-4xl font-serif font-light text-black mb-4">
            Ready to Discuss Your Project?
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            Let's schedule a strategic consultation to tailor our services to
            your exact needs.
          </p>
          <Link
            href="/contact"
            className="inline-block py-3 px-8 text-sm font-semibold uppercase tracking-widest text-white bg-black hover:bg-gray-800 transition duration-300 border border-black"
          >
            START A PROJECT
          </Link>
        </div>
      </main>
    </div>
  );
}
