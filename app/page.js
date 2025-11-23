import React from "react";
import Link from "next/link";
import {
  FaRegStar,
  FaHandshake,
  FaAddressCard,
  FaCheckCircle,
  FaRegFileAlt,
} from "react-icons/fa";
import Image from "next/image";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";

// --- DATA ---

const servicesSummary = [
  {
    title: "Comapny Registration",
    icon: FaRegFileAlt,
    description:
      "We help you register your business legally in South Africa, ensuring full compliance with CIPC, SARS, and CSD requirements. From name reservation to final certification and CSD registration, making the process simple, efficient, and reliable.",
  },
  {
    title: "Company Profile",
    icon: FaAddressCard,
    description:
      "We craft professional company profiles that reflect your brand identity, values, and offerings. Lumaro helps you present your business with clarity and confidence to attract clients, investors, and partners.",
  },
];

const features = [
  {
    title: "Proven Track Record",
    description:
      "Over 25 successful projects completed with an average client revenue increase of 30%.",
    icon: FaCheckCircle,
  },
  {
    title: "Dedicated Partnership",
    description:
      "We embed with your company/brand, acting as a true partner rather than just a vendor.",
    icon: FaHandshake,
  },
  {
    title: "Excellence in Execution",
    description:
      "Our minimalist philosophy means flawless delivery and zero unnecessary complexity.",
    icon: FaRegStar,
  },
];

const testimonials = [
  {
    quote:
      "Lumaro transformed our brand visibility. The clarity and structure they brought to our digital strategy were unparalleled.",
    name: "D. Retlareng",
    title: "Marketing Director, Fancy Corp.",
  },
  {
    quote:
      "The website build was fast, secure, and beautiful. They nailed the minimalist aesthetic while delivering enterprise performance.",
    name: "O. Diale",
    title: "Director, Tagline Tattoo Studio",
  },
];

// --- COMPONENTS ---

// Component for a Feature Item in "Why Choose Us"
const FeatureItem = ({ feature }) => (
  <div className="space-y-4 p-6 border border-[#bcada3] hover:border-black transition duration-300">
    <feature.icon size={28} className="text-[#dca37c]" />
    <h3 className="text-xl font-serif font-medium text-[#63564d]">
      {feature.title}
    </h3>
    <p className="text-[#63564d] text-base">{feature.description}</p>
  </div>
);

// --- MAIN PAGE COMPONENT ---

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#63564d]">
      <main>
        <div>
          <Hero />
        </div>

        {/* --- 2. SERVICES SUMMARY --- */}
        <ServicesSection />

        <hr className="max-w-3xl mx-auto border-[#bcada3]" />

        {/* --- 3. WHY CHOOSE US --- */}
        <WhyChooseUs />

        <hr className="max-w-3xl mx-auto border-[#bcada3]" />

        {/* --- 4. REVIEWS/TESTIMONIALS --- */}
        <Reviews />
      </main>
    </div>
  );
}
