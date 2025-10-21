"use client";

import React from "react";
import { useState, useEffect } from "react";
import {
  FaHandshake,
  FaLightbulb,
  FaAward,
  FaHandsHelping,
  FaUsers,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";
import { GoMilestone } from "react-icons/go";
import Link from "next/link";

// --- COMPANY DATA ---

const companyInfo = {
  founded: "2014",
  projects: "25+",
  locations: [
    {
      city: "Dubai, UAE",
      role: "Exhibition",
      year: "2022 & 2023:",
      event: "Global Tech Expo",
    },
    {
      city: "Morocco",
      role: "Exhibition",
      year: "2024:",
      event: "GITEX Africa",
    },
    {
      city: "London, UK",
      role: "Exhibition",
      year: "2025:",
      event: "London Tech Week",
    },
  ],

  mission:
    "To empower businesses and communities with information technology through innovative marketing, digital, and technology solutions while creating meaningful opportunities for South African youth. We are committed to reducing youth unemployment by equipping young people with skills, mentorship, and pathways to sustainable careers.",
  vision:
    "To be a leading African brand that drives business growth and social transformation, where creativity, technology,and strategic innovation combine to inspire youth empowerment and reduce unemployment across South Africa and Africa at large.",
};

const coreValues = [
  {
    title: "Innovation",
    description:
      "We embrace creativity and continuously seek innovative solutions to stay ahead in the industry.",
    icon: FaLightbulb,
  }, // Star
  {
    title: "Quality Excellence",
    description:
      "Uncompromising standards in every product and service we deliver to our clients.",
    icon: FaAward,
  }, // Dot
  {
    title: "Community Empowerment",
    description:
      "Creating opportunities for youth and women through training and skills development.",
    icon: FaHandsHelping,
  }, // Square
  {
    title: "Customer Centric",
    description:
      "Building lasting relationships by putting our clients' needs at the forefront.",
    icon: FaUsers,
  }, // Triangle
  {
    title: "Integrity",
    description:
      "Operating with honesty, transparency and ethical business practices.",
    icon: FaShieldAlt,
  }, // Square
  {
    title: "Economic Impact",
    description:
      "Contributing to poverty alleviation and infrastructure development through our work.",
    icon: FaChartLine,
  }, // Triangle
];

const partnersAndSupport = {
  partners: [
    "Local printing and material suppliers",
    "ICT technology providers",
    "National marketing and media agencies",
  ],
  support: [
    "ECDC",
    "SEDA",
    "South African Electrotechnical Export Council",
    "OR Tambo District Municipality",
  ],
};

// --- COMPONENTS ---

// Component for Core Value Item (Styled with an elegant simple icon)
const ValueItem = ({ value }) => {
  const IconComponent = value.icon;

  return (
    <div className="space-y-3 p-6 border-b border-gray-100 hover:bg-gray-50 transition duration-200">
      <div className="text-3xl text-[#63564d]">
        <IconComponent />
      </div>
      <h3 className="text-xl font-serif font-medium text-[#63564d]">
        {value.title}
      </h3>
      <p className="text-[#63564d] text-sm">{value.description}</p>
    </div>
  );
};

// --- Animated Counter ---
const AnimatedCounter = ({ targetNumber, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = targetNumber / (duration / 16); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [targetNumber, duration]);

  return <>{count}+</>;
};

// --- MAIN PAGE COMPONENT ---

export default function About() {
  return (
    <div className="min-h-screen bg-[#f6f3ec]">
      <main className="max-w-7xl mx-auto py-16 px-8 lg:py-24">
        {/* Hero Section: The Big Question */}
        <div className="text-center mb-20">
          <p className="text-sm font-light uppercase tracking-widest text-[#dca37c] mb-2">
            The Lumaro Story
          </p>
          <h1 className="heading-font text-6xl md:text-8xl font-serif font-light text-[#63564d] tracking-tighter">
            We Are LUMARO
          </h1>
          <p className="mt-6 text-xl text-[#63564d] max-w-3xl mx-auto font-light">
            Just as light reveals hidden beauty, we help companies and brands
            uncover their potential and radiate impact through innovative
            digital solutions.
          </p>
        </div>

        {/* --- SECTION: COMPANY AT A GLANCE (Key Facts) --- */}
        <div className="mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-b border-[#bcada3] py-10">
            <div className="space-y-1">
              <p className="text-4xl font-serif font-medium text-[#63564d]">
                {companyInfo.founded}
              </p>
              <p className="text-sm uppercase tracking-widest text-[#dca37c]">
                Founded
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-4xl font-serif font-medium text-[#63564d]">
                <AnimatedCounter targetNumber={25} />
              </p>
              <p className="text-sm uppercase tracking-widest text-[#dca37c]">
                Projects
              </p>
            </div>

            <div className="space-y-1 col-span-2">
              <p className="text-4xl font-serif font-medium text-[#63564d]">
                Global Footprint
              </p>
              <p className="text-sm uppercase tracking-widest text-[#dca37c]">
                {companyInfo.locations.map((loc) => loc.city).join(" & ")}
              </p>
            </div>
          </div>
        </div>

        {/* --- SECTION: MISSION & VISION (Two Columns) --- */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="space-y-6">
            <h2 className="text-5xl font-serif font-medium text-[#63564d]">
              OUR MISSION
            </h2>
            <p className="text-lg text-[#63564d] leading-relaxed">
              {companyInfo.mission}
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-5xl font-serif font-medium text-[#63564d]">
              OUR VISION
            </h2>
            <p className="text-lg text-[#63564d] leading-relaxed">
              {companyInfo.vision}
            </p>
          </div>
        </div>

        {/* --- SECTION: CORE VALUES (Grid) --- */}
        <div className="mb-24">
          <h2 className="text-4xl font-serif font-medium text-center text-[#63564d] mb-12">
            The Principles That Guide Us
          </h2>
          <div className="grid md:grid-cols-4 gap-8 border-t border-[#bcada3] pt-8">
            {coreValues.map((value) => (
              <ValueItem key={value.title} value={value} />
            ))}
          </div>
        </div>

        {/* --- SECTION: LOCATIONS, PARTNERS & SUPPORT (Split) --- */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* Column 1: Locations */}
          <div className="space-y-8">
            <h2 className="text-4xl font-serif font-medium text-[#63564d]">
              Milestones
            </h2>
            <div className="space-y-6">
              {companyInfo.locations.map((loc, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <GoMilestone size={20} className="text-[#63564d] flex-none" />
                  <div>
                    <p className="text-lg font-semibold text-[#63564d]">
                      {loc.year} {loc.event}
                    </p>
                    <p className="text-sm text-[#63564d]">{loc.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Partners & Support */}
          <div className="space-y-8">
            {/* Partners */}
            <div className="space-y-4">
              <h2 className="text-4xl font-serif font-medium text-[#63564d]">
                Key Partnerships
              </h2>
              <div className="flex flex-wrap gap-4">
                {partnersAndSupport.partners.map((partner) => (
                  <span
                    key={partner}
                    className="text-sm font-semibold uppercase tracking-wider text-[#63564d] border border-[#bcada3] px-3 py-1 bg-[#dca37c]"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>

            {/* Support */}
            <div className="space-y-4 pt-4">
              <h2 className="text-4xl font-serif font-medium text-[#63564d]">
                Support
              </h2>
              <p className="text-sm text-[#63564d]">
                Received support from prestigious organizations
              </p>
              <ul className="space-y-3">
                {partnersAndSupport.support.map((achievement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <FaHandshake
                      size={16}
                      className="text-[#63564d] mt-1 flex-none"
                    />
                    <span className="text-base text-[#63564d]">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* --- FINAL CTA (Recruiting Focus) --- */}
        <div className="mt-12 text-center border-t border-[#bcada3] pt-12">
          <h3 className="text-4xl font-serif font-light text-[#63564d] mb-4">
            Join Our Array of Lights
          </h3>
          <p className="text-lg text-[#63564d] mb-8">
            We are always looking for passionate people who embody our values.
            Explore our current career opportunities.
          </p>
          <Link
            href="/careers"
            className="inline-block py-3 px-8 text-sm font-semibold uppercase tracking-widest text-white bg-[#dca37c] hover:bg-[#d99a70] transition duration-300 border border-[#bcada3]"
          >
            VIEW OPENINGS
          </Link>
        </div>
      </main>
    </div>
  );
}
